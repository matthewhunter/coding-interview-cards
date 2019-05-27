import React from 'react'

export default class Card extends React.Component {
  state = {
    hover: 'card'
  }
  cardStyle = {
    transform: `rotate(${Math.random() * 20 - 10}deg)`,
    bottom: `${this.props.bottom}rem`
  }
  frontStyle = {
    display: 'none'
  }
  onMouseOver = () => {
    if (this.props.index === this.props.cards.length) {
      this.setState(() => ({
        hover: 'card lift'
      }))
    }
  }
  onMouseLeave = () => {
    if (this.props.index === this.props.cards.length) {
      this.setState(() => ({
        hover: 'card'
      }))
    }
  }
  onClick = (e) => {
    if (this.props.index === this.props.cards.length) {
      this.props.selectCard(this)
    }
  }

  render() {
    return (
      <div className={ this.state.hover } style={ this.cardStyle } onMouseEnter={ this.onMouseOver } onMouseLeave={ this.onMouseLeave } onClick={(e) => this.onClick(e)}>
        <div className='card-back' />
        <div className='card-front' style={this.frontStyle} />
      </div>
    )
  }
}
