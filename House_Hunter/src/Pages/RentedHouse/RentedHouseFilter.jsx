import axios from 'axios';
import { useEffect, useState } from 'react';
import RentedHouse from './RentedHouse';

const RentedHouseFilter = () => {
  const [rentData, setRentData] = useState([]);

  useEffect(() => {
    axios
      .get('https://househunter-five.vercel.app/renthouse')
      .then(response => setRentData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {rentData?.map(rentHouse => (
          <RentedHouse key={rentHouse?._id} rentHouse={rentHouse}></RentedHouse>
        ))}
      </div>
    </div>
  );
};

export default RentedHouseFilter;
