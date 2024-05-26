import { v4 as uuid } from 'uuid';
import { FaCaretDown } from 'react-icons/fa';

const menuDataLinks = [
  {
    id: uuid(),
    icon: '',
    label: 'home',
    name: 'Home',
    to: '/',
  },
  {
    id: uuid(),
    name: 'Services',
    icon: <FaCaretDown />,
    label: 'services',
    to: '/services',
  },
  {
    id: uuid(),
    icon: <FaCaretDown />,
    name: 'Your arrival',
    label: 'arrival',
    submenu: [
      {
        id: uuid(),
        name: 'Consultations',
        to: 'consultations',
      },
      {
        id: uuid(),
        name: 'Hospitalization',
        to: '/your_stay',
      },
    ],
  },
  {
    id: uuid(),
    icon: <FaCaretDown />,
    name: 'Pages',
    label: 'pages',
    to: '/',
    submenu: [
      {
        id: uuid(),
        name: 'The Team',
        to: 'our_doctors',
      },
      {
        id: uuid(),
        name: 'Appointment',
        to: '/appointment',
      },
      {
        id: uuid(),
        name: 'Testimonials',
        to: '/testimonials',
      },
      {
        id: uuid(),
        name: 'Search',
        to: '/find_a_doctor',
      },
    ],
  },
  {
    id: uuid(),
    icon: '',
    name: 'About',
    label: 'about',
    to: '/about_us',
  },
  {
    id: uuid(),
    icon: '',
    name: 'Contact',
    label: 'contact',
    to: '/contact_us',
  },
];

export default menuDataLinks;
