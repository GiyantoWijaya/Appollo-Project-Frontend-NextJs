// import '../gamecatalog.styles.css';
import Image from 'next/image';
import PlayButton from './playbutton.components';

const GameImage = (props) => {
  return (
    <>
      <div className="image-play">
        <PlayButton />
        <Image src="/img/popular-01.jpg" alt="asd" width={100} height={100} onClick={props.handlePlayButton} />
      </div>
    </>
  );
};

export default GameImage;
