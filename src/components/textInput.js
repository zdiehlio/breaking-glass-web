import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

const TextInput = (props) => {
  console.log('props', props)
  
  return(
    <div>
      <TextField 
        hintText={props.title}
        onChange={() => props.itemInput(this.value)}
        multiLine={true}
      />
    </div>
  )
}

export default TextInput