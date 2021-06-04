import {useEffect, useState} from 'react';
import useUpdate from './useUpdate';

type RecordItem = {
  tagIds: number[]
  note: string
  category: '-' | '+'
  amount: number
}
type newRecordItem = Omit<RecordItem, 'createAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  const addRecord = (newRecord: newRecordItem) => {
    if (newRecord.amount <= 0) {return false;}
    if (newRecord.tagIds.length === 0) {
      alert('请选择至少一个标签');
      return false;
    }
    const record = {...newRecord, createAt: (new Date()).toISOString()};
    setRecords([...records, record]);
    return true;
  };


  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  return {records, addRecord};
};

export default useRecords;