import React from 'react';
import Header from '../../Components/Layout/Header';
import Creater from '../../Components/Layout/Creater';
import { connect } from "react-redux";
import { fetchUsers } from '../../Redux/Action/UserAction';
class HomePage extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }
  render() {
    console.log(this.props.user)
    return (
      <div>
        <Header />
        <Creater user={this.props.user} />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user,

});

export default connect(mapStateToProps)(HomePage);
