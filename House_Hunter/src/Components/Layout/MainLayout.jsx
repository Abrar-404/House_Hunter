import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
  return (
    <div className="mx-auto lg:max-w-[1400px] md:max-w-[768px] max-w-[425px]">
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
