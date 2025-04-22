import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Courses from './pages/Courses';
import UnderConstructionPage from './components/common/404';
import Admission from './pages/Admissions';
import CareersPage from './pages/Careers';
import TendersPage from './pages/Tenders';

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
        path: '/governance',
        element: <UnderConstructionPage />, 
      },{
        path: '/careers',
        element: <CareersPage />, 
      },{
        path: '/tenders',
        element: <TendersPage />, 
      },{
        path: '/admissions',
        element: <Admission />, 
      },
      
      {
        path:"*",
        element: <UnderConstructionPage />, 
      }
     
    ],
  },
]);

export default router;
