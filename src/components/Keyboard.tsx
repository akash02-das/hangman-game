import { KEYS } from '../constants/keys';

const Keyboard = () => {
  return (
    <div className='self-stretch'>
      <div
        className='grid gap-2'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))' }}
      >
        {KEYS.map((key) => (
          <button
            key={key}
            className='w-full bg-none text-gray-800 border-solid border-2 border-gray-800 text-4xl uppercase p-2 font-bold cursor-pointer rounded-lg shadow-lg hover:bg-slate-300 active'
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
