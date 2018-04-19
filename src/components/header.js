import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return(
    <div>
      <Link to='/' >
        <AppBar 
          title='Breaking Glass'
        />
      </Link>
    </div>
  )
}

export default Header