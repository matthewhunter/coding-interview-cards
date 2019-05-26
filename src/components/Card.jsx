import React from 'react'

const Card = props => (
  <div className='card' style={props.cardStyle}>
    <div className='card-back' />
    <div className='card-front' style={props.frontStyle}/>
  </div>
)

export default Card