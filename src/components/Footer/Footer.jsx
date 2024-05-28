import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCopyrightLine } from 'react-icons/ri';
import {
  contactInformation,
  exploreLinks,
  usefulLinks,
  socialMedia,
} from './data';
import './Footer.scss';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

const Footer = () => (
  <footer className="footer w-full text-white">
    <div className="wrapper w-[85%] flex justify-between items-start py-[5rem]">
      <div className="contactInfo">
        <h4 className="pb-[2rem] uppercase font-[500] text-[1.3rem]">Get in touch</h4>
        <ul className="infoContainer gap-[1rem] flex flex-col">
          {contactInformation.map((item) => (
            <li key={item.id} className="infoItem flex justify-start items-center gap-[1rem]">
              <span className="primCol">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="exploreLinks">
        <h4 className="pb-[2rem] uppercase font-[500] text-[1.3rem]">
          Explore
        </h4>
        <ul className="exploreContainer flex flex-col gap-[1rem]">
          {exploreLinks.map((item) => (
            <li key={item.id} className="exploreItem flex justify-start items-center gap-[0.5rem]">
              <span className="">{item.icon}</span>
              <NavLink
                to="/"
                className=""
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="usefulLinks">
        <h4 className="pb-[2rem] uppercase font-[500] text-[1.3rem]">
          Useful Links
        </h4>
        <ul className="usefulContainer flex flex-col gap-[1rem]">
          {usefulLinks.map((item) => (
            <li key={item.id} className="usefulItem flex items-center justify-start gap-[0.5rem] hover:text-[#13c5dd]">
              <span>{item.icon}</span>
              <NavLink
                to="/"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="newsLetters">
        <h4 className="pb-[2rem] uppercase font-[500] text-[1.3rem]">
          Follow Us
        </h4>
        <ul className="linksCont flex gap-[1rem]">
          {socialMedia.map((mediaLink) => (
            <li key={mediaLink.id} className="linkItem bg-[#13c5dd] p-[8px]  rounded-[50%] hover:cursor-pointer">
              <NavLink
                to={mediaLink.to}
                className="text-white text-[23px]"
              >
                {mediaLink.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="copyWrightCont w-full relative text-white text-center">
      <p className="text flex items-center justify-center text-[17px] font-[300] py-[1rem]">
        <RiCopyrightLine />
        {' '}
        Kibali Hospital Center. All Rights Reserved
      </p>
    </div>
    <ScrollToTopButton />
  </footer>

);

export default Footer;
