import React from 'react'
import Header from './Header'
import Card from './Card'

export default class App extends React.Component {
  render () {
    const title = 'Coding Review Cards'

    return (
      <div>
        <Header title={ title } />
        <Card />
      </div>
    )
  }
}
