/* eslint-disable max-len */
/* eslint-disable no-return-assign */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Appointment.scss';

const Appointment = () => (
  <section className="appointment w-full pt-[12rem] pb-[2rem]">
    <div className="inner w-[85%] flex gap-[3rem] my-0 mx-auto pb-[4rem]">
      <div className="aboutLeft relative w-[50%] flex flex-col gap-[2rem]">
        <div className="headings flex flex-col gap-[1.5rem]">
          <h2 className="appointmentTitle  uppercase text-[20px] font-[600] text-[#13c5dd] relative">Appointment</h2>
          <h1 className="heroText text-[3rem] font-[700] leading-[4rem]">
            Make An Appointment For Your Family
          </h1>
        </div>

        <p className="description text-justify text-[1.1rem] text-[#848e9f]">
          Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
        </p>

        <div className="buttonsContainer text-white flex gap-[2rem] pt-[2rem] font-[500]">
          <NavLink
            to="/find_a_doctor"
            className="button text-[20px]"
          >
            Find Doctor
          </NavLink>

          <NavLink
            to="/appointment"
            className="button text-[20px]"
          >
            Read More
          </NavLink>
        </div>
      </div>

      <div className="aboutRight w-[50%] flex flex-col gap-[2rem]">
        <div className="row bg-[#eff5f9] flex flex-col text-center rounded px-[2rem] gap-[2rem] py-[3rem]">
          <h2 className="heading mb-4 text-[2rem] font-bold">
            Book An Appointment
          </h2>

          <form className="form flex gap-[1rem]">
            <div className="left flex flex-col gap-[1rem]">
              <div className="DepartmentsList">
                <select className="form-select bg-light border-0 w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem]">
                  <option selected="">Choose Department</option>
                  <option value="1">Department 1</option>
                  <option value="2">Department 2</option>
                  <option value="3">Department 3</option>
                </select>
              </div>
              <div className="nameInputCont">
                <input type="text" className="w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem]" placeholder="Your Name" />
              </div>

              <div className="dateInputcont">
                <input
                  placeholder="Date"
                  type="text"
                  className="w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem]"
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  id="date"
                />
              </div>
            </div>
            <div className="right flex flex-col gap-[1rem]">
              <div className="">
                <select className="form-select bg-light border-0 w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem]">
                  <option selected="">Select Doctor</option>
                  <option value="1">Doctor 1</option>
                  <option value="2">Doctor 2</option>
                  <option value="3">Doctor 3</option>
                </select>
              </div>

              <div className="emailInputCont">
                <input type="email" className="w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem] bg-light border-0" placeholder="Your Email" />
              </div>

              <div className="timeInputcont">
                <input
                  placeholder="Time"
                  type="time"
                  className="form-control bg-light border-0 w-[100%] text-[#848e9f] bg-white py-[0.5rem] px-[1rem] outline-none"
                  onFocus={(e) => (e.target.type = 'time')}
                  onBlur={(e) => (e.target.type = 'text')}
                  id="time"
                />
              </div>
            </div>
          </form>
          <div className="col-12">
            <NavLink to="/appointment" className="btn btn-primary w-100 py-3 text-white font-bold" type="submit">Make An Appointment</NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Appointment;
