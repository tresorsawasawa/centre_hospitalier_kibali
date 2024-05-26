/* eslint-disable react/prop-types */
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const PatientsTestimonials = ({ patient }) => (
  <div className="carouselItem max-w-[100%] flex items-center justify-center flex-col my-0 mx-auto">
    <div className="imgContainer relative h-[150px] w-[150px]">
      <img
        src={patient.icon}
        alt={patient.name}
        className="h-full w-full rounded-[50%]"
      />
      <ImQuotesLeft
        className="text-[#13c5dd] absolute right-[43px] text-[3.5rem] bg-white p-[8px] rounded-[50%] bottom-[-1.6rem]"
      />
    </div>

    <div className="descCon text-center max-w-[700px]">
      <p className="p-[1rem] text-[1.2rem] text-[#848e9f]">{patient.description}</p>
    </div>

    <div className="nameProfession text-center pb-[2.5rem]">
      <h4 className="font-[700] text-[1.6rem]">{patient.name}</h4>
      <span className="text-[#13c5dd] text-[1rem]">{patient.profession}</span>
    </div>
  </div>
);

export default PatientsTestimonials;
