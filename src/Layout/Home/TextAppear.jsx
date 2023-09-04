import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';


// gsap.registerPlugin(ScrollTrigger);

export const TextAppear = () => {

    useEffect(() => {
        // gsap.utils.toArray('.text-OpReveal').forEach((section, index) => {
        //     const wrapper = section.querySelector('div');
        //     const [xStart, xEnd] =
        //       index % 2
        //         ? ['100%', (wrapper.scrollWidth - section.offsetWidth) * -1]
        //         : [wrapper.scrollWidth * -1, 0];
        //     gsap.to(
        //       wrapper,
        //       {  opacity: 0.5 },
        //       {
        //         opacity: 1,
        //         scrollTrigger: {
        //           trigger: section,
        //           scrub: 0.5,
        //         },
        //       }
        //     );
        // })

        // let logoAction = new gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.text-OpReveal',
        //         // pin: '.main-container',
        //         scrub: true
        //     }
        // })
        // .to(".text-OpReveal span", {
        //     opacity: 1
        // })


        // gsap.fromTo('.text-OpReveal span', 
        // { opacity: 0}, 
        // {
        //     opacity: 1,
        //     scrollTrigger: {
        //         trigger: '.text-OpReveal'
        //     }
        // }
        // )

        ScrollTrigger.create({
            trigger: '.text-OpReveal span',
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () =>
              gsap.to('.text-OpReveal span', {
                opacity: 1
              }),
            onEnterBack: () =>
              gsap.to('.text-OpReveal span', {
                opacity: 1
              }),
            onLeave: () =>
              gsap.to('.text-OpReveal span', {
                opacity: 0.2
              }),
            onLeaveBack: () =>
              gsap.to('.text-OpReveal span', {
                opacity: 0.2
              }),
          });
        ScrollTrigger.create({
            trigger: '.text-OpReveal p',
            start: 'top 50%',
            end: 'bottom 50%',
            onEnter: () =>
              gsap.to('.text-OpReveal p', {
                opacity: 1
              }),
            onEnterBack: () =>
              gsap.to('.text-OpReveal p', {
                opacity: 1
              }),
            onLeave: () =>
              gsap.to('.text-OpReveal p', {
                opacity: 0.2
              }),
            onLeaveBack: () =>
              gsap.to('.text-OpReveal p', {
                opacity: 0.2
              }),
          });
    
      return () => {
        
      }
    }, [])
    

    return (
        <div className="main-container text-OpReveal flex items-center justify-center">
            <div className="container  py-36">
                <h2 className="text-2xl lg:text-6xl font-semibold text-center leading-[1.5]">
                    <span className="opacity-10">I'm a passionate Engineer who's focused on building scalable and performant apps. </span>
                    <p className="opacity-10">I take responsibility to craft a good user experience using modern frontend architecture.</p>
                </h2>
            </div>
        </div>
    );
}