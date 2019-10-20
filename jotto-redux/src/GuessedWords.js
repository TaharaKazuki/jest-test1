import React from 'react'

const GuessedWords = (props) => {
  let contents
  const { guessedWords } = props

  if (guessedWords.lenght === 0) {
    contents = (
      <span date-test='guess-instructions'>
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => {
      <tr data-test='guessed-word' key={index}>
        <td>{ word.guessedWord }</td>
        <td>{ word.letterMatchCount }</td>
      </tr>
    })
    contents = (
      <div data-test='guessed-words'>
        <h3>Guessed Words</h3>
        <table className='table table-sm'>
          <thead>
            <tr><th>Guess</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows }
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div data-test='component-guessed-words'>
      { contents }
    </div>
  )
}

export default GuessedWords