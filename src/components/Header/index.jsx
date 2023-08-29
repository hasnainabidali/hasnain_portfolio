import React, { useRef } from 'react';
import { MainLogo } from '../Icons';
import gsap from 'gsap';
import { MenuButton } from '../MenuButton';

export const Header = () => {
  const logoRef = useRef(null);

  const onLogoEnter = () => {
    const currColor = logoRef.current.getAttribute('data-color');
    const logoSvg = logoRef.current.firstChild.firstChild;

    const nextColor =
      currColor === '#a6e2e3'
        ? '#8566f6'
        : currColor === '#8566f6'
        ? '#ed7c50'
        : '#a6e2e3';

    logoRef.current.setAttribute('data-color', nextColor);
    gsap.to(logoSvg, { fill: currColor, duration: 0.2, ease: 'power1.out' });
  };
  const onLogoLeave = () => {
    const logoSvg = logoRef.current.firstChild.firstChild;
    gsap.to(logoSvg, {
      fill: '#f5f4f5',
      duration: 0.2,
      ease: 'power1.out',
    });
  };

  return (
    <div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-4 lg:px-7 transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container relative flex items-center justify-center transition-all duration-500 ease-out will-change-transform py-4 lg:py-8">
          <div className="absolute left-0">
            <MenuButton>Menu</MenuButton>
          </div>
          <div
            className="header_logo  pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-8 [&>svg]:duration-500 [&>svg]:ease-out md:[&>svg]:h-12 lg:[&>svg]:h-16"
            data-color="#a6e2e3"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <MainLogo />
          </div>
          <div className="absolute right-0">
            <MenuButton>Contact</MenuButton>
          </div>
        </div>
      </div>
    </div>
  );
};
