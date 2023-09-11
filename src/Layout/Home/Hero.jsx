import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import Image from 'next/image'
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Player } from '@lottiefiles/react-lottie-player';
import likeCrazyLottie from '../../lottie/like-cray.json'
import authorPic from '../../images/human.jpg';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(TextPlugin);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);

  const whatIdo = ['I Am Passionate Freelancer', 'A pragmatic Front End Developer', 'I do thing for web'];

  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('.h_title span span');
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: 'cubic-text',
        },
        delay
      );
    });



    tl.add(() => likeCrazyLottieRef?.current?.play(), 0.8 ).to(
      heroInfiniteRef?.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: 'power1.out',
      },
      1.2
    );

    gsap.to('#whatIdo .cursor', {opacity:0, ease: "power2.inOut", repeat:-1, duration: 0.75})

    tl.to('.social-links', {opacity: 1, ease: "power2.inOut"});

    let tlMaster = gsap.timeline({ repeat: -1, delay: 2 })
    whatIdo.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 4})
      tlText.to("#whatIdo .texttt", { duration: 2, text: word})
      tlMaster.add(tlText)
    })


    // let socialExpand = gsap.timeline({paused: true}) // or tween
    // .to('.social-btn', { width: 200, ease:"power4.inOut", })
    // .to('.social-btn span', { width: 'auto', opacity: 1, xPercent:5, ease:"power4.inOut"})


    const social_btns = document.querySelectorAll('.social-btn');

    social_btns.forEach(function(el) { 

    let socialExpand = new gsap.timeline({paused: true})
    const span = el.querySelector('span');

    socialExpand.to(el, { width: 200, ease:"power4.inOut", })
    socialExpand.to(span, { width: 'auto', opacity: 1, xPercent:5, ease:"power4.inOut"})

    el.addEventListener('mouseenter', function() {
      socialExpand.play()
    });
    
    el.addEventListener('mouseleave', function() {
      socialExpand.reverse()
    });
  })

    return () => {};
  }, []);

  return (
    <div className="flex items-center min-h-screen pt-[120px] pb-[90px] lg:py-[180px]">
      <div className="container h_container px-4 md:px0 flex items-center flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="h_title relative w-full font-bold text-2xl leading-[90%] lg:text-5xl text-primary mb-4 md:mb-8">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
                Hello,
              </span>
            </span>
          </h1>
          <h1 className="h_title  relative w-full font-bold text-5xl leading-[100%] lg:text-[4vw] mb-4">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
                I Am Johnny.
              </span>
            </span>
          </h1>
          
          <h1 className="h_title relative w-full text-xl font-semibold leading-[90%] lg:text-3xl mb-4">
            <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
              <span id="whatIdo" className="inline-block text-[#aaaaaa] font-jetbrains translate-y-full pb-1.5 pt-6 will-change-transform ">
                <span className="box"></span>
                <span className="texttt"></span>
                <span className="cursor text-white">|</span>
              </span>
            </span>
          </h1>
          <div>
            <div className='social-links flex opacity-100'>
                <div className='social-btn link overflow-hidden relative flex items-center justify-center px-3 h-12 w-12 rounded-md shadow-md bg-white m-2 ml-0' id="twitter">
                  <svg className="fill-[#1da1f2]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  <span className="w-0 left-[40px] opacity-0 text-black font-bold">@SquiresChance</span>
                </div>
              
                <div className='social-btn link overflow-hidden relative flex items-center justify-center px-3 h-12 w-12 rounded-md shadow-md bg-white m-2' id="linkedin">
                  <svg className="fill-[#0e76a8]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                  <span className="w-0 left-[40px] opacity-0 text-black font-bold whitespace-nowrap">in/hasnain-raza</span>
                </div>

                <div className='social-btn link overflow-hidden relative flex items-center justify-center px-3 h-12 w-12 rounded-md shadow-md bg-white m-2' id="github">
                  <svg className="fill-[#333]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="w-0 left-[40px] opacity-0 text-black font-bold">ChanceSQ</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="text-center">
              <Image src={authorPic}
                className="rounded-full mx-auto"
                width={500}
                height={500}
                alt="Picture of the author"
                />
          </div>
        </div>
      </div>
    </div>
  );
};