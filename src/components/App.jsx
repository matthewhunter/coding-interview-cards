import React from 'react'
import Header from './Header'
import Deck from './Deck'
import Main from './Main'
import cards from '../cards.js'

export default class App extends React.Component {
  state = {
    cards: [],
    currentCard: [],
    playedCards: []
  }
  selectCard = (selectedCard) => {
    this.state.currentCard.push(this.state.cards.pop())
    console.log( this.state.currentCard )
    this.setState( prevState => {this.state.cards.filter(card => card !== selectedCard)
    }  )
    console.log(this.state.cards)
  }
  render() {
    const title = 'Coding Review Cards'

    return (
      <React.Fragment>
        <Header title={title} />
        <div className='flex-grid'>
          <div className='col'>
            <Deck cards={this.state.cards} selectCard={this.selectCard} />
          </div>
          <div className='col-2'>
            <Main />
          </div>
          <div className='col' />
        </div>
      </React.Fragment>
    )
  }
}
