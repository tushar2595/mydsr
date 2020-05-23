import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CustomButton from '../Common/CustomButton';
import { DatePicker } from 'antd';
import { Row, Col } from 'react-bootstrap';
import { connect } from "react-redux";
import { saveProject } from '../../Services/saveProject';

class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      project_type: "",
      description: "",
      start_date: "",
      team: "",
      pending_work: ""
    }
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    saveProject(this.state);
    alert('saved');
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Title</Label>
            <Input type="text"
              name="title"
              placeholder="Project name"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup>
            <Label >Type</Label>
            {/* <Input type="select" name="type" onChange={this.handleChange} >
              <option>Web</option>
              <option>App</option>
              <option>other</option>

            </Input> */}
            <Input type="text"
              name="project_type"
              placeholder="Project type"
              onChange={this.handleChange} />
            <Input type="text"
              name="pending_work"
              placeholder="pending work"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label >Description</Label>
            <Input type="textarea"
              name="description"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label >Start Date</Label>

            <Input type="date"
              name="start_date"
              placeholder="date"
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Team</Label>
            <Input type="textarea"
              name="team"
              onChange={this.handleChange} />
          </FormGroup>
          <CustomButton htmlType={'submit'} label={'Submit'} />

        </form>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,

});
const mapDispatchToProps = () => {
  return {
    saveProject
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProject);