import React, { useEffect } from 'react';
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

    return () => {};
  }, []);

  return (
    <div className="bg-cream overflow-auto overflow-x-hidden">
      <section className="horizontal-section h-fit">
        <div className="wrapper overflow flex items-center justify-center gap-24 font-medium">
          <div className="w-[30vw] rounded-lg bg-white p-5 text-slate-950">
            <h4 className="font-semibold">katiedickins226</h4>
            <small>Fiverr</small>
            <p className="mt-2">
              "I recently had a fantastic experience with a Hasnain R who
              customized my Zendesk platform. The service was quick, efficient,
              and perfectly tailored to my needs. I highly recommend this seller
              for any Zendesk customization projects!"
            </p>
          </div>
          <div className="w-[30vw] rounded-lg bg-white p-5 text-slate-950">
            <h4 className="font-semibold">Arnaud Lesur</h4>
            <small>Upwork</small>
            <p className="mt-2">
              "Hasnain delivered everything as discussed and on time, 100%
              recommended"
            </p>
          </div>
          <div className="text-5xl text-white">Reviews</div>
          <div className="w-[30vw] rounded-lg bg-white p-5 text-slate-950">
            <h4 className="font-semibold">Jalle Van Goor Den Oosterlingh</h4>
            <small>Upwork</small>
            <p className="mt-2">
              "Working with Hasnain was a great experience. He helped us out
              really quickly and professionally, especially pleasant to
              communicate with, thank you Hasnain!"
            </p>
          </div>
        </div>
      </section>
      <section className="horizontal-section ">
        <div className="wrapper overflow flex whitespace-nowrap text-[16vh] font-medium">
          because life is a beautiful thing
        </div>
      </section>
      <section className="horizontal-section h-fit">
        <div className="wrapper overflow flex whitespace-nowrap text-[16vh] font-medium">
          and there's so much to smile about.
        </div>
      </section>
    </div>
  );
};
