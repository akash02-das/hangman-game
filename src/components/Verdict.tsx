type VerdictProps = {
  restart: () => void;
  result: string;
};

const Verdict = ({ restart, result }: VerdictProps) => {
  return (
    <span className='text-2xl text-gray-800'>
      {result}!{' '}
      <button
        onClick={restart}
        className='bg-transparent hover:bg-blue-500 text-blue-700 font-medium hover:text-white py-1 px-2 mx-2 border border-blue-500 hover:border-transparent rounded'
      >
        Restart
      </button>{' '}
      to play again!
    </span>
  );
};

export default Verdict;
