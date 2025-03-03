import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

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
