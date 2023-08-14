import hangKnotImage from '../assets/hang-knot.png';
import sadFaceImage from '../assets/sad-face.png';

const HEAD = (
  <img
    src={sadFaceImage}
    alt='face'
    className='w-[45px] h-[45px] absolute top-[48px] right-[-18px] z-10'
  />
);

const BODY = (
  <div>
    <div className='w-[15px] h-[25px] bg-bodyColor absolute top-[88px] right-[-2px]' />
    <div className='w-[30px] h-[75px] bg-bodyColor absolute top-[110px] right-[-10px] rounded-lg' />
  </div>
);

const RIGHT_ARM = (
  <div className='w-[65px] h-[10px] bg-bodyColor absolute top-[110px] right-[-70px] rotate-[-30deg] origin-bottom-left rounded-lg' />
);

const LEFT_ARM = (
  <div className='w-[65px] h-[10px] bg-bodyColor absolute top-[110px] right-[18px] rotate-[30deg] origin-bottom-right rounded-lg' />
);

const RIGHT_LEG = (
  <div className='w-[100px] h-[10px] bg-bodyColor absolute top-[160px] right-[-90px] rotate-[60deg] origin-bottom-left rounded-lg' />
);

const LEFT_LEG = (
  <div className='w-[100px] h-[10px] bg-bodyColor absolute top-[160px] right-0 rotate-[-60deg] origin-bottom-right rounded-lg' />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className='relative'>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <img
        src={hangKnotImage}
        alt='face'
        className='w-[80px] h-[80px] absolute top-[10px] right-[-30px]'
      />
      <div className='w-[200px] h-[10px] bg-ironColor ml-[120px]' />
      <div className='w-[10px] h-[400px] bg-ironColor ml-[120px]' />
      <div className='w-[250px] h-[10px] bg-ironColor rounded-lg' />
    </div>
  );
};

export default HangmanDrawing;
