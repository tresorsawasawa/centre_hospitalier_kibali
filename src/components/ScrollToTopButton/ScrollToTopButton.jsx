/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import './ScrollToTopButton.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`scroll-to-top-button fixed right-[1.5rem] bottom-[0] py-[1rem] px-[0.6rem] ${isVisible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FaArrowUp className="text-[1.5rem] text-white" />
    </button>
  );
};

export default ScrollToTopButton;
