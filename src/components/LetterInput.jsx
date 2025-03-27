import { useState } from 'react'

function LetterInput({ onGuess, guessedLetters }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.match(/^[a-zA-Z]$/)) {
      onGuess(input.toUpperCase())
      setInput('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Guess a letter"
        />
        <button type="submit">Guess</button>
      </form>
      <p>Guessed letters: {guessedLetters.join(', ')}</p>
    </div>
  )
}

export default LetterInput