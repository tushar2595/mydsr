import React, { Component } from 'react';
import CustomButton from '../Components/Common/CustomButton';
import { register } from '../Services/index';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let userData = { name: this.state.name, email: this.state.email, password: this.state.password, }
    register('register', userData).then((result) => {
      let responseJSON = result;
      alert('registered')

      console.log(responseJSON, 'ooooooooooo')

    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name={'name'} type='text' onChange={this.handleChange} />
          <input name={'email'} type='text' onChange={this.handleChange} />
          <input name={'password'} type='text' onChange={this.handleChange} />
          <CustomButton label="signup" htmlType={'submit'} />
        </form>
      </div>
    );
  }
}

export default Register;