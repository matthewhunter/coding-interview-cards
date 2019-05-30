import React from 'react'
import cards from '../cards.js'
import Card from './Card'

const randomize = array => {
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

const Board = props => (
  <React.Fragment>
    <div className='board'>
      <div className='draw'>
        <p />
      </div>
      <div className='playing'>
        <p />
      </div>
      <div className='discard'>
        <p />
      </div>
    </div>
    <div className='cards'>
      <div className='draw' id='draw'>
        {cards.map((card, index) => {
          return <Card key={card.id} index={index} unplayedCards={props.unplayedCards} currentCard={props.currentCard} playedCards={props.playedCards} card={card} selectCard={props.selectCard} />
        })}
      </div>
    </div>
  </React.Fragment>
)

export default Board
