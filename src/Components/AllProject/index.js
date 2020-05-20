import React from 'react';
import { Toast, ToastBody, ToastHeader, Container } from 'reactstrap';
import { connect } from "react-redux";
import { fetchUsers } from '../../Redux/Action/UserAction';
import { Spin } from 'antd';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
class AllProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }


  }
  componentDidMount() {
    this.props.dispatch(fetchUsers());

  }
  render() {


    return (


      < div className={'all-project-container'} >
        <div className={'spin-container'}>
          {
            this.props.user.loading ?
              < Spin /> : ''
          }
        </div>
        {
          this.props.user && this.props.user.users.map(user =>
            <Toast>

              <ToastHeader className={'title-Container'}>
                {user.title}
              </ToastHeader>
              <ToastBody >

                <Col className={'toast-container'}>
                  <h5> Project Type</h5>:{user.project_type}
                </Col>
                <Col className={'toast-container'}>
                  <h5> Start Date</h5>:{user.start_date}
                </Col>
                <Col className={'toast-container'}>
                  <h5> Team</h5>: {user.team}
                </Col>
                <Col className={'toast-container'}>
                  <h5> Description</h5>:{user.description}
                </Col>

                <Col className={'toast-container'}>
                  <h5>
                    pending Work</h5>:{user.pending_work}
                </Col>

              </ToastBody>

            </Toast>
          )
        }
      </div >
    )
  }
}


const mapStateToProps = state => ({
  user: state.user,

});


export default connect(mapStateToProps)(AllProject);