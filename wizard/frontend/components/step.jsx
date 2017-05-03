import React from 'react';
import Button from './button';

class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { next, previous, first, last, exit } = this.props;
    return (
      <div className='progress-divs'>
        <Button onClick={previous} text='Back' />
        <Button onClick={next} text='Forward' />
      </div>
    )
  }
};

export default Step;
