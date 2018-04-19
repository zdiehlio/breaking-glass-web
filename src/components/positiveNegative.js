import React, { Component } from 'react'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'

const iconStyles = {
  width: 50,
  height: 50,
}

const PositiveNegative = (props) => {
  return(
    <div className='positive-negative'>
      <div>How would you rate your experience?</div>
      <div className='icon'><button onClick={() => props.onPress('positive')}><ThumbUp style={iconStyles} /></button></div>
      <div className='icon'><button onClick={() => props.onPress('negative')}><ThumbDown style={iconStyles} /></button></div>
    </div>
  )
}

export default PositiveNegative