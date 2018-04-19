import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Button from './button'

import './main.css'

class MainContent extends Component {
  render() {
    return(
      <div className='main-content'>
        <Link to='/companylist'><Button title={'Browse Companies'}/></Link>
        <Link to='/rating'><Button title={'Rate Experience'}/></Link>
      </div>
    )
  }
}

export default MainContent