import React from 'react'
import Header from './Header'
import Board from './Board'
import cards from '../cards'

export default class App extends React.Component {
  state = {
    title: 'Coding Review Cards',
    unplayedCards: [],
    currentCard: [],
    playedCards: []
  }
  selectCard = selectedCard => {
    this.state.currentCard.push(this.state.unplayedCards.pop())
    this.setState(prevState => {
      this.state.unplayedCards.filter(card => card !== selectedCard)
    } )
    console.log(`Cards: ${this.state.unplayedCards.length}, currentCard: ${this.state.currentCard.length}, playedCards: ${this.state.playedCards.length}`)
  }
  render() {
    return (
      <React.Fragment>
        {/* <Header title={this.state.title}/> */}
        <Board unplayedCards={this.state.unplayedCards} selectCard={this.selectCard} />
      </React.Fragment>
    )
  }
}
