import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/Layout/MainLayout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import { StyledEngineProvider } from '@mui/material/styles';
import AddHouse from './Pages/AddHouse/AddHouse';
import ListedHouseFilter from './Pages/ListedHouse/ListedHouseFilter';
import EditTableRooms from './Pages/EditTableRooms/EditTableRooms';
import Content from './Pages/Dashboard/Content';
import RentHouse from './Pages/RentHouse/RentHouse';
import RentedHouse from './Pages/RentedHouse/RentedHouse';
import RentedHouseFilter from './Pages/RentedHouse/RentedHouseFilter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/addhouse',
        element: <AddHouse></AddHouse>,
      },
      {
        path: '/listedhouses',
        element: <ListedHouseFilter></ListedHouseFilter>,
      },
      {
        path: '/renthouse',
        element: <RentHouse></RentHouse>,
      },
      {
        path: '/rentedhouse',
        element: <RentedHouseFilter></RentedHouseFilter>,
      },
      {
        path: '/addhouse/:id',
        element: <EditTableRooms></EditTableRooms>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addhouse/${params.id}`),
      },
      {
        path: '/addhouse/:id',
        element: <Content></Content>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addhouse/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StyledEngineProvider injectFirst>
    <RouterProvider router={router} />
  </StyledEngineProvider>
);
