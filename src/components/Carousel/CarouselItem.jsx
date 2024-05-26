/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const CarouselItem = ({ item }) => (
  <div className="carouselItem max-w-[700] flex items-center justify-center flex-col">
    <div className="imgContainer relative h-[150px] w-[150px]">
      <img
        src={item.icon}
        alt={item.name}
        className="h-full w-full rounded-[50%]"
      />
      <ImQuotesLeft
        className="text-[#13c5dd] absolute right-[43px] text-[3.5rem] bg-white p-[8px] rounded-[50%] bottom-[-1.6rem]"
      />
    </div>

    <div className="descCon text-center max-w-[700px]">
      <p className="p-[1rem] text-[1.2rem] text-[#848e9f]">{item.description}</p>
    </div>

    <div className="nameProfession text-center">
      <h4 className="font-[700] text-[1.6rem]">{item.name}</h4>
      <span className="text-[#13c5dd] text-[1rem]">{item.profession}</span>
    </div>
  </div>
);

export default CarouselItem;

{ /* <div className="carouselItem border border-red-700 flex items-center justify-center flex-col gap-[2rem]">
    <div className="imgContainer relative h-[150px] w-[150px]">
      <img
        src={item.icon}
        alt={item.name}
        className="h-full w-full rounded-[50%]"
      />
      <ImQuotesLeft
        className="text-[#13c5dd] absolute right-[43px] text-[3.5rem] bg-white p-[8px] rounded-[50%] bottom-[-1.6rem]"
      />
    </div>

    <div className="descCon text-center max-w-[700px]">
      <p className="p-[1rem] text-[1.2rem] text-[#848e9f]">{item.description}</p>
    </div>

    <div className="nameProfession text-center">
      <h4 className="font-[700] text-[1.6rem]">{item.name}</h4>
      <span className="text-[#13c5dd] text-[1rem]">{item.profession}</span>
    </div>
  </div> */ }
