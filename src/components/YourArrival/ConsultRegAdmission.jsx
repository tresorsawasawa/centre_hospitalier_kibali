/* eslint-disable max-len */
import React from 'react';
import './ConsultRegAdmission.scss';

const ConsultRegAdmission = () => (
  <div className="consultRegAdmission flex flex-col gap-[2rem] text-justify text-wrap px-[2rem] py-[1rem]">
    <p>
      Seeking medical treatment can be a stressful experience, which is why we have created a streamlined admissions and discharge process for our outpatient services. We want to ensure that you receive the best possible care and support during your visit to our hospital.AdmissionsFor admission, you will need to schedule an appointment by calling our outpatient clinic. Please take note of the below:
    </p>

    <ul className="listContainer list-decimal flex flex-col gap-[0.6rem]">
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022; Outpatient clinics are open from Monday- Friday, 7:00 am-5:00 pm Saturday and Sunday clinics are open from
          {' '}
          <b>8:00 am- 4:00 pm.</b>
        </p>
      </li>
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022;
          {' '}
          <b>Vaccinations</b>
          {' '}
          are conducted on Wednesday and Saturday from
          {' '}
          <b>7:00 am–5:00 pm</b>
          . Infants from 0 to 3 months are vaccinated on
          {' '}
          <b>Wednesdays</b>
          , while those above 3 months are vaccinated on
          {' '}
          <b>Saturdays</b>
          .
        </p>
      </li>
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022; To book an appointment, please dial the following lines:
          {' '}
          <b>+243 81 XXX XXX</b>
        </p>
      </li>
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022;
          {' '}
          <b>International visitors</b>
          {' '}
          can book an appointment by dialing our toll-free line:
          {' '}
          <b> International Whatsapp Call: +243 81X XXX XXX</b>
        </p>
      </li>
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022; For Immediate Feedback , Please  Don’t Hesitate to reach to us Through our Whatsapp: +233 81X XXX XXX
        </p>
      </li>
      <li className="listItem flex gap[0.5rem]">
        <p>
          &#x2022; For further assistance, please send us an email at
          {' '}
          <b>info@example.com</b>
          {' '}
          or write to us on social media: on Twitter
          <b>@username</b>
          {' '}
          and Facebook at
          {' '}
          <b>Facebook User Name</b>
        </p>
      </li>
    </ul>

    <p>
      You will check in at the outpatient registration desk in the hospital lobby on the day of your appointment. Our staff will guide you through the registration process and gather your personal information, including your name, address, and insurance details. You will also be asked to provide information about your medical history and current symptoms.Once you have completed the registration process, you will be escorted to the outpatient clinic. Our medical team will conduct a thorough assessment to determine the best course of treatment for you. This may include diagnostic tests, consultations with specialists, or medication prescriptions. Based on the assessment results, our medical team will develop a personalized treatment plan for you.Once your treatment is complete, our medical team will provide detailed instructions on follow-up care and any necessary medication prescriptions. If you require additional support after your visit, our team will work with you to develop a plan for ongoing care. This may include additional appointments with specialists, referral to other healthcare providers, or home care services.We are committed to providing our patients with the highest quality care and support at King Faisal Hospital Rwanda. Our admissions and discharge process for outpatient services is designed to ensure that our patients receive the best possible care from the moment they arrive until the moment they leave.Please don’t hesitate to speak with our staff if you have any questions or concerns about our admissions or discharge process.
    </p>
  </div>
);

export default ConsultRegAdmission;
