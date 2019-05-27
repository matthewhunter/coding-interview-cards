import React from 'react'
import Card from './Card'

let bottom = 1

const Deck = props => (
  <React.Fragment>
    {props.cards.map(card => {
      let align = Math.random() * 20 - 10
      let cardStyle = () => ({
        transform: `rotate(${align}deg)`,
        bottom: `${bottom}rem`
      })
      let frontStyle = {
        display: 'none'
      }
      bottom = bottom + 1
      return <Card key={card} index={card} cards={props.cards.length} cardStyle={cardStyle()} frontStyle={frontStyle} bottom={bottom} />
    })}
  </React.Fragment>
)

export default Deck
