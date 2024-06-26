import React, { useEffect, useRef } from 'react';
import { FlowerLogo } from '../../components/Icons';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { Player } from '@lottiefiles/react-lottie-player';
import likeCrazyLottie from '../../lottie/like-cray.json';

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

    tl.add(() => likeCrazyLottieRef?.current?.play(), 0.8).to(
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
    <div className="flex min-h-screen items-center pb-[90px] pt-[120px] lg:py-[180px]">
      <div className="container flex flex-col items-center h_container">
        <h1 className="h_title relative mb-8 w-full text-[15vw] font-bold leading-[90%] text-primary lg:text-6xl">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block  translate-y-full pb-1.5 pt-6 will-change-transform ">
              Hello,
            </span>
          </span>
        </h1>
        <h1 className="h_title  relative mb-4 w-full text-[15vw] font-bold leading-[100%] lg:text-[5vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block  translate-y-full pb-1.5 pt-6 will-change-transform">
              I Am Johnny.
            </span>
          </span>
          <div
            ref={heroInfiniteRef}
            className="font_aeonik absolute bottom-[-38.2vw] left-[30%] -mr-10 ml-10 h-8 w-40 overflow-hidden  rounded-full border border-white text-xs font-normal uppercase opacity-0 md:bottom-[-25vw]  md:left-[35%]  lg:relative lg:bottom-3 lg:left-8 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl  lg:leading-10 "
          >
            <div className="flex items-center h-full cursor-pointer group whitespace-nowrap">
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
              <span className=" group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
            </div>
          </div>
        </h1>

        <h1 className="h_title relative mb-4 w-full text-[15vw] font-semibold leading-[90%] text-green lg:text-3xl">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className=" inline-block translate-y-full pb-1.5 pt-6 font-jetbrains will-change-transform ">
              I build things for web
            </span>
          </span>
        </h1>
        <div className="scale-80 rotate-[4.24deg] lg:-translate-x-8 lg:-translate-y-2 lg:scale-105">
          <Player
            ref={likeCrazyLottieRef}
            src={likeCrazyLottie}
            keepLastFrame={true}
            loop={false}
          />
        </div>
      </div>
    </div>
  );
};
