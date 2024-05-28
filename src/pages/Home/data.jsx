import { v4 as uuid } from 'uuid';
import {
  FaUserDoctor,
  FaBedPulse,
  FaMicroscope,
} from 'react-icons/fa6';
import { FaAmbulance } from 'react-icons/fa';

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

export default aboutData;
