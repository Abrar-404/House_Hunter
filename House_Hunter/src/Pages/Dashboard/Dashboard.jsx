import Content from './Content';
import '../../Components/Styles/sidebar.css';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [tableRooms, setTableRooms] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/addhouse`);
          setTableRooms(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      if (tableRooms) {
        fetchData();
      }
    }, [tableRooms]);
  return (
    <div>
      <div className="dashboard">
        <Sidebar></Sidebar>
        <Content tableRooms={tableRooms}></Content>
      </div>
    </div>
  );
};

export default Dashboard;
