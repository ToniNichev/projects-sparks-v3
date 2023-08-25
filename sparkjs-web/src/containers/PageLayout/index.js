import React, { Component, Suspense } from 'react';
import ComponentList from './ComponentList';
import PageData from './PageData';
import Cookies from 'universal-cookie';
import styles from './styles.scss';
import { useLocation } from 'react-router-dom';

const PageLayout = (props) => {
    
  let wrapperGroup = 0; 
  const location = useLocation();
  console.log("Main: ", location.pathname);

  let url = props.originalUrl ?  props.originalUrl : location.pathname; 

  if(typeof window === 'undefined') {
    // server side 

  } else {
    // client side       
  }



  const pageName = PageData[url] ?  url : "/not-found";
  const page = PageData[pageName];
  const template = page?.template || "template-not-found";

  

  const allLayout = page.layout.map((layoutList) => {
    let componentCount = 0;
    const span = layoutList.span;        
    const wrapperStyle = layoutList.style;
    const layout = layoutList.components.map((component, id , components) => {          
      const componentName = component.name;    
      const props = component.props;    
      const ChildComponent = ComponentList[componentName];
      const style = component.style;
      
      if(typeof ChildComponent === 'undefined') {
        return(
          <div key='{id}' className={styles.error}>Can't find {componentName} component!</div>
        );
      }
      return (
          <div style={style} data-main="true" key={componentName} props={props}>
            <Suspense fallback={<div>Loading...</div>}>
              <ChildComponent/>
            </Suspense>
          </div>
      );
    });
    const wrapperKeyStr = `wrapper_${wrapperGroup}_{componentCount}`;
    //const spanWidth = span[componentCount];

    componentCount ++;
    wrapperGroup ++;    
    
    return (
      <div data-test={span} style={wrapperStyle} className={styles.wrapper} key={wrapperKeyStr}>
        {layout}
      </div>);
  });
  return(
    <div className={styles.app}>
      {allLayout}
    </div>
  );

}
export default PageLayout;
