import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetails'
import Register from './pages/Register'


const router = createBrowserRouter([
{
  path:"/",
  element: <Layout />,
  errorElement: <ErrorPage/>,
  children: [
   {index: true, element: <Home />},
   {path:"posts/:id", element: <PostDetail />},
   {register:"register", element: <Register />}
  ]
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
