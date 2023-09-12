import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Providers from './Providers/Providers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: ([
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "chefs",
        element: <div className='text-2xl'>Chefs</div>
      },
      {
        path: "cuisines",
        element: <div className='text-2xl'>Cuisines</div>
      },
      {
        path: "blog",
        element: <div className='text-2xl'>Blog</div>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router}></RouterProvider>
    </Providers>
  </React.StrictMode>,
)
