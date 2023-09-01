import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { Player } from '@lottiefiles/react-lottie-player';
import likeCrazyLottie from '../../lottie/like-cray.json'

gsap.registerPlugin(CustomEase);
CustomEase.create('cubic-text', '0.25, 1, 0.5, 1');

export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);
  const likeCrazyLottieRef = useRef(null);


  useEffect(() => {
    const titles = document.querySelectorAll('.h_title');
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll('span span');
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

    return () => {};
  }, []);

  return (
    <div className="flex items-center min-h-screen pt-[120px] pb-[90px] lg:py-[180px]">
      <div className="container h_container flex flex-col items-center">
        <h1 className="h_title relative w-full font-bold text-[15vw] leading-[90%] lg:text-6xl text-primary mb-8">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              Hello,
            </span>
          </span>
        </h1>
        <h1 className="h_title  relative w-full font-bold text-[15vw] leading-[100%] lg:text-[5vw] mb-4">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              I Am Johnny.
            </span>
          </span>
          {/* <div
            ref={heroInfiniteRef}
            className="font_aeonik absolute bottom-[-38.2vw] left-[30%] md:bottom-[-25vw] md:left-[35%] ml-10 -mr-10 h-8  w-40 overflow-hidden rounded-full border border-white text-xs font-normal uppercase  opacity-0  lg:relative lg:left-8 lg:bottom-3 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl  lg:leading-10 "
          >
            <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
            </div>
          </div> */}
        </h1>
        
        <h1 className="h_title relative w-full text-[15vw] font-semibold leading-[90%] lg:text-3xl text-green mb-4">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block font-jetbrains translate-y-full pb-1.5 pt-6 will-change-transform ">
              I build things for web
            </span>
          </span>
        </h1>
        {/* <div className="scale-80 rotate-[4.24deg] lg:-translate-y-2 lg:-translate-x-8 lg:scale-105">
            <Player ref={likeCrazyLottieRef} src={likeCrazyLottie} keepLastFrame={true} loop={false} />
        </div> */}
      </div>
    </div>
  );
};