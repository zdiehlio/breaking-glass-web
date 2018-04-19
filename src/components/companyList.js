import React, { Component } from 'react'

import CompanyCard from './companyCard'

class CompanyList extends Component {
  render() {
    return(
      <div>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
    )
  }
}

export default CompanyList