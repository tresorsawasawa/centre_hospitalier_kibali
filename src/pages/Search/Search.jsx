/* eslint-disable max-len */
import React, { useState } from 'react';

import { departments, doctors } from './data';
import './Search.scss';
import DoctorCard from './DoctorCard';

const Search = () => {
  const [selected, setSelected] = useState(departments[0].value);
  const [displayedItems, setDisplayedItems] = useState(doctors.slice(0, 6));
  const [showAll, setShowAll] = useState(false);

  const handleChange = (event) => setSelected(event.target.value);

  const handleShowMore = () => {
    setDisplayedItems(doctors);
    setShowAll(!showAll);
  };

  const handleShowLess = () => {
    setDisplayedItems(doctors.slice(0, 6));
    setShowAll(false);
  };

  return (
    <section className="search w-full">
      <div className="wrapper w-full pt-[11rem] pb-[3rem]">
        <div className="inner w-[85%] flex items-center justify-center flex-col gap-[2rem] my-[0] mx-[auto]">
          <div className="headings flex items-center justify-center flex-col gap-[2rem]">
            <h2 className="secTitle uppercase text-[20px] font-[600] relative text-[#13c5dd]">
              Find a doctor
            </h2>
            <h1 className="heroText text-center text-[3rem] font-[700] leading-[4rem] max-w-[700px] capitalize">
              Find A Healthcare Professionals
            </h1>
          </div>

          <p className="description text-center text-[1.1rem] max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste rerum sint numquam, quae culpa architecto fugit corporis repellat odit voluptates, eum consequatur reprehenderit, minima officiis explicabo illo dolores alias quisquam inventore nemo aperiam. Quis quam, perspiciatis laudantium, mollitia at corrupti natus qui explicabo maxime rem velit quasi asperiores veniam.
          </p>

          <div className="inputGroup w-full max-w-[600px] flex items-center justify-center">
            <select className="formSelect px-[12px] py-[14.5px] border border-[#13c5dd] outline-none mr-[2px] rounded-le">
              {departments.map((item) => (
                <option value={selected} onChange={handleChange} className="text-[#1d2a4d]" key={item.id}>{item.name}</option>
              ))}
            </select>
            <input type="text" className="keywordInput px-[12px] py-[15px] border border-[#13c5dd] ml-[-2px] outline-none" placeholder="Keyword" />
            <button type="submit" className="submitBtn px-[22px] py-[16px] outline-none font-[600] text-white bg-[#1d2a4d] border border-[#1d2a4d] brd8">Search</button>
          </div>

          <ul className="doctorsList mt-[1.5rem] flex flex-wrap items-center justify-center gap-[1.5rem]">
            {displayedItems.map((doctor) => (
              <li key={doctor.id} className="doctorItemContainer">
                <DoctorCard
                  name={doctor.name}
                  avatar={doctor.avatar}
                  specialization={doctor.specialization}
                  links={doctor.links}
                  description={doctor.description}
                />
              </li>
            ))}
          </ul>
          {doctors.length > 6 && !showAll && (
            <button
              type="button"
              className="capitalize btn text-white font-[600]"
              onClick={handleShowMore}
              disabled={showAll}
            >
              {showAll ? 'Loading...' : 'Show More'}
            </button>
          )}

          {showAll && (
            <button
              type="button"
              className="capitalize btn text-white font-[600]"
              onClick={handleShowLess}
            >
              Show less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
