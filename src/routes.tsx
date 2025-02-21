import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <Home />, 
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
