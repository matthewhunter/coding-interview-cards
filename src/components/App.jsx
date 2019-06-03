import React from 'react'
import Header from './Header'
import Board from './Board'

export default class App extends React.Component {
  state = {
    title: 'Coding Review Cards',
    unplayedCards: [],
    currentCard: [],
    playedCards: []
  }
  selectCard = selectedCard => {
    if ( selectedCard.state.position === 'draw') {
      this.state.currentCard.push(this.state.unplayedCards.pop())
    }
    if (selectedCard.state.position === 'playing') {
      this.state.playedCards.push(this.state.currentCard.pop())
    }
    console.log(`Unplayed Cards: ${this.state.unplayedCards.length}, Current Cards: ${this.state.currentCard.length}, Played Cards: ${this.state.playedCards.length}`)
  }
  render() {
    return (
      <>
        {/* <Header title={this.state.title}/> */}
        <Board unplayedCards={this.state.unplayedCards} currentCard={this.state.currentCard} playedCards={this.state.playedCards} selectCard={this.selectCard} />
      </>
    )
  }
}
