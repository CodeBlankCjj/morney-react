import {useEffect, useRef} from 'react';

const useUpdate = (fn: () => void, desp: any[]) => {
  const count = useRef(0);
  useEffect(() => {count.current += 1;});
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, desp);
};

export default useUpdate;