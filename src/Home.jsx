import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Header from './components/Header';
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom"

gsap.registerPlugin(useGSAP);

export default function Home() {
  const circleRef = useRef(null);
  const un = useRef(null);

  useGSAP(() => {
  const circle = circleRef.current;
  if (!circle) return; // ✅ prevent crashing if not ready

  const radius = 10; 
  let angle = 0;

  gsap.ticker.add(() => {
    angle += 2;
    const radians = (angle * Math.PI) / 180;

    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    gsap.set(circle, { x, y });
  });

  // ✅ Typewriter
  const phrases = ["Hey there!", "Let's talk!", "Ask me anything..."];
  const textarea = document.querySelector("textarea");
  if (!textarea) return;

  let current = 0;
  let char = 0;

  const type = () => {
    textarea.placeholder = phrases[current].substring(0, char);
    if (char < phrases[current].length) {
      char++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        char = 0;
        current = (current + 1) % phrases.length;
        setTimeout(type, 500);
      }, 1500);
    }
  };

  type();
}, { dependencies: [circleRef] });


  const inputRef = useRef(null);
  const words = ["Hey There!", "Let's talk!", "Ask me anything..."];

  const typingSpeed = 0.1;
  const wordsDelay = 1;


  return (
    <div className="bg-violet-royal overflow-x-hidden relative">
  
    <div
        ref={circleRef}
        className="h-40 w-40 sm:h-60 sm:w-60 rounded-full bg-peach blur-md shadow-lg absolute -top-5 -right-5 z-0"
    />
      <div className="relative z-10 text-white h-full">
      <Header />
      <div className="p-4">
          <h1 className='text-3xl sm:text-5xl font-bold w-full sm:w-2/3'>A Free AI Chat Companion That Understands You.</h1>
          <div className="flex justify-center items-center h-64 sm:px-10">
              <div className="flex flex-col gap-2 p-2 overflow-hidden bg-gray-100 w-full max-w-[50rem] text-gray-800 rounded duration-100 hover:shadow-2xl">
                  <textarea className='resize-none outline-none w-full p-2 bg-gray-100 border-b'></textarea>
                  <Link to="/signup" className='flex items-center justify-center self-end h-full' >
                      <LuSend className="text-4xl p-2 text-white bg-peach rounded-full"/>
                  </Link>
              </div>
          </div>
      </div>
    </div>
</div>

  );
}
