// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
// import Home from "../Pages/Home";

const Router = () => {
   return (
      <div className="bg-white">
         <Navbar></Navbar>
         
         <Outlet></Outlet>
         
      </div>
   );
};

export default Router;