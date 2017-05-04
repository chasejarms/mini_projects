import React from 'react';
import Button from './Button';

const Finish = (props) => {
  return (
    <Button onClick={props.previous} text='Go back'/>
  )
}

export default Finish;
