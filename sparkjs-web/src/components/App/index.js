import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link } from 'react-router-dom';
import PageLayout from '../../containers/PageLayout';

import { StaticRouter } from "react-router-dom/server";
import styles from './styles.scss';

const Home = () => (
  <div>      
    <ul>
      <li><Link to={`/home`}>HOME</Link></li>
      <li><Link to={`/about`}>ABOUT</Link></li>
    </ul>
    <h1>Home</h1>
  </div>
);

const About = () => (
  <div>      
    <ul>
      <li><Link to={`/home`}>HOME</Link></li>
      <li><Link to={`/about`}>ABOUT</Link></li>
    </ul>
    <h1>Aboiut</h1>
  </div>
);


const context = {};

const client = () => {
  const cookies = {};
  const apiData = {};

  //console.log(">>>>> [CLIENT] ", window.location.pathname);
  const props = {
    originalUrl: window.location.pathname
  }
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<PageLayout {...props} />} />
        <Route path="/home" element={<Home {...props} />} />
        <Route path="/About" element={<About {...props} />} />
      </Routes>        
    </BrowserRouter>      
  );
}

const server = (props) => {
  const cookies = {};
  const apiData = {};

  return (
    <StaticRouter location={ props.url }  context={context}>
      <PageLayout serverCookies={cookies} apiData={apiData} {...props} />
    </StaticRouter>      
  );
}

export default ( { req } ) => { 
  return (
    <div className={styles.appWrapper}>
      {typeof window == 'undefined' ? server(req) :client(req)}
    </div>   
  );
}

