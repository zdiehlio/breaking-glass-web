import React, { Component } from 'react'

import RateCompany from './rateCompany'
import PositiveNegative from './positiveNegative'
import PeerLeader from './peerLeader'
import Confidence from './confidence'
import Development from './development'
import Retention from './retention'
import InteractionReport from './interactionReport'
import Finished from './finished'


class Rating extends Component {
  constructor(props) {
    super(props)
  this.state = {
    section: 'positiveNegative'
  }
  this.handleRating = this.handleRating.bind(this)
  this.handleText = this.handleText.bind(this)
}

handleRating(val) {
  this.setState({section: val})
}

handleText(val) {
  console.log('val', val)
  this.setState({description: val})
}

renderSection() {
  switch(this.state.section) {
    case 'positiveNegative':
      return <PositiveNegative onPress={this.handleRating}/>
    case 'positive' || 'negative':
      return <PeerLeader onPress={this.handleRating} />
    case 'peerLeader':
      return <Confidence onPress={this.handleRating} />
    case 'confidence':
      return <Development onPress={this.handleRating} />
    case 'development':
      return <Retention onPress={this.handleRating} />
    case 'retention':
      return <InteractionReport onPress={this.handleRating} />
    case 'finished':
      return <Finished />
  }
}
  render() {
    console.log('state', this.state)
    
    return(
      <div className='main-content'>
        {this.renderSection()}
      </div>
    )
  }
}

export default Rating