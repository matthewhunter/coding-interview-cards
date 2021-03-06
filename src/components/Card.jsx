import React from 'react'

export default class Card extends React.Component {
  state = {
    containerClasses: 'card-container',
    cardClasses: 'card',
    position: 'draw',
    style: {
      transform: `rotate(${ Math.random() * 20 - 10 }deg)`
    }
  }

  componentDidMount() {
    this.props.unplayedCards.push(this)
  }

  onMouseOver = () => {
    if (this.props.index === this.props.unplayedCards.length - 1 && this.props.currentCard.length === 0) {
      this.setState(() => ({
        cardClasses: 'card lift',
        containerClasses: 'card-container lift'
      }))
    }
    if (this.state.position === 'playing') {
      this.setState(() => ({
        cardClasses: 'card is-flipped lift',
        containerClasses: 'card-container is-flipped lift'
      }))
    }
    
  }

  onMouseLeave = () => {
    if (this.props.index !== this.props.unplayedCards.length - 1 || this.props.currentCard.length !== 0) {
      return
    }
    this.setState(() => ({
      style: {
        transform: `rotate(${Math.random() * 20 - 10}deg)`
      },
      cardClasses: 'card',
      containerClasses: 'card-container'
    }))
  }

  onClick = e => {
    if (this.state.position === 'draw' && this.props.currentCard.length === 0) {
      this.props.selectCard(this, 'playing')
      this.setState(() => ({
        position: 'playing',
        cardClasses: 'card is-flipped',
        containerClasses: 'card-container is-flipped'
      }))
    }
    if (this.state.position === 'playing') {
      this.props.selectCard(this, 'discard')
      this.setState(() => ({
        position: 'discard',
        cardClasses: 'card discard',
        containerClasses: 'card-container discard'
      }))
    }
  }

  render() {
    return (
      <div
        className={ this.state.containerClasses }
        style={ this.state.style }
        id={ 'card-' + this.props.index }
        onMouseEnter={ this.onMouseOver }
        onMouseLeave={ this.onMouseLeave }
        onClick={ e => this.onClick( e ) }
      >
        <div className={this.state.cardClasses}>
          <div className='card-face card-back' />
          <div className='card-face card-front'>
            <p>{ this.props.card.challenge }</p>
          </div>
        </div>
      </div>
    )
  }
}
