import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import PostDetail from './pages/PostDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import EditPosts from './pages/EditPosts'
import AuthorsPosts from './pages/AuthorsPosts'
import Logout from './pages/Logout'
import createPosts from './pages/createPosts'

const router = createBrowserRouter([
{
  path:"/",
  element: <Layout />,
  errorElement: <ErrorPage/>,
  children: [
   {index: true, element: <Home />},
   {path:"posts/:id", element: <PostDetail />},
   {path:"register", element: <Register />},
   {path:"login", element: <Login />},
   {path:"profile:/id", element: <UserProfile />},
   {path:"authors", element: <Authors />},
   {path:"create", element: <createPosts />},
   {path:"posts:id/edit", element: <EditPosts />},
   {path:"posts/categories:category", element: <categoryPosts />},
   {path:"posts/users:id", element: <AuthorsPosts />},
   {path:"posts:id/edit", element: <EditPosts />},
   {path:"logout", element: <Logout />},
  ]
}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
