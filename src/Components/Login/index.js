import React from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../Common/CustomButton';
import { PostData } from '../../Services';
import './style.scss';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    PostData('login', this.state

    ).then((result) => {
      console.log(this.state, 'sndjns')
      let responseJSON = result;
      console.log(responseJSON);
    })
    console.log(this.state.email);
    console.log(this.state.password);
  }


  render() {
    return (
      <div className={'login-container'}>
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