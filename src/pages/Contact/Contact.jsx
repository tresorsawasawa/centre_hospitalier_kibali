import React from 'react';

import cardsData from './data';
import './Contact.scss';

const Contact = () => (
  <section className="contact w-[100%]">
    <div className="wrapper w-[100%]">
      <div className="inner w-[85%] flex flex-col gap-[3rem] my-0 mx-auto mb-[5rem]">
        <div className="headings flex flex-col items-center justify-center gap-[1.5rem] w-[100%]">
          <h2 className="sectionTitle uppercase text-[20px] font-[600] text-[#13c5dd] relative">Any questions?</h2>
          <h1 className="title text-[3rem] font-[700] leading-[4rem] max-w-[600px] text-center capitalize">
            Please Feel Free To Contact Us
          </h1>
        </div>

        <ul className="cards flex justify-center items-center my-[0] mx-[auto] gap-[3rem]">
          {cardsData.map(({
            id, icon, label,
          }) => (
            <li key={id} className="ServiceItem w-[100%] max-w-[100%]">
              <div className="card bg-[#eff5f9] text-center h-[200px] p-[1rem] flex flex-col justify-center items-center rounded-[0.5rem] gap-[1rem] min-w-[200px]">
                <div className="iconContent flex justify-center items-center w-[100px] h-[70px] rotate-[-14deg] bg-[#13c5dd] rounded-[50%]">
                  <span className="rotate-[14deg] font-[700] text-[2rem] text-white">
                    {icon}
                  </span>
                </div>
                <h4 className="title font-[700]">
                  {label}
                </h4>
              </div>
            </li>
          ))}
        </ul>

        <div className="formContainer">
          <form action="POST" className="form flex flex-col  justify-center items-center gap-[1rem]">
            <div className="max-w-[700px] formControl">
              <input type="text" className="nameInput p-[12px] w-[100%] bg-[#eff5f9] rounded-[3rem]" placeholder="Your name" required />
            </div>

            <div className="max-w-[700px] formControl">
              <input type="email" className="emailInput p-[12px] w-[100%] bg-[#eff5f9] rounded-[3rem]" placeholder="Your email" required />
            </div>

            <div className="max-w-[700px] formControl">
              <input type="text" className="emailInput p-[12px] w-[100%] bg-[#eff5f9] rounded-[3rem]" placeholder="Subject" required />
            </div>

            <div className="max-w-[700px] formControl">
              <textarea
                className="messageArea p-[12px] w-[100%] rounded-[1rem] h-[112px] bg-[#eff5f9]"
                placeholder="Enter you message"
                required
                maxLength={700}
                cols={20}
              />
            </div>

            <div className="max-w-[700px] formControl">
              <input
                type="submit"
                value="Send message"
                className="text-center py-[8px] text-white w-full cursor-pointer btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

);

export default Contact;
