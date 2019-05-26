import React from 'react'
import Header from './Header'
import Deck from './Deck'

export default class App extends React.Component {
  state = {
    // just temporary values so I have something to iterate
    cards: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  }
  render () {
    const title = 'Coding Review Cards'

    return (
      <React.Fragment>
        <Header title={title} />
        <Deck cards={ this.state.cards } />
      </React.Fragment>
    )
  }
}
