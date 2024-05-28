import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const DoctorCard = ({
  avatar, name, specialization, links, description,
}) => (
  <div className="doctorItem h-[400px] rounded-[8px] bg-[#f1f6f8] mt-0 mx-auto mb-4rem">
    <div className="teamItem flex gap-[1.5rem] w-full h-full ">
      <div className="leftCont w-[40%]">
        <img
          src={avatar}
          alt={name}
          className="object-cover left-0 w-full h-full imgBorderRadius"
        />
      </div>

      <div className="rightCont w-[60%]">
        <div className="heading py-[1.5rem] mt-[25px] flex justify-center items-start flex-col gap-[8px]">
          <h3 className="name text-[1.5rem] font-[600]">
            {name}
          </h3>
          <h6 className="specialization italic text-[#13c5dd]">
            {specialization}
          </h6>
        </div>

        <p className="description text-[#848e9f] mb-[25px] pr-[0.7rem] text-[14px] text-justify">
          {description}
        </p>

        <ul className="socialMedia flex items-center py-[1.5rem] mr-[0.7rem] border-t-[1px] border-[#848e9f] gap-[1rem]">
          {links.map((link) => (
            <li key={link.id} className="socialMedia bg-[#10b5cb] p-[0.5rem] rounded-full">
              <NavLink
                to={link.to}
                className="text-[1.2rem] text-white hover:text-[#1d2a4d]"
              >
                {link.icon}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

DoctorCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialization: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.arrayOf.isRequired,
};

export default DoctorCard;
