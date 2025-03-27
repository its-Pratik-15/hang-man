const stages = [
    `
     -----
     |   |
     O   |
    /|\\  |
    / \\  |
         |
    =========
    `,
    `
     -----
     |   |
     O   |
    /|\\  |
    /    |
         |
    =========
    `,
    `
     -----
     |   |
     O   |
    /|\\  |
         |
         |
    =========
    `,
    `
     -----
     |   |
     O   |
    /|   |
         |
         |
    =========
    `,
    `
     -----
     |   |
     O   |
     |   |
         |
         |
    =========
    `,
    `
     -----
     |   |
     O   |
         |
         |
         |
    =========
    `,
    `
     -----
     |   |
         |
         |
         |
         |
    =========
    `
  ]
  
  function HangmanDisplay({ remainingGuesses }) {
    return (
      <pre>
        {stages[6 - remainingGuesses]}
      </pre>
    )
  }
  
  export default HangmanDisplay