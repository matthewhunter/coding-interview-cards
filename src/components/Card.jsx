import React from 'react'

export default class Card extends React.Component {
  state = {
    containerClasses: 'card-container',
    cardClasses: 'card',
    style: {
      transform: `rotate(${Math.random() * 20 - 10}deg)`,
      bottom: `${this.props.index}vw`
    }
  }

  rotation = Math.random() * 20 - 10

  componentDidMount() {
    this.props.unplayedCards.push(this)
  }

  onMouseOver = () => {
    if (this.props.index !== this.props.unplayedCards.length - 1) {
      return
    }
    this.setState(() => ({
      // style: {
      //   transform: 'unset'
      // },
      cardClasses: 'card lift',
      containerClasses: 'card-container lift'
    }))
  }

  onMouseLeave = () => {
    if (this.props.index !== this.props.unplayedCards.length - 1) {
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
    // console.log(this.props.index, this.props.unplayedCards.length - 1)
    if (this.props.index !== this.props.unplayedCards.length - 1) {
      return
    }
    this.props.selectCard(this)
    console.log(this.props.unplayedCards)
    this.setState(() => ({
      
      cardClasses: 'card is-flipped',
      containerClasses: 'card-container is-flipped'
    }))
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
            <p>{this.props.card.challenge}</p>
          </div>
        </div>
      </div>
    )
  }
}
