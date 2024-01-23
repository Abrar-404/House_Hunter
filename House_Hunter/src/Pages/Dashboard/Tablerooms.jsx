import { useEffect, useState } from "react";
import Content from "./Content";

const Tablerooms = () => {

  const [tableRooms, setTableRooms] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/addhouse')
      .then(res => res.json())
    .then(data => setTableRooms(data))
  }, [tableRooms]);

  return (
    <div>
      <div>
        {
          tableRooms?.map(table => <Content key={table?._id} table={table}></Content>)
        }
      </div>
    </div>
  );
};

export default Tablerooms;