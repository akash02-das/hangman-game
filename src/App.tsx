import { useState } from 'react';

import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import { randomWords } from './utils/randomWords';

function App() {
  const [wordToGuess, setWordToGuess] = useState(randomWords());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className='max-w-4xl flex items-center flex-col gap-8 mx-auto'>
      <div className='text-4xl text-center'>Lose Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}

export default App;
