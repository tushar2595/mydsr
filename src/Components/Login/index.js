import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../Common/CustomButton';
//import { PostData } from '../../Services';
import './style.scss';
import { login } from '../../Services/index';
import { Redirect } from 'react-router-dom';

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
    e.preventDefault();
    let userData = { email: this.state.email, password: this.state.password }
    login('login', userData).then((result) => {
      let responseJSON = result;
      if (responseJSON.success === true) {
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
        {this.renderHome()}
        <form onSubmit={this.handleSubmit}>
          <div >
            <TextField
              className={'email-container'}
              name={'email'}
              label="email"
              variant="outlined"
              type="text"
              onChange={this.handleChange}
            />
          </div>
          <div >
            <TextField
              className={'password-container'}
              name={'password'}
              label="password"
              variant="outlined"
              type="password"
              onChange={this.handleChange}
            />
          </div>
          <div className={'login-btn'}>
            <CustomButton htmlType={'submit'} label={'login'} />
          </div>
        </form>

      </div>
    )
  }
}
export default Login;