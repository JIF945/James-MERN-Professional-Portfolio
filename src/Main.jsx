// modules from React and ReactDom
import React from 'react';
import ReactDom from 'react-dom/client';

// modules from react-router-dom
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

//  React Components

import App from './App';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


// routes and components associated with the URL's

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <About/>,
            },
            {
             path: 'about',
             element: <About />,
            },
            {
                path: 'poortfolio/:id',
                element: <Portfolio />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
)

