import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Home.jsx';
import Root from './components/Root.jsx';
import Jobdetails from './components/Jobdetails.jsx';
import Appliedjobs from './components/Appliedjobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
       path:'/',
       element:<Home></Home>
       
      },
      {
        path:'/statistics',
       
      },
      {
        path:'/appliedjobs',
        element: <Appliedjobs></Appliedjobs>,
        loader: ()=> fetch('../jobs.json')
      },
      {
        path:'/blog'
      },
      {
        path:'/job/:id',
        element: <Jobdetails></Jobdetails>,
        loader: ()=> fetch('../jobs.json')
        
      }
    ]
    
   
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
