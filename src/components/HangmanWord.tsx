type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className='flex text-5xl font-bold uppercase font-letterFont gap-4'>
      {wordToGuess.split('').map((letter, index) => (
        <span
          key={index}
          className='text-gray-800 border-solid border-b-8 border-gray-800'
        >
          <span
            className={`${
              guessedLetters.includes(letter) || reveal
                ? 'visible'
                : 'invisible'
            } ${
              !guessedLetters.includes(letter) && reveal
                ? 'text-red-500'
                : 'text-gray-800'
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
