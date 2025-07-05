import React, { useRef } from 'react';
import scst1 from './assets/screenshot1.png';
import scst2 from './assets/screenshot2.png';
import scst3 from './assets/screenshot3.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Screenshots() {
  const sectionsRef = useRef([]);

  useGSAP(() => {
    sectionsRef.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, x: direction },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );
    });
  }, []);

  const imageClass = "w-full sm:w-[45%] max-w-md object-contain";

  return (
    <div className="flex flex-col bg-pink-100 p-5 overflow-hidden gap-10">

      {/* Section 1: Image Right */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex flex-col sm:flex-row items-center gap-5"
      >
        <h2 className="font-bold text-4xl sm:text-5xl py-2 sm:w-1/2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet to-royal">
            Unleash
          </span>{' '}
          Original Ideas in Seconds
        </h2>
        <img src={scst1} alt="screenshot 1" className={imageClass} />
      </div>

      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="flex flex-col sm:flex-row-reverse items-center gap-5"
      >
        <h2 className="font-bold text-4xl sm:text-5xl py-2 sm:w-1/2">
          Ask{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet to-royal">
            Anything
          </span>
          , Get Instant Answers
        </h2>
        <img src={scst2} alt="screenshot 2" className={imageClass} />
      </div>

      {/* Section 3: Image Right */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="flex flex-col sm:flex-row items-center gap-5"
      >
        <h2 className="font-bold text-4xl sm:text-5xl py-2 sm:w-1/2">
          Study Smarter With{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet to-royal">
            Clear
          </span>{' '}
          Answers
        </h2>
        <img src={scst3} alt="screenshot 3" className={imageClass} />
      </div>
    </div>
  );
}

export default Screenshots;
