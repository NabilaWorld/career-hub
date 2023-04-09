import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layoutt/Main';
import Statistics from './components/Statistics/Statistics';
import Job from './components/Job/Job';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('introduction.JSON') 
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      
        {
          path:'/job',
          element: <Job></Job>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     < RouterProvider router={router} />
  </React.StrictMode>,
)
