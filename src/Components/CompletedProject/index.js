import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import CustomButton from '../Common/CustomButton';
class CompletedProject extends React.Component {
  render() {
    return (
      <div>
        <FormGroup>
          <Label>Name</Label>
          <Input type="text" name="email" id="exampleEmail" placeholder="Project name" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Developer Status</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            Yes
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            No
          </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Comments</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Tester Status</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            Yes
          </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
            No
          </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Comments</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </FormGroup>
        <CustomButton label={'Submit'} />
      </div>
    )
  }
}
export default CompletedProject;