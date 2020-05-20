import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class NewProject extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="Project name" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Type</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Web</option>
              <option>App</option>
              <option>other</option>

            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />

          </FormGroup>

          <Button>Submit</Button>

        </Form>

      </div>
    )
  }
}
export default NewProject;