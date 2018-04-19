import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

import Button from './button'

class InteractionReport extends Component {
  constructor(props) {
    super(props)

    this.state = {
      report: '',
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({report: event.target.value})
  }
  render() {
    console.log('state', this.state.report)
    
    return(
      <div>
        <div>Please describe the interaction so other women can be informed and teams can take action to change their behaviour.</div>
        <TextField 
          hintText='Describe your interaction'
          multiLine={true}
          onChange={this.handleInput}
        />
        <Button onItemPressed={() => this.props.onPress('finished')} title={'Submit'}/>

        
      </div>
    )
  }
}

export default InteractionReport