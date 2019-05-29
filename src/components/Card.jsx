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
  async componentDidMount() {
    await this.props.cards.push(this)
    console.log(this.props)
  }

  onMouseOver = () => {
    if (this.props.index !== this.props.cards.length - 1) {
      return
    }
    this.setState(() => ({
      style: {
        transform: 'unset'
      },
      cardClasses: 'card lift'
    }))
  }

  onMouseLeave = () => {
    if (this.props.index !== this.props.cards.length - 1) {
      return
    }
    this.setState(() => ({
      style: {
        transform: `rotate(${Math.random() * 20 - 10}deg)`
      },
      cardClasses: 'card'
    }))
  }

  onClick = async e => {
    console.log(this.props.index, this.props.cards.length - 1)
    if (this.props.index !== this.props.cards.length - 1) {
      return
    }
    await this.props.selectCard(this)
    await console.log(this.props.cards)
    await this.setState(() => ({
      style: {
        transform: `rotate(${Math.random() * 5 - 2.5}deg)`
      },
      cardClasses: 'card is-flipped'
    }))
  }

  render() {
    return (
      <div className={this.state.containerClasses} style={this.state.style} id={'card-' + this.props.index} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave} onClick={e => this.onClick(e)}>
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
