"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectData = [
    {
        id: 1,
        title: "JAMBO",
        description: "Collage-Project Website for indie game developer",
        image: "/Images/Project/1.jpg",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/Blahaj-Lover/Jambo_Front_End",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Polyminal",
        description: "Collage-Project Website for shapes using React js & Three js",
        image: "/Images/Project/2.jpg",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/SyafiqSyech/Polyminal",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Game Booster",
        description: "Collage-Project Website for gamers using laravel & bootstrap",
        image: "/Images/Project/3.png",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/firshada/GameBooster",
        previewUrl: "/"
    },
    // {
    //     id: 4,
    //     title: "Nama Project",
    //     description: "Collage-Project Website for indie game developer",
    //     image: "/Images/Project/1.jpg",
    //     tags: ["All", "UI/UX"],
    //     gitUrl: "/",
    //     previewUrl: "/"
    // },
];

const Project = () => {
    const [tag, setTag] = useState("All");
    const ref =  useRef(null);
    const isInView = useInView(ref, { once: true})

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tags.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }

    return (
    <section id='project'>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="UI/UX" 
                isSelected={tag === "UI/UX"}
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-2 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Project