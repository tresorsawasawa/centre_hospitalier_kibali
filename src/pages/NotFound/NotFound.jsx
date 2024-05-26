import React from 'react';
import { useRouteError, NavLink } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import './NotFound.scss';

const NotFound = () => {
  const error = useRouteError();

  return (
    <section className="notFoundContainer flex items-center pt-[5rem] flex-col justify-center">
      <NavLink
        to="/"
        className="back-to-home text-[2rem] font-[600] flex justify-center items-center gap-[1rem]"
      >
        <BsArrowLeft />
        <span>Click this to go Back To the Homepage</span>
      </NavLink>

      <div className="text-container">
        <h3>{error.statusText || error.message}</h3>
        {/* <h3>The page you opened doesn&apos;t exist.</h3> */}
      </div>
    </section>
  );
};

export default NotFound;
