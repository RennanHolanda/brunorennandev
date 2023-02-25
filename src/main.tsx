import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path:"/about",
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
