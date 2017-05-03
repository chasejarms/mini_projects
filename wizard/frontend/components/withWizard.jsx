import React from 'react';

// this probably isn't the best way to build a wizard
// component but I think it hits home on the idea of
// higher order components so why not

const withWizard = (...components) => {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0,
        maxIndex: components.length - 1
      }
      this.next = this.next.bind(this);
      this.previous = this.next.bind(this);
      this.finish = this.finish.bind(this);
    }

    next() {
      if (this.state.index < maxIndex) {
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
      const { index, maxIndex } = this.props;
      const component = components[index];
      return <component
        next={this.next}
        previous={this.previous}
        exit={this.props.exit}
        first={index === 0}
        last={index === maxIndex}/>;
    }
  };
}

export default withWizard;
