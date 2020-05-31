import React from 'react';
import Login from '../../Components/Login'
import { Row, Col } from 'react-bootstrap';
import background from '../../Assests/Images/background.jpg'
import './style.scss';
import Register from '../../Register'
class Landing extends React.Component {

  render() {
    return (

      <div className={'landing-container'}>
        <img className={'banner-container'} src={background} />
        <div className={'login-container'}>
          <Login />
        </div>

      </div>
    )
  }
}
export default Landing;