
import React, { useEffect } from 'react';

const WindowScroll = () => {
  const toggleNavClass = () => {
    const nav = document.querySelector('nav');
    window.scrollY > 0
      ? nav.classList.add('windowScroll')
      : nav.classList.remove('windowScroll');
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleNavClass);

    return () => {
      window.removeEventListener('scroll', toggleNavClass);
    };
  }, []); 

  return <div></div>; 
};

export default WindowScroll;
