import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaAngleRight,
} from 'react-icons/fa6';

const contactInformation = [
  {
    id: 1,
    label: 'Location, City, Country',
    icon: <IoLocationSharp />,
  },
  {
    id: 2,
    label: 'email@example.com',
    icon: <MdEmail />,
  },
  {
    id: 3,
    label: 'https://www.chk.com',
    icon: <TbWorldWww />,
  },
  {
    id: 4,
    label: '+243 810 000 000',
    icon: <FaPhoneAlt />,
  },
];

const exploreLinks = [
  {
    id: 1,
    label: 'Location, City, Country',
    icon: <FaAngleRight />,
  },
  {
    id: 2,
    label: 'email@example.com',
    icon: <FaAngleRight />,
  },
  {
    id: 3,
    label: 'https://www.chk.com',
    icon: <FaAngleRight />,
  },
  {
    id: 4,
    label: '+243 810 000 000',
    icon: <FaAngleRight />,
  },
];

const usefulLinks = [
  {
    id: 1,
    label: 'Location, City, Country',
    icon: <FaAngleRight />,
  },
  {
    id: 2,
    label: 'email@example.com',
    icon: <FaAngleRight />,
  },
  {
    id: 3,
    label: 'https://www.chk.com',
    icon: <FaAngleRight />,
  },
  {
    id: 4,
    label: '+243 810 000 000',
    icon: <FaAngleRight />,
  },
];

const socialMedia = [
  {
    id: 1,
    icon: <IoLogoWhatsapp />,
    to: '/',
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    to: '/',
  },
  {
    id: 3,
    icon: <FaXTwitter />,
    to: '/',
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    to: '/https://www.linkedin.com/in/centre-hospitalier-kibali-590211184',
  },
];

export {
  exploreLinks,
  contactInformation,
  usefulLinks,
  socialMedia,
};
