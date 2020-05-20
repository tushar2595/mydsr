import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class OldProject extends React.Component {
  render() {
    return (
      <div>
        <Form>


          <FormGroup>
            <Label for="exampleSelect">Project</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>

            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Bugs</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Fixed Bugs</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Pending Bugs</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <FormGroup>
            <Label>Time Spent</Label>
            <Input type="text" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">ScreenShots of fixed bugs</Label>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Comments</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Submit</Button>

        </Form>
      </div>
    )
  }
}
export default OldProject;