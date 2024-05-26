import {
  FaUserDoctor,
  FaBedPulse,
  FaMicroscope,
} from 'react-icons/fa6';
import { FaAmbulance } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';

const aboutData = [
  {
    id: uuid(),
    icon: <FaUserDoctor />,
    qualification: 'Good',
    status: 'Doctors',
  },
  {
    id: uuid(),
    icon: <FaBedPulse />,
    qualification: 'Emergency',
    status: 'Services',
  },
  {
    id: uuid(),
    icon: <FaMicroscope />,
    qualification: 'Accurate',
    status: 'Testing',
  },
  {
    id: uuid(),
    icon: <FaAmbulance />,
    qualification: 'Free',
    status: 'Ambulance',
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

export { departments, aboutData };
