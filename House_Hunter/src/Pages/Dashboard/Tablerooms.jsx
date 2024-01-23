import { useEffect, useState } from 'react';
import Content from './Content';

const Tablerooms = () => {
  const [tableRooms, setTableRooms] = useState([]);

  useEffect(() => {
    fetch('https://househunter-five.vercel.app/addhouse')
      .then(res => res.json())
      .then(data => setTableRooms(data));
  }, [tableRooms]);

  return (
    <div>
      <div>
        {tableRooms?.map(table => (
          <Content key={table?._id} table={table}></Content>
        ))}
      </div>
    </div>
  );
};

export default Tablerooms;
