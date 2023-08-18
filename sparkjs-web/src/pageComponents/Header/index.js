import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.scss';
import GenralPopup from '../../components/GeneralPopup';
import EventsManager from '../../containers/EventsManager';



const Header = ( {title} ) => {

  const { search } = useLocation();
  return (
    <div>
      <div className={styles.wrapper}>      
        <ul>
          <li><Link to={`/home${search}`}>DEVICES</Link></li>
          <li><Link to={`/account${search}`}>ACCOUNT</Link></li>
          <li><Link to={`/setup${search}`}>SETTINGS</Link></li>       
          <li><Link to={`/about${search}`}>ABOUT</Link></li>
          <li><Link to={`/sign-out${search}`}>SIGN OUT</Link></li>
        </ul>
      </div>
      <GenralPopup showPopup={false} />
    </div>
  );
}
export default Header;