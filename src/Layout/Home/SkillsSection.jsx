import React, { useEffect, useRef } from 'react';

import { OTHER_SKILLS, SKILLS } from "constant";
import Image from 'next/image';
import gsap from 'gsap';

export const SkillsSection = () => {

    useEffect(() => {
      
        const skills = document.querySelectorAll('.skillset li');
        skills.forEach(function(el) { 
            let skillsExpand = new gsap.timeline({paused: true})
            const span = el.querySelector('span');

            // socialExpand.to(el, { width: 200, ease:"power4.inOut", })
            skillsExpand.to(span, {  scale: 1, ease:"power4.inOut"})

            el.addEventListener('mouseenter', function() {
                skillsExpand.play()
            });
            
            el.addEventListener('mouseleave', function() {
                skillsExpand.reverse()
            });

        })
    
      return () => {
        
      }
    }, [])
    

    return (
        <div className="container min-h-screen flex flex-col items-center justify-center" id="skills">
            <h2 className="text-primary text-center font-bold text-2xl md:text-4xl mb-8">Skills</h2>
            <h2 className="text-center uppercase font-bold opacity-80 tracking-widest">Frontend DEVELOPMENT</h2>
            <ul className="skillset flex flex-wrap items-center justify-center my-12">
                {SKILLS.map((el) => (
                    <li className="text-center relative px-4 mb-4 md:mb-0">
                        <Image 
                            src={el.img}
                            width={65}
                            height={65}
                            className="mb-4 mx-auto rounded-full"
                            alt="Picture of the author"
                            />
                        <span className="hidden md:block absolute w-max translate-x-[-50%] left-[50%] bg-primary scale-0 text-black text-xs font-semibold rounded px-3 py-[6px]">{el.title}</span>
                    </li>
                ))}
            </ul>
            <h2 className="text-center uppercase font-bold opacity-80 tracking-widest">Other Skills</h2>
            <ul className="skillset flex flex-wrap items-center justify-center mt-12">
                {OTHER_SKILLS.map((el) => (
                    <li className="text-center relative px-4 mb-4 md:mb-0">
                        <Image 
                            src={el.img}
                            width={65}
                            height={65}
                            className="mb-4 mx-auto rounded-full"
                            alt="Picture of the author"
                            />
                        <span className="hidden md:block absolute w-max translate-x-[-50%] left-[50%] bg-primary scale-0 text-black text-xs font-semibold rounded px-3 py-[6px]">{el.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )

}