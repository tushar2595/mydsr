import React from 'react';
import Header from '../../Components/Layout/Header';
import Creater from '../../Components/Layout/Creater';
import { connect } from "react-redux";
import { fetchUsers } from '../../Redux/Action/UserAction';
import { Redirect } from 'react-router-dom';
import CustomButton from '../../Components/Common/CustomButton';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }

  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  componentWillMount() {
    var ls = require('local-storage');
    if (!ls.get('token')) {
      this.setState({

        redirect: true
      })
    }

  }
  handleClick = () => {
    var ls = require('local-storage');
    ls.clear();
    this.setState({
      redirect: true
    })
  }
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    console.log(this.props.user)
    return (
      <div>
        {this.renderRedirect()}
        <Header />
        <Creater user={this.props.user} />
        <CustomButton handleClick={this.handleClick} label="logout" />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user,

});

export default connect(mapStateToProps)(HomePage);
