'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TableData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // const fetch = await axios.get('http://localhost:5001/api/gamePlay');
        const fetch = await axios.get('https://api-apollo.niceblue.my.id/api/gamePlay');
        const fetchData = fetch.data.data.usersHistoryData;
        return setData(fetchData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data?.map((item, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.user.username}</td>
          <td>{item.score}</td>
          <td>{item.time}</td>
          <td>{item.game.name}</td>
        </tr>
      ))}
    </>
  );
};

export default TableData;
