import React, { Component } from 'react'
import Button from './button'

const Confidence = (props) => {
  return(
    <div>
      <div>Did this influence your confidence to ask questions and bring up new ideas?</div>
      <Button onItemPressed={() => props.onPress('confidence')} title={'Yes'}/>
      <Button onItemPressed={() => props.onPress('confidence')} title={'No'}/>
    </div>
  )
}

export default Confidence