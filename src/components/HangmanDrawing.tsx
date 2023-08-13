const HEAD = (
  <div className='w-[50px] h-[50px] rounded-full border-[10px] border-solid border-bodyColor absolute top-[40px] right-[-20px]' />
);

const BODY = (
  <div className='w-[10px] h-[100px] bg-bodyColor absolute top-[88px] right-0' />
);

const RIGHT_ARM = (
  <div className='w-[80px] h-[10px] bg-bodyColor absolute top-[120px] right-[-80px] rotate-[-30deg] origin-bottom-left rounded-lg' />
);

const LEFT_ARM = (
  <div className='w-[80px] h-[10px] bg-bodyColor absolute top-[120px] right-[10px] rotate-[30deg] origin-bottom-right rounded-lg' />
);

const RIGHT_LEG = (
  <div className='w-[100px] h-[10px] bg-bodyColor absolute top-[160px] right-[-90px] rotate-[60deg] origin-bottom-left rounded-lg' />
);

const LEFT_LEG = (
  <div className='w-[100px] h-[10px] bg-bodyColor absolute top-[160px] right-0 rotate-[-60deg] origin-bottom-right rounded-lg' />
);

const HangmanDrawing = () => {
  return (
    <div className='relative'>
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className='w-[10px] h-[50px] bg-ironColor absolute top-0 right-0 rounded-lg' />
      <div className='w-[200px] h-[10px] bg-ironColor ml-[120px]' />
      <div className='w-[10px] h-[400px] bg-ironColor ml-[120px]' />
      <div className='w-[250px] h-[10px] bg-ironColor rounded-lg' />
    </div>
  );
};

export default HangmanDrawing;
