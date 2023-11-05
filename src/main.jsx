import React from 'react'
import ReactDOM from 'react-dom/client'


// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from'react-router-dom';

// importing bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views


import App from './App.jsx';
import AboutMe from '../Pages/AboutMe';
import Contact from '../Pages/Contact';
import Portfolio from '../Pages/Portfolio';
import Resume from '../Pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AboutMe/>
      },
      {
        path: 'aboutme',
        element: <AboutMe/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      // route for portfolio with Id parameter
      {
        path: 'portfolio/:id', 
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
);



