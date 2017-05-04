import React from 'react';
import Button from './Button';

const Welcome = (props) => {
  return (
    <Button onClick={props.next} text='click to next'/>
  )
}

export default Welcome;
