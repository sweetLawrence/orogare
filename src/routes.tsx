import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        // element: <Home />,
      },
      {
        path: '/about',
        // element: <About />, 
      },
      {
        path: '/projects',
        // element: <ProjectsPage />, 
      },
      {
        path: '/careers',
        // element: <Careers />, 
      },{
        path: '/talk-to-us',
        // element: <TalkToUs />, 
      },
      {
        path:"*",
        // element:<Four04 />
      }
     
    ],
  },
]);

export default router;
