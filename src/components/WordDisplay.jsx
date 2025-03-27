function WordDisplay({ word, guessedLetters }) {
    const displayWord = word
      .split('')
      .map(letter => 
        guessedLetters.includes(letter) ? letter : '_'
      )
      .join(' ')
  
    return (
      <div className="word-display">
        <h2>{displayWord}</h2>
      </div>
    )
  }
  
  export default WordDisplay