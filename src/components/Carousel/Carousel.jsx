/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
// import { ImQuotesLeft } from 'react-icons/im';
import { IoIosRadioButtonOn } from 'react-icons/io';
import './Carousel.scss';
import Test1 from '../../images/testimonial-1.jpg';
import Test2 from '../../images/testimonial-2.jpg';
import Test3 from '../../images/testimonial-3.jpg';
import CarouselItem from './CarouselItem';

const testimonialsData = [
  {
    id: 1,
    icon: Test1,
    name: 'Patient Name',
    profession: 'Profession',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, tempore voluptatum dolorum officiis nulla consequuntur!',
  },
  {
    id: 2,
    icon: Test2,
    name: 'Patient Name',
    profession: 'Profession',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cupiditate, ducimus veniam sequi blanditiis non aliquid. Optio tempore, esse, quae odit maxime distinctio ullam eum molestias quas adipisci exercitationem ab.',
  },
  {
    id: 3,
    icon: Test3,
    name: 'Patient Name',
    profession: 'Profession',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, tempore voluptatum dolorum officiis nulla consequuntur!',
  },
];

const Carousel = () => {
  const [selected, setSelected] = useState(0);
  const tDataLength = testimonialsData.length;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= tDataLength) {
      newIndex = tDataLength;
    }

    setSelected(newIndex);
  };

  return (
    <div className="carousel overflow-hidden">
      <ul
        className="inner whitespace-nowrap transition-transform-[0.3s]"
      >
        {testimonialsData.map((item) => (
          <li key={item.id} className="item">
            <CarouselItem item={item} />
          </li>
        ))}
      </ul>

      {/* ---------------------------------------- */}
      <div className="indicators">
        {testimonialsData.map((item, index) => (
          <div
            className="indicator-buttons"
            key={item.id}
            type="button"
          >
            <IoIosRadioButtonOn
              onClick={() => {
                updateIndex(index);
              }}
              className={`material-symbols-outlined ${
                index === selected
                  ? 'indicator-symbol-active'
                  : 'indicator-symbol'
              }`}
            />
          </div>
        ))}
      </div>

      {/* ------------------------------------------ */}
    </div>
  );
};

export default Carousel;
