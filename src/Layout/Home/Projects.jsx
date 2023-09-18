import React, { useEffect, useRef } from 'react';
import Image from 'next/image'
import { PROJECTS } from "constant";
import wircha from '../../images/wirtscha11.png';
import gsap from 'gsap';
import { MenuButton } from '@/components';

export const Projects = () => {

    useEffect(() => {

        gsap.utils.toArray('.project-item').forEach((section, index) => {
            const Leftwrapper = section.querySelector('.left-projectImage');
            const Rightwrapper = section.querySelector('.right-projectImage');
            gsap.fromTo(
                section,
              { y: '10%' },
              {
                y: '0%',
                scrollTrigger: {
                  trigger: section,
                  scrub: 0.5,
                },
              }
            );
            gsap.fromTo(
                Leftwrapper,
              { x: '100%', rotateZ: 0 },
              {
                x: '-12%', rotateZ: -2.9,
                scrollTrigger: {
                  trigger: section,
                  scrub: 0.5,
                },
              }
            );
            gsap.fromTo(
                Rightwrapper,
              { x: '-100%', rotateZ: 0 },
              {
                x: '12%', rotateZ: 2.9,
                scrollTrigger: {
                  trigger: section,
                  scrub: 0.5,
                },
              }
            );
          });
      
    
      return () => {
        
      }
    }, [])
    


    return(
        <div className="project-list">
            {PROJECTS.map((el) => (
                <section
                    className="color-section"
                    data-bgcolor={el.bgColor}
                    data-endbgcolor={el.endbgcolor}
                    data-textcolor={el.textColor}
                    >
                    <div className="project-item h-full md:h-[200vh] w-full ">
                        <div className="flex items-center justify-center flex-col md:flex-row w-full h-full md:h-[100vh] sticky top-0 overflow-hidden py-10 md:py-0">
                            <div className="left-projectImage z-10 will-change-transform">
                                <Image 
                                    src={el.leftImg}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-[230px] md:h-auto"
                                    alt="Picture of the author"
                                    />
                            </div>
                            <div className="projectWrapper relative w-full md:w-[50vw] h-[300px] md:h-full max-w-[600px] flex flex-col items-center justify-center gap-y-[20px] md:gap-y-[120px] px-[64px] py-10 md:py-0 z-0">
                                <div className="uppercase text-sm">{el.tech}</div>
                                <h2 className="text-3xl md:text-5xl text-center leading-[1.25em]">{el.title}</h2>
                                <MenuButton
                                    classes="md:text-sm text-sm border rounded-full w-[60px] text-center"
                                    link={el.link}
                                >Visit</MenuButton>
                            </div>
                            <div className="right-projectImage z-10 will-change-transform">
                                <Image 
                                    src={el.RightImg}
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    className="w-full h-[230px] md:h-auto"
                                    alt="Picture of the author"
                                    />
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}