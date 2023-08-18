import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageLayout from '../../containers/PageLayout';
import styles from './styles.scss';


const client = (props) => {
  return ( 
    <Router>
      <Routes>
        <Route exact path="*" render={(props) => <PageLayout {...props} />} />
      </Routes>
    </Router>
  );
}

const context = {};


const server = (props) => {
  const cookies = props.cookies;
  const apiData = props.apiData;
  return (
    <Routes location={ props.url } serverCookies={cookies} apiData={apiData}  context={context}>
      <Routes>
        <Route exact path="*" render={(props) => <PageLayout serverCookies={cookies} apiData={apiData} {...props} />} />  
      </Routes>            
    </Routes>
  );
}

export default ( { req } ) => { 
  return (
    <div className={styles.appWrapper}>
      {typeof window == 'undefined' ? server(req) :client(req)}
    </div>   
  );
}

