"use client"
import React, { useState } from 'react'
import GitHubIcon from "../../public/Images/github-icon.svg"
import LinkedinIcon from "../../public/Images/linkedin-icon.svg"
import BehanceIcon from "../../public/Images/behance-icon.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "api/send";

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
            "Content-Type": "application/json",
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }
  
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    }

  return (
    <section id='contact' className='grid md:grid-cols-2 md:my-12 py-24 gap-4 relative'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#813333] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute md:top-2/3 top-1/2 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        {/* aslinya top-3/4 */}
        <div >
            <h5 className='text-xl font-bold text-white my-2'>
                Let&apos;s Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                My excellent communication and collaboration abilities make me a valuable 
                addition to any team. If you&apos;re interested in a driven and adaptable 
                developer, feel free to reach out.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href={"https://github.com/Abigalih"}>
                    <Image src={GitHubIcon} alt="Github Icon"/>
                </Link>
                <Link href={"https://www.linkedin.com/in/abiyyu-galih-ghifari-1736b2224/"}>
                    <Image src={LinkedinIcon} alt="Linkedin Icon"/>
                </Link>
                <Link href={"https://www.behance.net/abiyyugalih"}>
                    <Image src={BehanceIcon} alt="Behance Icon"/>
                </Link>
            </div>
        </div>

        {/* <div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <label 
                        htmlFor='email' 
                        className='text-white block mb-2 text-sm font-medium'>
                        Your Email
                    </label>
                    <input
                        name='email'
                        type='email' 
                        id='email' 
                        required
                        className='bg-[#1E1918] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='email@gmail.com'
                    />
                </div>
                <div className='mb-6'>
                    <label 
                        htmlFor='subject' 
                        className='text-white block mb-2 text-sm font-medium'>
                        Subject
                    </label>
                    <input
                        name='subject'
                        type='text' 
                        id='subject' 
                        required
                        className='bg-[#1E1918] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder='Just saying hi!'
                    />
                </div>

                <div className='mb-6'>
                    <label 
                        htmlFor="message"
                        className='text-white block text-sm mb-2 font-medium'
                    >
                        Message
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className='bg-[#1E1918] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                        placeholder="Let's talk about..."
                    />
                </div>
                <button
                    type='submit'
                    className='bg-[#D05353] hover:bg-[#bA4A4A] text-white font-medium py-2.5 px-5 rounded-lg w-full'
                >
                    Send Message
                </button>
                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div> */}
    </section>
  )
}

export default EmailSection