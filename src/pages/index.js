import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Header } from '@/components';
import { HomeHero, TextAppear, HomeHorizontalSection } from '@/Layout';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';


// gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  useEffect(() => {
    
    const sectionColor = document.querySelectorAll('.color-section[data-bgcolor]');
    sectionColor.forEach((colorSection, i) => {
      
      const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
      const prevTextColor = i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

        ScrollTrigger.create({
          trigger: colorSection,
          start: 'top 50%',
          onEnter: () =>
            gsap.to('body', {
              backgroundColor: colorSection.dataset.bgcolor,
              color: colorSection.dataset.textcolor,
              overwrite: 'auto',
            }),
          onLeaveBack: () =>
            gsap.to('body', {
              backgroundColor: prevBgColor,
              color: prevTextColor,
              overwrite: 'auto',
            }),
        });
        
    })
    // const sectionColor = document.querySelectorAll('.color-section[data-bgcolor]');
    // sectionColor.forEach((colorSection, i) => {
    //   const prevBgColor = i === 0 ? '' : sectionColor[i - 1].dataset.bgcolor;
    //   const prevTextColor =
    //     i === 0 ? '' : sectionColor[i - 1].dataset.textcolor;

    //   ScrollTrigger.create({
    //     trigger: colorSection,
    //     scroller: '.main',
    //     start: 'top 50%',
    //     onEnter: () =>
    //       gsap.to('.main', {
    //         backgroundColor: colorSection.dataset.bgcolor,
    //         color: colorSection.dataset.textcolor,
    //         overwrite: 'auto',
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to('.main', {
    //         backgroundColor: prevBgColor,
    //         color: prevTextColor,
    //         overwrite: 'auto',
    //       }),
    //   });
    // });
  
    return () => {
      
    }
  }, [])
  


  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Lottie Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-auto ">
        <Header />
        <div>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <HomeHero />
          </section>
          <section
            className="color-section"
            data-bgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
            <TextAppear />
          </section>
          
          <section
            className="color-section"
            data-bgcolor="#f5f4f5"
            data-textcolor="#120e16"
          >
            <HomeHorizontalSection />
          </section>
          <section
            className="color-section text-3xl min-h-screen flex items-center justify-center"
            data-bgcolor="#120e16"
            data-textcolor="#f5f4f5"
          >
        <footer className="flex items-center justify-center text-2xl my-96 ">
          <a href="https://unsplash.com/">
            All Images are from <span className="text-green">Unsplash</span>
          </a>
        </footer>
          </section>
        </div>
      </main>
    </div>
  );
}
