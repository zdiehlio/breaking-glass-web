import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from './button'

const Finished = (props) => {
  return(
    <div>
      <div>Thank you for leaving a rating!</div>
      <Link to='/'><Button title={'Take me Home'}/></Link>

    </div>
  )
}

export default Finished