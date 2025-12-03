import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Hero = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 py-10">
        <img src="/product-one.png" alt="Halo-mama pillow" className="product-one" />
        <div className="w-full text-xl lg:w-1/2 ms-5 ml-30 text-justify lg:text-left leading-relaxed text-center lg:text-left">
       <h1 className="mx-20 my-10 text-3xl titan-one-regular leading-loose ">
        Welcome to our platform — a space created by a mom-to-be, for moms-to-be.
           During her own pregnancy, our founder felt the deep need for a pillow that truly
           supports a woman’s changing body, and that’s how this revolutionary pregnancy
           pillow was born. Doctor-verified for comfort and safety, our pillow features a
           unique belly-space design and comes in several sizes to adapt perfectly to every
           stage of pregnancy. We’re here to help you rest better, feel supported, and enjoy
           your journey with greater ease.
       </h1>
            </div>
        </div>

)
}
export default Hero
