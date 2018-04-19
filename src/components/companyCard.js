import React, { Component } from 'react'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'

const CompanyCard = (props) => {
  return(
    <Card className='company-card'>
      <CardHeader
        title="Company Name"
        subtitle="Company Description"
        avatar="http://via.placeholder.com/50x50"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardMedia
        expandable={true}
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img src="http://via.placeholder.com/350x65" alt="" />
      </CardMedia>
      <CardTitle expandable={true} title="Card title" subtitle="Card subtitle" />
      <CardText expandable={true}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  )
}

export default CompanyCard