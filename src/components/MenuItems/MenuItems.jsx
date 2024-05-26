/* eslint-disable max-len */
/* eslint-disable no-self-compare */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import menuDataLinks from './data';
import Dropdown from '../Dropdown/Dropdown';
import './MenuItems.scss';
import Logo from '../../assets/images/logo.png';

const MenuItems = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(
    menuDataLinks.reduce((acc, item) => ({ ...acc, [item.id]: false }), {}),
  );
  const [showMenu, setShowMenu] = useState('navbarContainer');
  const ref = useRef(null);

  useClickAway(ref, () => setShowMenu('navbarContainer'));

  const linkName = menuDataLinks.map((item) => item.name);

  const handleLinkClick = (event, to) => {
    event.stopPropagation();
    setActiveLink(linkName);
    setIsOpen({ ...isOpen });
    setShowMenu('navbarContainer');
    if (to) {
      window.location.href = to;
    }
  };

  const handleSubmenuClick = (id) => {
    setIsOpen({ ...isOpen, [id]: !isOpen[id] });
  };

  const showNavMenu = () => setShowMenu('navbarContainer activeNavbar backgroundBlur');

  const closeNavMenu = () => setShowMenu('navbarContainer');

  return (
    <>
      <div className="header relative w-[85%] flex justify-between items-center">
        <div className="LogoContainer py-1 flex justify-center items-center h-50 w-100">
          <NavLink to="/" className="LogoContent py-[12px] flex justify-center items-center flex-col">
            <img src={Logo} alt="Logo" className="w-100 h-auto" />
          </NavLink>
        </div>

        <nav ref={ref} className={`navbar flex justify-center items-center py-1 ${showMenu}`}>
          <ul className="navLinks flex justify-end items-center gap-[2rem]">
            {menuDataLinks.map(({
              id, name, to, icon, submenu, label,
            }) => (
              <li key={id} className="linkItem cursor-pointer">
                {submenu ? (
                  <button
                    onClick={() => handleSubmenuClick(id)}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen[id]}
                    className={`nav-link relative flex ${isOpen[id] ? 'showPopup' : ''} ${activeLink === label ? 'flex active navLink text-[16px] uppercase justify-center items-center' : 'flex justify-center items-center navLink text-[18px] uppercase'}`}
                  >
                    {name}
                    {icon}
                    <Dropdown items={submenu} />
                  </button>
                ) : (
                  <NavLink
                    to={to}
                    key={id}
                    onClick={handleLinkClick}
                    className={activeLink === name ? 'flex active navLink text-[16px] uppercase justify-center items-center' : 'flex justify-center items-center navLink text-[18px] uppercase'}
                  >
                    <span>{name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div
            aria-hidden="true"
            onClick={() => closeNavMenu()}
            className="closeMenu text-[2rem] hidden"
          >
            <AiOutlineCloseCircle className="icon clickable" />
          </div>
        </nav>

        <div aria-hidden="true" onClick={showNavMenu} className="hamburger">
          <GiHamburgerMenu className="icon hamburger text-[32px] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default MenuItems;
