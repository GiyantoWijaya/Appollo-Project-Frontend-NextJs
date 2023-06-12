'use client';
// import '../gamecatalog.styles.css';
import GameImage from './gameimage.components';
import GameTitle from './gametitle.components';
import PlayedMark from './playedmark.components';
import Rating from './rating.components';
import Score from './score.components';
import { useRouter } from 'next/navigation';

const ItemComponent = ({ data }) => {
  const navigate = useRouter();
  const handlePlayButton = (id) => {
    navigate.push(`/gameplay/${id}`);
    // console.log(id);
  };
  return (
    <>
      {data?.map((item, index) => (
        <div className="block lighter-background" key={index}>
          <GameImage
            img={item.thumbnail_url}
            handlePlayButton={() => {
              handlePlayButton(item.id);
            }}
          />
          <div className="text">
            <div className="text-white">
              <GameTitle gameName={item.name} />
              <Rating />
            </div>
            <div className="text-no-bold">
              <PlayedMark />
              <Score />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemComponent;
