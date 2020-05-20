import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import { connect } from "react-redux";
import { fetchUsers } from '../../Redux/Action/UserAction';
import { Spin } from 'antd';
import { Row, Col } from 'react-bootstrap';
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


      < div >
        <div className={'d-flex justify-content-center'}>
          {
            this.props.user.loading ?
              < Spin /> : ''
          }
        </div>
        {
          this.props.user && this.props.user.users.map(user =>
            <Toast>

              <ToastHeader>
                {user.title}
              </ToastHeader>
              <ToastBody >

                <Col className={'d-flex'}>
                  <h5> Project Type</h5>:{user.project_type}
                </Col>
                <Col className={'d-flex'}>
                  <h5> Start Date</h5>:{user.start_date}
                </Col>
                <Col className={'d-flex'}>
                  <h5> Team</h5>: {user.team}
                </Col>
                <Col className={'d-flex'}>
                  <h5> Description</h5>:{user.description}
                </Col>

                <Col className={'d-flex'}>
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