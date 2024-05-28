import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaPhone,
} from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

import socials from './data';
import './TopBar.scss';
import FrenchFlag from '../../assets/images/france-flag-icon.svg';
import UkFlag from '../../assets/images/united-kingdom-flag-icon.svg';

const TopBar = () => (
  <div className="topInfo w-full text-[14px] flex justify-center items-center py-2">
    <div className="wrapper w-[85%] flex justify-end items-center gap-[3.5rem]">
      <div className="contentNumEmail flex gap-[1.5rem]">
        <span className="flex justify-center items-center">
          <span className="px-1"><MdOutlineMailOutline className="text-[18px]" /></span>
          {' '}
          email@example.com
        </span>
        <span className="flex justify-center items-center">
          <span className="px-1"><FaPhone /></span>
          {' '}
          +243 970 000 000
        </span>
      </div>

      <ul className="socials flex">
        {socials.map(({
          id, icon, to,
        }) => (
          <li key={id} className="linkItem mx-1">
            <NavLink key={id} to={to} className="transform hover:scale-x-115 transition-transform duration-300 text-[16px]">
              {icon}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flags flex justify-center items-center gap-[1.6rem] py-[7px]">
        <li className="flagItem french flex items-center gap-[2px]">
          <img src={FrenchFlag} className="h-18" alt="French Flag" />
          <span className="text text-[14px]">FR</span>
        </li>
        <li className="flagItem english flex gap-[2px]">
          <img src={UkFlag} className="text-[18px]" alt="Uk Flag" />
          <span className="text text-[13px]">EN</span>
        </li>
      </ul>
    </div>
  </div>
);

export default TopBar;
