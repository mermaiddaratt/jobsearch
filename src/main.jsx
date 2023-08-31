import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './App';
import './index.css'
import Jobs from './Components/JobDiv/Jobs';
import Companies from './Components/Companies/Companies';
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact';
import Account from './Components/Accounts/Account';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "Jobs",
    element: <Jobs />,
  },
  {
    path: "Companies",
    element: <Companies />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: < Contact/>,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Account",
    element: < Account/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
