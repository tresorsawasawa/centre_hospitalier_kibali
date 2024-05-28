import { v4 as uuid } from 'uuid';
import {
  FaUserDoctor,
  FaBedPulse,
  FaMicroscope,
} from 'react-icons/fa6';
import {
  FaAmbulance,
  FaStethoscope,
  FaPills,
} from 'react-icons/fa';

const servicesData = [
  {
    id: uuid(),
    icon: <FaUserDoctor />,
    label: 'Emergency Care',
    to: '/services',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
  },
  {
    id: uuid(),
    icon: <FaBedPulse />,
    label: 'Operation & Surgery',
    to: '/services',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
  },
  {
    id: uuid(),
    icon: <FaStethoscope />,
    label: 'Outdoor Checkup',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
    to: '/services',
  },
  {
    id: uuid(),
    icon: <FaAmbulance />,
    label: 'Ambulance Service',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
    to: '/services',
  },
  {
    id: uuid(),
    icon: <FaPills />,
    label: 'Medicine & Pharmacy',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
    to: '/services',
  },
  {
    id: uuid(),
    icon: <FaMicroscope />,
    label: 'Blood Testing',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit a deleniti modi distinctio voluptatem esse.',
    to: '/services',
  },
];

export default servicesData;
