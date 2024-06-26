import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { MainLogo } from '../Icons';
import gsap from 'gsap';
import { MenuButton } from '../MenuButton';
import { Menu } from '@/components';

export const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

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
    <div className="fixed top-0 left-0 z-10 w-screen transition-all duration-500 ease-out header min-w-screen md:cursor-none">
      <div className="relative flex items-center justify-center px-4 py-4 transition-all duration-500 ease-out header_container will-change-transform lg:px-7 lg:py-8 ">
        <div className="relative w-full">
          <div
            className="absolute left-0 -translate-y-1/2 top-1/2"
            onClick={() => setmenuVisible(!menuVisible)}
          >
            <MenuButton>Menu</MenuButton>
          </div>
          <div
            className="header_logo link pointer-event-auto mx-auto max-w-fit leading-none transition-height [&>a>svg]:h-10 [&>a>svg]:duration-500 [&>a>svg]:ease-out md:[&>a>svg]:h-12 lg:[&>a>svg]:h-16"
            data-color="#a6e2e3"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <Link href="/">
              <MainLogo />
            </Link>
          </div>
          <div className="absolute right-0 -translate-y-1/2 top-1/2">
            <MenuButton link="mailto:hasnainrhraza@gmail.com">
              Contact
            </MenuButton>
          </div>
        </div>
      </div>
      <nav className={`outer-menu ${menuVisible ? 'menu-visible' : ''}`}>
        {/* {
            menuVisible &&
          } */}
        <button
          className={`hamburger fixed left-5 top-10 ${
            menuVisible ? 'visible' : 'invisible'
          }`}
          onClick={() => setmenuVisible(!menuVisible)}
        >
          <MenuButton>Close</MenuButton>
        </button>
        <Menu setmenuVisible={setmenuVisible} />
      </nav>
    </div>
  );
};
