import React from 'react'

const resizeMain = () => {
  const main = document.getElementById('main')
  const question = document.getElementById('question')
  const answer = document.getElementById('answer')
  const questionText = document.getElementById('question-text')
  const answerText = document.getElementById('answer-text')
  main.style.height = `${(main.offsetWidth / 2.5) * 3.5}px`
  main.style.maxHeight = `${window.innerHeight - 200}px`
  main.style.maxWidth = `${(window.innerHeight - 200) * (25 / 35)}px`
  answer.style.height = `${main.offsetHeight * 0.93 - question.offsetHeight - 10}px`
  questionText.style.fontSize = `${(question.offsetWidth - 10) / 20}px`
  answerText.style.fontSize = `${(question.offsetWidth - 10) / 20}px`
}

export default class Main extends React.Component {
  style = {
    display: 'none'
  }
  componentDidMount() {
    window.addEventListener('resize', () => resizeMain())
    resizeMain()
  }
  render() {
    return (
      <main id='main' style={this.style}>
        <div id='content'>
          <div id='question'>
            <p id='question-text' />
          </div>
          <div id='answer'>
            <p id='answer-text' />
          </div>
        </div>
      </main>
    )
  }
}
