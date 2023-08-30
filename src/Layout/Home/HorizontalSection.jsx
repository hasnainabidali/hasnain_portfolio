import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';

export const HomeHorizontalSection = () => {

    useEffect(() => {

      
    // ScrollTrigger.defaults({ scroller: document.body });
    
        gsap.utils.toArray('.horizontal-section').forEach((section, index) => {
            const wrapper = section.querySelector('.wrapper');
            const [xStart, xEnd] =
              index % 2
                ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
                : [wrapper.scrollWidth * -1, 0];
            gsap.fromTo(
              wrapper,
              { x: xStart },
              {
                x: xEnd,
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
      <div className="overflow-auto text-[12vw] overflow-x-hidden bg-cream ">
        <section className="horizontal-section h-fit">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
            Keep smiling
          </div>
        </section>
        {[1, 2, 3, 4].map((el) => (
          <section key={el} className="horizontal-section">
            <div className="wrapper flex text-[16vh] font-medium  ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
                <img
                  key={el2}
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                  src={`https://source.unsplash.com/featured/?cities&${el2}?sig&${el}`}
                />
              ))}
            </div>
          </section>
        ))}
        <section className="horizontal-section ">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
            because life is a beautiful thing
          </div>
        </section>
        {[1, 2, 3, 4].map((el) => (
          <section key={el} className="horizontal-section">
            <div className="wrapper flex text-[16vh] font-medium ">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el2) => (
                <img
                  key={el2}
                  className="h-80 rounded-xl m-2 transition-all hover:scale-95 cursor-pointer "
                  src={`https://source.unsplash.com/featured/300×300/?cities&${el2}?sig&${el}`}
                />
              ))}
            </div>
          </section>
        ))}
        <section className="horizontal-section h-fit">
          <div className="wrapper flex text-[16vh] font-medium overflow whitespace-nowrap">
            and there's so much to smile about.
          </div>
        </section>
    </div>
    );
};