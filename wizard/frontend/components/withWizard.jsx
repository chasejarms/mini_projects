import React from 'react';
import Step from './Step';
import Welcome from './Welcome';
import Finish from './Finish';

const withWizard = (...components) => {

  return (
    class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          index: 0,
          maxIndex: components.length - 1
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }

      next() {
        if (this.state.index < this.state.maxIndex) {
          this.setState({
            index: this.state.index + 1
          });
        }
      }

      previous() {
        if (this.state.index > 0) {
          this.setState({
            index: this.state.index - 1
          });
        }
      }

      render() {
        const { index, maxIndex } = this.state;
        const CurrentStep = components[index];
        return (
          <CurrentStep
            next={this.next}
            previous={this.previous}
            first={index === 0}
            last={index === maxIndex} />
        )
      }
    }
  )
}

export default withWizard(Welcome, Step, Finish);
