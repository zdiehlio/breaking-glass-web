import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'

import { getCompanies, createCompany, findCompany } from '../actions'
import Button from './button'

class RateCompany extends Component {
  constructor(props) {
    super(props)

    this.state = {
      company: '',
      results: [],
      data: [],
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount() {
    this.props.getCompanies()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.companies !== this.props.companies) {
      console.log('nextprops', nextProps.companies)
      
      this.setState({data: nextProps.companies})
    }
  }

  handleSearch(event, index, value) {
    this.setState({company: event.target.value})
    if(event.target.value.length <= 2) {
      this.setState({results: []})
    } else {
      for(let val in this.state.data) {
        if(val.toLowerCase().includes(event.target.value.toLowerCase()) && this.state.results.includes(val) == false) {
          this.setState({results: [...this.state.results, val]})
        }
      }
    }
  }

  handleInput(event) {
    this.setState({company: event.target.value})
  }

  renderCompanyList() {
    return this.state.results.map(val => {
      return <div>{val}</div>
    })
  }
  render() {
    console.log('state', this.state)
    console.log('props', this.props.companies)

    return(
      <div>
        <TextField 
          hintText='Company Name'
          multiLine={true}
          onChange={this.handleInput}
        />
        <div>Add New Company</div>
        <TextField 
          hintText='Find Company'
          multiLine={true}
          value={this.state.company}
          onChange={this.handleSearch}
        />
        <button onClick={() => this.props.createCompany(this.state.company)}>Create Company</button>

        {this.renderCompanyList()}

        
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {companies: state.companies}
}

export default connect(mapStateToProps, { getCompanies, createCompany, findCompany })( RateCompany )