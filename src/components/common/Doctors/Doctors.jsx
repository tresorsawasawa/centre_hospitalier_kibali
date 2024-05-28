/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import doctors from './data';
import DoctorCard from './DoctorCard';

const Doctors = () => (
  <Carousel
    autoPlay
    showThumbs={false}
    infiniteLoop
    interval={4000}
    transitionTime={1000}
    className="doctorsList gap-[2rem] border-spacing-1 flex items-center justify-center flex-col pb-[4rem]"
  >
    {doctors.map((doctor) => (
      <DoctorCard
        key={doctor.id}
        name={doctor.name}
        avatar={doctor.avatar}
        specialization={doctor.specialization}
        links={doctor.links}
        description={doctor.description}
      />
    ))}
  </Carousel>
);

export default Doctors;
