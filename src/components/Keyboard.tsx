import { KEYS } from '../constants/keys';

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) => {
  return (
    <div className='self-stretch'>
      <div
        className='grid gap-2'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))' }}
      >
        {KEYS.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);

          return (
            <button
              key={key}
              onClick={() => addGuessedLetter(key)}
              className={`w-full bg-none text-gray-800 border-solid border-2 border-gray-800 text-4xl uppercase p-2 font-bold cursor-pointer rounded-lg shadow-lg hover:bg-slate-300 ${
                isActive ? 'active' : ''
              } ${isInactive ? 'inactive' : ''}`}
              disabled={isInactive || isActive}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
