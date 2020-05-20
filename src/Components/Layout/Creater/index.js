import React from 'react';
import { Jumbotron } from 'reactstrap';
import CustomButton from '../../Common/CustomButton';
import NewProject from '../../NewProject';
import OldProject from '../../OldProject';
import CompletedProject from '../../CompletedProject';
import AllProject from '../../AllProject';
class Creater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: false,
      oldProject: false,
      completeProject: false,
      allproject: true
    }
  }
  handleClick = () => {
    this.setState(
      {
        newProject: true,
        oldProject: false,
        completeProject: false,
        allproject: false
      })
  }
  showOldProject = () => {
    this.setState({
      oldProject: true,
      newProject: false,
      completeProject: false,
      allproject: false
    })
  }
  completeProject = () => {
    this.setState({
      oldProject: false,
      newProject: false,
      completeProject: true,
      allproject: false
    })
  }
  showallproject = () => {
    this.setState({
      allproject: true,
      oldProject: false,
      completeProject: false,
      newProject: false

    })
  }
  render() {

    return (
      <div className={'creater-class'}>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <CustomButton label={'All Projects'}
              handleClick={this.showallproject} />
            <CustomButton label={'Create a new project.'}
              handleClick={this.handleClick}
            />
            <CustomButton label={'Working on old project'}
              handleClick={this.showOldProject} />
            <CustomButton label={'Complete Submission'}
              handleClick={this.completeProject} />

          </p>
          {
            this.state.newProject &&
            < NewProject />
          }
          {
            this.state.oldProject &&
            <OldProject />
          }
          {
            this.state.completeProject &&
            <CompletedProject />
          }
          {
            this.state.allproject &&
            < AllProject />
          }

        </Jumbotron>
      </div>
    )
  }
}
export default Creater;