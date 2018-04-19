import React, { Component } from 'react'
import TextInput from './textInput'

const InteractionReport = (props) => {
  return(
    <div>
      <div>Please describe the interaction so other women can be informed and teams can take action to change their behaviour.</div>
      <TextInput itemInput={props.descriptionInput}/>
      
    </div>
  )
}

export default InteractionReport