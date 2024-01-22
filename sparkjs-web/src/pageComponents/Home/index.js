import React, {Component} from 'react';
import styles from './styles.scss';
const {WEATHER_API_URL} = process.env;



const btnClicked = () => {
  alert("!");
}
class Home extends Component {
  
  
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className={styles.wrapper}>
        <p>Test 123</p>
        <button onClick={ () => { btnClicked() }}>TEST BUTTON</button>
      </div>
    );
  }

}

export default Home;