import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const Button = (props) => {
  
  return(
    <div className='nav-container'>
      <RaisedButton 
        label={props.title}
        onClick={props.onItemPressed}
        primary={true}
      />
    </div>
  )
}

export default Button