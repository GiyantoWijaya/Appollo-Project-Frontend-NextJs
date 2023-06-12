import ItemComponent from './item/item.components';
import axios from 'axios';
import './gamecatalog.styles.css';

const getData = async () => {
  try {
    // const fetch = await axios.get('http://localhost:5001/api/game-list');
    const fetch = await axios.get('https://api-apollo.niceblue.my.id/api/game-list');
    const fetchData = fetch.data.data.game_list;
    return fetchData;
  } catch (error) {}
};

export default async function GameCatalogComponent() {
  const data = await getData();
  return (
    <>
      <div className="clips black-background">
        <h3 className="title">
          <span> Game </span> List
        </h3>

        <ItemComponent data={data} />
      </div>
    </>
  );
}
