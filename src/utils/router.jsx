import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound/NotFound';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Team from '../pages/Team/Team';
import Appointment from '../pages/Appointment/Appointment';
import Testimonials from '../pages/Testimonials/Testimonials';
import Contact from '../pages/Contact/Contact';
import Hospitalization from '../pages/Hospitalization/Hospitalization';
import Consultations from '../pages/Consultations/Consultations';
import Search from '../pages/Search/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/about_us',
        element: <About />,
      },
      {
        path: '/contact_us',
        element: <Contact />,
      },
      {
        path: '/your_stay',
        element: <Hospitalization />,
      },
      {
        path: '/consultations',
        element: <Consultations />,
      },
      {
        path: '/our_doctors',
        element: <Team />,
      },
      {
        path: '/appointment',
        element: <Appointment />,
      },
      {
        path: '/find_a_doctor',
        element: <Search />,
      },
      {
        path: '/testimonials',
        element: <Testimonials />,
      },
    ],
  },
]);

export default router;
