import React from 'react';
import { BrowserRouter, Route, Routes, Switch, Link, useLocation } from 'react-router-dom';
import PageLayout from '../../containers/PageLayout';

import { StaticRouter } from "react-router-dom/server";
import styles from './styles.scss';



const Main = (props) => {
  const location = useLocation();
  console.log("Main: ", location.pathname);

  switch(location.pathname) {
    case '/home':
      return <Home/>;
      break;
    case '/about':
      return <About/>
      break;

  }
}

const Home = (props) => {
  console.log(props);
  return (
    <div>      
      <ul>
        <li><Link to={`/home`}>HOME</Link></li>
        <li><Link to={`/about`}>ABOUT</Link></li>
      </ul>
      <h1>Home</h1>
    </div>
  );
}

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

  const props = {    
  }
    
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/*" element={<PageLayout {...props} />} />        
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

