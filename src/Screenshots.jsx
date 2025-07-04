import React, { useRef } from 'react';
import scst2 from './assets/screenshot-2.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Screenshots() {
    const hRef = useRef();
    const imgRef = useRef();

    useGSAP(() => {
        gsap.from(hRef.current, {
            scrollTrigger: {
                start: "top 20%",
                end: "bottom 20%",
            },
            x: -100,
            opacity: 0,
            duration: 1
        })
    }, [])

  return (
    <div className='flex flex-col sm:flex-row justify-between p-5 bg-purple-100'>
        <h2 ref={hRef} className='font-bold text-5xl py-2'>Meet <span className='bg-violet-royal bg-clip-text text-transparent'>Sera</span>, Your Helpful assistant</h2>
        <img ref={imgRef} src={scst2} alt="screenshot 1" className='h-80'/>
    </div>
  )
}

export default Screenshots