"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const SkillData = [
    {
      name: "Html 5",
      Image: "/Images/Skill/html.png",
      width: 80,
      height: 80,
    },
    {
      name: "Css",
      Image: "/Images/Skill/css.png",
      width: 80,
      height: 80,
    },
    {
      name: "C++",
      Image: "/Images/Skill/c++.png",
      width: 65,
      height: 65,
    },
    {
      name: "JavaScript",
      Image: "/Images/Skill/js.png",
      width: 65,
      height: 65,
    },
    {
      name: "Tailwind Css",
      Image: "/Images/Skill/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      name: "React",
      Image: "/Images/Skill/react.png",
      width: 80,
      height: 80,
    },
    {
      name: "Next js 13",
      Image: "/Images/Skill/next.png",
      width: 80,
      height: 80,
    },
    {
      name: "My Sql",
      Image: "/Images/Skill/mysql.png",
      width: 80,
      height: 80,
    },
    {
      name: "php",
      Image: "/Images/Skill/php.webp",
      width: 80,
      height: 80,
    },
    {
      name: "Laravel",
      Image: "/Images/Skill/laravel.png",
      width: 65,
      height: 65,
    },
    {
      name: "Bootstrap",
      Image: "/Images/Skill/bootstrap.png",
      width: 100,
      height: 100,
    },
    {
      name: "Git",
      Image: "/Images/Skill/git.png",
      width: 80,
      height: 80,
    },
    {
      name: "Figma",
      Image: "/Images/Skill/figma.png",
      width: 80,
      height: 80,
    },
  ]

const SkillSection = () => {
  return (
    <div
        className="flex items-center justify-center bg-cover bg-center py-4 md:py-8"
    >
        <div className="flex flex-col gap-10 max-w-[80%] text-center items-center">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-semibold text-white text-4xl lg:text-6xl">
                Skills{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D05353] to-[#E58F65]">
                        {" "}
                        &{" "}
                    </span>
                Technologies
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
                Using the latest tech this world has to offer
                </p>
            </div>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[100%]"
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                        className="flex items-center"
                        src={skill.Image}
                        alt={skill.name}
                        width={skill.width}
                        height={skill.height}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                slidesPerView={5}
                loop={true}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[100%]"
            >
                {SkillData.map((skill, index) => (
                <SwiperSlide key={index}>
                    <Image
                    src={skill.Image}
                    alt={skill.name}
                    width={skill.width}
                    height={skill.height}
                    />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default SkillSection