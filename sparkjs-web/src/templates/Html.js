import React from 'react';

const publicPath = `${process.env.APP_HOST}:${process.env.ASSETS_SERVER_PORT}/dist/`;

const Html = ({ content, cssBundles, jsBundles, apiData }) => (
  <html lang="en">  
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="ScreenOrientation" content="autoRotate:disabled" />
    <script> 
      var startTime = new Date();
    </script>
    <title>Server Side Rendering and Bundle Splitting</title>

    {jsBundles.map( ( {file}) => (<script src={`${publicPath}${file}`}>{file}</script>) )}

    <script dangerouslySetInnerHTML={{
          __html: `window.__API_DATA__=${JSON.stringify(apiData)}`}} />    
       
  </head>
  <body>
    <div id="root" dangerouslySetInnerHTML={{ __html: content }} />  
    <script src={`${publicPath}main-bundle.js`}></script>
  </body>
</html>  

);

export default Html;  