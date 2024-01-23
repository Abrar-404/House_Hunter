import { useEffect, useState } from 'react';
import ListedHouseCard from './ListedHouseCard';

const ListedHouseFilter = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch('https://househunter-five.vercel.app/addhouse')
      .then(res => res.json())
      .then(data => setRoomData(data));
  }, [roomData]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 mt-10 gap-3 mx-auto">
        {roomData?.map(roomsDetails => (
          <ListedHouseCard
            key={roomsDetails?.id}
            roomsDetails={roomsDetails}
          ></ListedHouseCard>
        ))}
      </div>
    </div>
  );
};

export default ListedHouseFilter;
