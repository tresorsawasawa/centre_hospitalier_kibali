/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { NavLink } from 'react-router-dom';
// import './Dropdown.scss';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleLinkClick = (item, event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
    window.location.href = item.to;
  };

  useClickAway(ref, () => setIsOpen(false));

  return (
    <ul ref={ref} className={`dropdown dropdown-menu absolute ${isOpen ? 'active' : ''}`}>
      {items.map((item) => (
        <li key={item.id} className="navItem">
          <NavLink
            className="subNavLink text-[#1d2a4d] f-[700]"
            to={item.to}
            onClick={(event) => handleLinkClick(event, item.to)}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
