import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../Components/Styles/delete.css';
import '../../Components/Styles/edit.css';
import '../../Components/Styles/hover.css';
import ContentCard from './ContentCard';

const Content = () => {
  const [tableRooms, setTableRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addhouse')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTableRooms(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);
  console.log(tableRooms);
  return (
    <div className={'content'}>
      
        {tableRooms?.map(tables => (
          <ContentCard key={tables?._id} tables={tables}></ContentCard>
        ))}
    </div>
  );
};

export default Content;
