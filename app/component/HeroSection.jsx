"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D05353] to-[#E58F65]">
                        Hello, I&apos;m {" "}
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Abiyyu',
                            1000,
                            'Front-End Dev',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, ipsa.
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#D05353] via-[#E58F65] to-[#F9E784] hover:bg-slate-200 text-white'>
                        Hire Me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#D05353] via-[#E58F65] to-[#F9E784] hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#191919] hover:bg-yellow-950 rounded-full px-5 py-2'>
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#202020] w-[250px] h-[250px] relative lg:w-[380px] lg:h-[380px]">
                    <Image
                        src="/images/icon-image.png"
                        alt="Hero Image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:scale-125"
                        width={300}
                        height={300}
                    />
                    {/* image masih low quality */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection