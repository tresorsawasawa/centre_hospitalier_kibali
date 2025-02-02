import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { v4 as uuid } from 'uuid';
import Doctor1 from '../../assets/images/team-1.jpg';
import Doctor2 from '../../assets/images/team-2.jpg';
import Doctor3 from '../../assets/images/team-3.jpg';

const doctors = [
  {
    id: uuid(),
    avatar: Doctor1,
    name: 'John Doe',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor2,
    name: 'Scott Adkins',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },

      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor3,
    name: 'Sarah Lopez',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },

      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor1,
    name: 'John Doe',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor2,
    name: 'Scott Adkins',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },

      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor3,
    name: 'Sarah Lopez',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },

      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
  {
    id: uuid(),
    avatar: Doctor3,
    name: 'Sarah Lopez',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },

      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },

  {
    id: uuid(),
    avatar: Doctor1,
    name: 'John Doe',
    specialization: 'Cardiology specialist',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id magnam, voluptate maxime odit cumque.',
    links: [
      {
        id: uuid(),
        icon: <FaFacebookF />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaLinkedinIn />,
        to: '/',
      },
      {
        id: uuid(),
        icon: <FaXTwitter />,
        to: '/',
      },
    ],
  },
];

const departments = [
  {
    id: uuid(),
    name: 'Department...',
    value: '',
  },
  {
    id: uuid(),
    name: 'Department1',
    value: 'Department1',
  },
  {
    id: uuid(),
    name: 'Department2',
    value: 'Department2',
  },
  {
    id: uuid(),
    name: 'Department3',
    value: 'Department3',
  },
  {
    id: uuid(),
    name: 'Department4',
    value: 'Department4',
  },
  {
    id: uuid(),
    name: 'Department5',
    value: 'Department5',
  },
];

export { departments, doctors };
