/* eslint-disable max-len */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './Testimonials.scss';
import PatentsTestimonialsData from '../../components/common/PatientsTestimonials/data';
import PatientsTestimonials from '../../components/common/PatientsTestimonials/PatientsTestimonials';

const Testimonials = () => {
  const labels = {
    leftArrow: 'previous slide / item', rightArrow: 'next slide / item', item: 'slide item',
  };

  return (
    <section className="testimonials pt-[11rem] pb-[3rem]">
      <div className="wrapper my-0 mx-auto flex items-center justify-center flex-col">
        <div className="headings w-full upperText pb-[2rem] flex items-center justify-center flex-col gap-[1.5rem]">
          <h2 className="secTitle uppercase text-[20px] font-[600] relative">Testimonial</h2>

          <h1 className="heroText text-[3rem] text-center font-[700] leading-[4rem] max-w-[500px]">
            Patients Say About Our Services
          </h1>
        </div>

        <div className="CarouselContainer my-0 mx-[auto] w-auto">
          <Carousel
            autoPlay
            interval={2000}
            transitionTime={1000}
            labels={labels}
            showThumbs={false}
          >
            {PatentsTestimonialsData.map((patient) => (
              <PatientsTestimonials key={patient.id} patient={patient} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
