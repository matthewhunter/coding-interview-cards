import React from 'react'

const Header = props => (
  <div className='header'>
    <h1 className='header__title'>{props.title}</h1>
  </div>
)

Header.defaultProps = {
  title: 'Coding Review Cards'
}

export default Header
