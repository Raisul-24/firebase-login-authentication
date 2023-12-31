import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Home from './Pages/Home';
import Login from './Components/Login';
import Login2 from './Components/Login2';
import SignUp from './Components/Signup';
import Register from './Components/Register';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [{
      path: "/",
      element: <Home></Home>
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/loginTwo",
      element: <Login2></Login2>
    },
    {
      path: "/signUp",
      element: <SignUp></SignUp>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
