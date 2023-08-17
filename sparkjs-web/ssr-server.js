import fs from 'fs';
import React from 'react';
import express from 'express';
import https  from 'https';
import fetch from 'isomorphic-fetch';
import App from './src/components/App';
// import Loadable from 'react-loadable';
// import manifest from './dist/loadable-manifest.json';
// import { getBundles } from 'react-loadable/webpack';
import ReactDOMServer from 'react-dom/server';
import templateList from './src/templates/TemplateList';
import cookieParser from 'cookie-parser';
//import cookiesManagement from './expressMiddlewares/cookiesManagement';
// import requestDataFromAPI from './expressMiddlewares/requestDataFromAPI';
const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;
// import pageData from './expressMiddlewares/pageData';
//import devicesServices from './expressMiddlewares/devicesServices';
//import userServices from './expressMiddlewares/userServices';
//import weatherServices from './expressMiddlewares/WeatherServices';
//import queries from './src/queries';
import bodyParser from 'body-parser';


const {APP_HOST, SERVER_PORT, ENVIRONMENT} = process.env;
let test = null;


const app = new express();

app.use(express.json());
app.use(express.urlencoded({xtended: true}));
app.use(express.text())

app.use(bodyParser.text({ type: 'text/*' }));

app.use(cookieParser());
app.use('/source-maps', express.static('./dist/source-maps'));
app.use('/server-build', express.static('./server-build'));
app.use('/dist', express.static('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express.static('./static-assets/favicon.ico'));
app.use(express.static('static-assets'));
console.log("SERVER_PORT: ", SERVER_PORT);

function responseWithSourceCode(req, res, apiData, templateName) {

  const Html = templateList[req.template];
  const HTML_content = ReactDOMServer.renderToString(<App req={req} />);
  const cssBundles = [];
  const jsBundles = [];
  const html = <Html content={HTML_content} cssBundles={cssBundles} jsBundles={jsBundles} apiData={apiData}/>;
  res.status(200);
  res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);

  //res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(HTML_content)}`);

  //res.send(`TEST 123`);
  res.end();
}

app.get('/Robots.txt', (req, res) => {   
  res.send(`
  User-agent: * Disallow: /
  `)
});



// #############################################################
// All page requests
// #############################################################
app.get('/*', 
  function (req, res, next) {
    console.log("Serving main file ...s");
    const apiData = [];
    const templateName = 'html';
    responseWithSourceCode(req, res, apiData, templateName);
});


app.listen(SERVER_PORT, () => {
  console.log(`😎 Server is listening on port ${SERVER_PORT}`);
});  
