import React from 'react'
import cards from '../cards.js'
import Card from './Card'

let bottom = 0.5

const randomize = (array) => {
  var index = array.length
  var temporary
  var random
  while (0 !== index) {
    random = Math.floor(Math.random() * index)
    index -= 1
    temporary = array[index]
    array[index] = array[random]
    array[random] = temporary
  }
  return array
}

randomize(cards)

const Deck = props => (
  <React.Fragment>
    <div className='draw'>
      <p>Draw Pile</p>
    </div>
    <div className='playing'>
      <p>Playing</p>
    </div>
    <div className='discard'>
      <p>Discard Pile</p>
    </div>
    <div className='cards'>
      {
        cards.map( (card, index) => {
        bottom = bottom + 0.5
        return <Card key={card.key} index={index} cards={props.cards} card={card} bottom={bottom} selectCard={props.selectCard} />
      })}
    </div>
  </React.Fragment>
)

export default Deck
