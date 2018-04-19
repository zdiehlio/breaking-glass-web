import React, { Component } from 'react'
import Button from './button'

const Retention = (props) => {
  return(
    <div>
      <div>Did this interaction make you consider employment elsewhere?</div>
      <Button onItemPressed={() => props.onPress('retention')} title={'Yes'}/>
      <Button onItemPressed={() => props.onPress('retention')} title={'No'}/>
    </div>
  )
}

export default Retention