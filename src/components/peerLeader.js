import React, { Component } from 'react'
import Button from './button'

const PeerLeader = (props) => {
  return(
    <div>
      <div>Was this interaction with a peer, leader, or interviewer?</div>
      <Button onItemPressed={() => props.onPress('peerLeader')} title={'Peer'}/>
      <Button onItemPressed={() => props.onPress('peerLeader')} title={'Leader'}/>
      <Button onItemPressed={() => props.onPress('peerLeader')} title={'Interviewer'}/>
    </div>
  )
}

export default PeerLeader