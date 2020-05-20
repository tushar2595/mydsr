import React from 'react';
import Login from '../../Components/Login'
import { Row, Col } from 'react-bootstrap';
import background from '../../Assests/Images/background.jpg'
import './style.scss';
class Landing extends React.Component {

  render() {
    return (
      <div className={'landing-container'}>
        <div className={'banner-container'}>
          <img src={background} />
        </div>

        <div >
          <Login />
        </div>


      </div>
    )
  }
}
export default Landing;