/* eslint-disable max-len */
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { departments, aboutData } from './data';
import './About.scss';
import AboutBg from '../../assets/images/about.jpg';
import Doctors from '../../components/common/Doctors/Doctors';

const About = () => {
  const [selected, setSelected] = useState(departments[0].value);

  const handleChange = (event) => setSelected(event.target.value);

  return (
    <section className="about w-full">
      <div className="wrapper w-full pt-[12rem]">
        <div className="inner1 w-[85%] flex gap-[3rem] my-0 mx-auto pb-[4rem]">
          <div className="aboutLeft w-[40%] gap-[1.5rem]">
            <img
              src={AboutBg}
              alt="About pic"
              className="object-cover w-full h-full rounded-[1rem]"
            />
          </div>
          <div className="aboutRight w-[60%] flex flex-col gap-[2rem]">
            <div className="headings flex flex-col gap-[1.5rem]">
              <h2 className="secTitle uppercase text-[20px] font-[600] text-[#13c5dd] relative">About us</h2>
              <h1 className="heroText text-[3rem] font-[700] leading-[4rem]">
                Best Medical Care For Yourself and Your Family
              </h1>
            </div>

            <p className="description text-justify text-[1.2rem] text-[#848e9f]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste rerum sint numquam, quae culpa architecto fugit corporis repellat odit voluptates, eum consequatur reprehenderit, minima officiis explicabo illo dolores alias quisquam inventore nemo aperiam. Quis quam, perspiciatis laudantium, mollitia at corrupti natus qui explicabo maxime rem velit quasi asperiores veniam.
            </p>

            <ul className="highlightFeatures flex justify-between items-center">
              {aboutData.map((item) => (
                <li key={item.id} className="item bg-[#eff5f9] flex justify-center items-center flex-col w-[9rem] h-[9rem] rounded-full">
                  <div className="icon text-[3rem] text-[#13c5dd]">{item.icon}</div>
                  <div className="qualification pt-[1.1rem] leading-1.2 font-[700]">
                    {item.qualification}
                  </div>
                  <div className="status text-[14px] text-[#13c5dd] font-[600]">{item.status}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="inner2 w-full bg-[#13c5dd] flex items-center justify-center flex-col py-[5rem] gap-[3rem]">
          <div className="headings flex items-center justify-center flex-col gap-[2rem]">
            <h2 className="secTitle2 uppercase text-[20px] font-[600] relative text-white">
              Find a doctor
            </h2>
            <h1 className="heroText text-center text-[3rem] font-[700] leading-[4rem] max-w-[700px] capitalize">
              Find A Healthcare Professionals
            </h1>
          </div>

          <p className="description text-center text-[1.2rem] text-white max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste rerum sint numquam, quae culpa architecto fugit corporis repellat odit voluptates, eum consequatur reprehenderit, minima officiis explicabo illo dolores alias quisquam inventore nemo aperiam. Quis quam, perspiciatis laudantium, mollitia at corrupti natus qui explicabo maxime rem velit quasi asperiores veniam.
          </p>

          <div className="inputGroup w-full max-w-[600px]">
            <select className="form-select px-[12px] py-[16px] border-none outline-none mr-[2px] rounded-le">
              {departments.map((item) => (
                <option value={selected} onChange={handleChange} className="text-[#1d2a4d]" key={item.id}>{item.name}</option>
              ))}
            </select>
            <input type="text" className="px-[12px] py-[16px] border-none outline-none" placeholder="Keyword" />
            <button type="submit" className="px-[22px] py-[16px] border-none outline-none text-white bg-[#1d2a4d] brd8">Search</button>
          </div>
        </div>

        <div className="inner3 w-[85%] my-0 mx-auto flex items-center justify-center flex-col pt-[5rem] pb-[0] gap-[3rem]">
          <div className="headings flex items-center justify-center flex-col gap-[2rem]">
            <h2 className="secTitle2 uppercase text-[20px] font-[600] relative text-[#10b5cb]">
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
};

export default About;
