import React, { Component } from 'react'
import Button from './button'

const Development = (props) => {
  return(
    <div>
      <div>Do you believe this interaction has effect on your professional development and career prospectives?</div>
      <Button onItemPressed={() => props.onPress('development')} title={'Yes'}/>
      <Button onItemPressed={() => props.onPress('development')} title={'No'}/>
    </div>
  )
}

export default Development