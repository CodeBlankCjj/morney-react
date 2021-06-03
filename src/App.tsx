import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="money"/>
        <Route path="/tags">
          <Tags/>
        </Route>
        <Route path="/money">
          <Money/>
        </Route>
        <Route path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return <h2>输错地址了！！！！！！</h2>;
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>Money</h2>
    </Layout>
  );
}

export default App;
