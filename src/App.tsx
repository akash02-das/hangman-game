import { useCallback, useEffect, useState } from 'react';

import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { randomWords } from './utils/randomWords';

function App() {
  const [wordToGuess, setWordToGuess] = useState(randomWords());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  return (
    <div className='max-w-4xl flex items-center flex-col gap-8 mx-auto'>
      <div className='text-4xl text-center'>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        activeLetters={activeLetters}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
