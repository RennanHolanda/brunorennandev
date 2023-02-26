import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;

import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import Contact from './routes/Contact';
import MyProjects from './routes/MyProjects';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path: "/myprojects",
        element: <MyProjects />
      },
      {
        path:"/contact",
        element: <Contact />
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
