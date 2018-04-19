import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header'
import MainContent from './components/mainContent'
import CompanyList from './components/companyList'
import Rating from './components/rating'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Header />
          <Route exact path='/' component={MainContent} />
          <Route exact path='/companylist' component={CompanyList} />
          <Route exact path='/rating' component={Rating} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
