import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../Common/CustomButton';
//import { PostData } from '../../Services';
import './style.scss';
import { login } from '../../Services/index';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Googlelogin from './googleLogin';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    }
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   PostData('login', this.state

  //   ).then((result) => {
  //     console.log(this.state, 'sndjns')
  //     let responseJSON = result;
  //     console.log(responseJSON);
  //   })
  //   console.log(this.state.email);
  //   console.log(this.state.password);
  // }
  renderHome = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }
  handleSubmit = (e) => {
    var ls = require('local-storage');
    e.preventDefault();
    let userData = { email: this.state.email, password: this.state.password }
    login('login', userData).then((result) => {
      let responseJSON = result;
      if (responseJSON.success === true) {
        ls.set('token', responseJSON.token)
        this.setState({
          redirect: true
        })
      }
      console.log(responseJSON, 'ooooooooooo')

    });
  }

  render() {
    return (
      <div className={'login-container'}>
        <Col className={'title-container'}>
          <h3>My DSR</h3>
        </Col>


        {this.renderHome()}
        <form onSubmit={this.handleSubmit}>
          <div className={'form-container'}>
            <Col >
              <TextField
                className={'email-container'}
                name={'email'}
                label="email"
                variant="outlined"
                type="text"
                onChange={this.handleChange}
              />
            </Col>
            <Col >
              <TextField
                className={'password-container'}
                name={'password'}
                label="password"
                variant="outlined"
                type="password"
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <p>Forget password?</p>
              <CustomButton htmlType={'submit'} label={'login'} className={'ant-btn'} />
            </Col>
          </div>
        </form>
        <Col className={'d-flex justify-content-center p-2'}>
          <p>Not a member?<span style={{ color: "red" }}>Sign up </span></p>
        </Col>
        <Col className={'google-btn'}>
          Sign in with
          <Googlelogin />

        </Col>
      </div >
    )
  }
}
export default Login;