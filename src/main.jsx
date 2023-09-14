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
import Forgot from './components/Forgot/Forgot';
import Blog from './components/Blog/Blog.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import User from './components/User/User.jsx';

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
        path: "chefs/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) => fetch(`https://recipe-haven-server-bd.vercel.app/chefs/${params.id}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "user",
        element: <User></User>
      },
      {
        path: "forgot",
        element: <Forgot></Forgot>
      },
    ]),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router}></RouterProvider>
    </Providers>
  </React.StrictMode>,
)
