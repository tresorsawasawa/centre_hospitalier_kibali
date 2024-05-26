import { v4 as uuid } from 'uuid';
import {
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa6';
import {
  MdOutlineEmail,
} from 'react-icons/md';

const cardsData = [
  {
    id: uuid(),
    icon: <FaLocationArrow />,
    label: 'Location, Country, City',
  },
  {
    id: uuid(),
    icon: <FaPhone />,
    label: '+234 82X XXX XXX',
  },
  {
    id: uuid(),
    icon: <MdOutlineEmail />,
    label: 'email@example.com',
  },
];

export default cardsData;
