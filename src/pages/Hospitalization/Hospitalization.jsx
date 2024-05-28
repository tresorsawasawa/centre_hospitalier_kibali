/* eslint-disable max-len */
import React, { useState } from 'react';
import { LuHeartPulse } from 'react-icons/lu';
import { FaHandHoldingMedical } from 'react-icons/fa6';
import './Hospitalization.scss';
import HospitalizationRegAdmission from '../../components/YourArrival/HospitalizationRegAdmission';
import HospitalizationRights from '../../components/YourArrival/HospitalizationRights';

const Hospitalization = () => {
  const [result, setResult] = useState(null);
  const [activeButton, setActiveButton] = useState(0);

  const handleClickButton = (index) => {
    setActiveButton(index);

    if (index === 0) {
      setResult(<HospitalizationRegAdmission />);
    } else {
      setResult(<HospitalizationRights />);
    }
  };

  const buttonClasses = ['button1Active', 'button2Active'];

  return (
    <section className="hospitalization w-full pt-[11rem]">
      <div className="wrapper w-full">
        <div className="headings flex flex-col items-center justify-center gap-[1.5rem] w-full">
          <h2 className="sectionTitle uppercase text-[20px] font-[600] text-[#13c5dd] relative mb-[2rem]">Hospitalization</h2>
        </div>

        <div className="introMessage bg-[#13c5dd] w-full ">
          <p className="w-[85%] my-[0] mx-[auto] text-justify py-[1.3rem] text-white text-[18px]">
            Welcome to the Kibali Hospital Center&apos;s outpatient services. We are dedicated to providing high-quality and accessible medical services to patients who do not require hospitalization. We offer a comprehensive range of medical services to patients who do not require hospitalization. Our experienced physicians provide personalized care for patients of all ages, with specialized services for women&apos;s health, pediatric care, and various medical conditions. Our outpatient department is equipped with state-of-the-art technology and staffed by qualified medical professionals committed to providing our patients with the best care possible. We are dedicated to providing accessible and high-quality medical care to our community.
          </p>
        </div>

        <div className="tableContainer w-[85%] my-[2rem] mx-[auto]">
          <table className="border p-[1rem]">
            <tbody>
              <tr className="w-full">
                <td className="border w-[50%]">
                  <button
                    type="button"
                    onClick={() => handleClickButton(0)}
                    className={`button1 flex justify-center items-center gap-[0.3rem] py-[0.7rem] font-[500] capitalize w-[100%] ${activeButton === 0 ? buttonClasses[0] : ''}`}
                  >
                    <LuHeartPulse />
                    <span>Registration and admission</span>
                  </button>
                </td>
                <td className="border w-[50%]">
                  <button
                    type="button"
                    onClick={() => handleClickButton(1)}
                    className={`button2 flex justify-center items-center gap-[0.3rem] py-[0.7rem] font-[600] capitalize w-[100%] ${activeButton === 1 ? buttonClasses[1] : ''}`}
                  >
                    <FaHandHoldingMedical />
                    <span>Your rights</span>
                  </button>
                </td>
              </tr>
              <tr className="resultContainer">
                <td colSpan={2}>
                  {result === null ? <HospitalizationRegAdmission /> : result}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Hospitalization;
