const HangmanWord = () => {
  const word = 'hangman';
  const guessedLetters = ['g', 'n', 'h', 'f'];

  return (
    <div className='flex text-5xl font-bold uppercase font-letterFont gap-4'>
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className='text-gray-800 border-solid border-b-8 border-gray-800'
        >
          <span
            className={`${
              guessedLetters.includes(letter) ? 'visible' : 'invisible'
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
