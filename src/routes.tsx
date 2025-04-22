import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Courses from './pages/Courses';
import UnderConstructionPage from './components/common/404';

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
        element: <AboutPage />, 
      },
      {
        path: '/courses',
        element: <Courses />, 
      },
      {
        path: '/careers',
        element: <UnderConstructionPage />, 
      },{
        path: '/talk-to-us',
        element: <UnderConstructionPage />, 
      },
      {
        path:"*",
        element: <UnderConstructionPage />, 
      }
     
    ],
  },
]);

export default router;
