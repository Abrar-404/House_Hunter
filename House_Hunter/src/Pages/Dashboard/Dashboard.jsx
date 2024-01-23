import Content from './Content';
import '../../Components/Styles/sidebar.css';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';

const Dashboard = () => {
 
  return (
    <div>
      <div className="dashboard">
        <Sidebar></Sidebar>
        <Content></Content>
      </div>
    </div>
  );
};

export default Dashboard;
