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
import Blog from './components/Blog/Blog';
import Job from './components/Job/Job';
import JobDetails from './components/JobDetails/JobDetails';
import cartProductsLoader from './loaders/cartProductsLoader';
import { productsAndCartData } from './loader/getCartAndProductData';
import ErrorPage from './components/Error/ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/introduction.JSON') ,
      },

      {
        path:'jobhub/:id',
        element:<JobDetails></JobDetails>,
        loader: ({params})=>cartProductsLoader(params.id),
        
      },

      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      
      
        {
          path:'/job',
          element: <Job></Job>,
          // // loader: ({params})=>cartProductsLoader(params.id),
          loader: productsAndCartData,
          
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
