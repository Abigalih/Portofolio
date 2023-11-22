"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title: "JAMBO",
        description: "Collage-Project Website for indie game developer",
        image: "/images/Project/1.jpg",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/Blahaj-Lover/Jambo_Front_End",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Polyminal",
        description: "[ON GOING] Collage-Project Website for shapes using three js",
        image: "/images/Project/2.jpg",
        tags: ["All", "Web"],
        gitUrl: "https://github.com/SyafiqSyech/Polyminal",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Nama Project",
        description: "Collage-Project Website for indie game developer",
        image: "/images/Project/1.jpg",
        tags: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Nama Project",
        description: "Collage-Project Website for indie game developer",
        image: "/images/Project/1.jpg",
        tags: ["All", "UI/UX"],
        gitUrl: "/",
        previewUrl: "/"
    },
];

const Project = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectData.filter((project) =>
        project.tags.includes(tag)
    )

    return (
    <>
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
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
            {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </>
  )
}

export default Project