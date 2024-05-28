import React from 'react';
import Doctors from '../../components/common/Doctors/Doctors';
import './Team.scss';

const Team = () => (
  <section className="team w-full">
    <div className="wrapper w-full pt-[7rem] pb-[-3rem]">
      <div className="inner w-[85%] my-0 mx-auto flex items-center justify-center flex-col pt-[5rem] pb-[0] gap-[3rem]">
        <div className="headings flex items-center justify-center flex-col gap-[2rem]">
          <h2 className="secTitle2 uppercase text-[20px] font-[600] relative text-[#5fd7e7]">
            Our doctors
          </h2>
          <h1 className="heroText text-center text-[3rem] font-[700] leading-[4rem] max-w-[700px] capitalize">
            Qualified Healthcare Professionals
          </h1>
        </div>

        <div className="carousel">
          <Doctors />
        </div>
      </div>
    </div>
  </section>
);

export default Team;
