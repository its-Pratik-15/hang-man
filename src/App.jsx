import { useState, useEffect } from 'react'
import HangmanDisplay from './components/HangmanDisplay'
import WordDisplay from './components/WordDisplay'
import LetterInput from './components/LetterInput'
import './App.css'

const words = ['REACT', 'VITE', 'JAVASCRIPT', 'HANGMAN', 'DEVELOPER']

function App() {
  const [word, setWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState([])
  const [remainingGuesses, setRemainingGuesses] = useState(6)

  // Pick random word on mount
  useEffect(() => {
    resetGame()
  }, [])

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setWord(randomWord)
    setGuessedLetters([])
    setRemainingGuesses(6)
  }

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && remainingGuesses > 0) {
      setGuessedLetters([...guessedLetters, letter])
      if (!word.includes(letter)) {
        setRemainingGuesses(remainingGuesses - 1)
      }
    }
  }

  const isGameWon = word.split('').every(letter => 
    guessedLetters.includes(letter)
  )
  const isGameOver = remainingGuesses === 0

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <HangmanDisplay remainingGuesses={remainingGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      
      {(!isGameWon && !isGameOver) && (
        <LetterInput onGuess={handleGuess} guessedLetters={guessedLetters} />
      )}

      {isGameWon && (
        <div>
          <p>You won! The word was {word}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}

      {isGameOver && (
        <div>
          <p>Game Over! The word was {word}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  )
}

export default App