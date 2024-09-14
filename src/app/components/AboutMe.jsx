"use client"; // Ensure this directive is included for client-side rendering
import React, { forwardRef } from 'react';
import { FaBriefcase, FaArrowRight } from "react-icons/fa"; // Import icons from react-icons
import { PiFlagBannerFoldFill } from "react-icons/pi";
import { IoMailUnread } from "react-icons/io5";
import Button from "./Button";

 const AboutMe = forwardRef((props, ref) =>{
  return (
    <section ref={ref} id="about" className="mt-16">
<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="grid gap-10 lg:grid-cols-2 mb-4">
    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-zinc-100">
        <FaBriefcase className="text-black w-7 h-7" />
      </div>
      <div className="max-w-xl mb-6">
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-black">
          About Me
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
          Building sleek, responsive{' '}
          <span className="inline-block text-black">web experiences</span>
          <br className="hidden md:block" />
          that captivate and perform.
        </h2>
        <p className="text-base text-zinc-700 md:text-lg">
          As a front-end developer, I bring designs to life with clean, optimized code and a deep passion for creating seamless user experiences. From responsive layouts to dynamic interactions, I ensure every detail aligns with modern web standards.
        </p>
      </div>
      <div>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
        >
          Learn more about me
          <FaArrowRight className="inline-block w-3 ml-2" />
        </a>
      </div>
    </div>
    <div className="flex items-center justify-center -mx-4 lg:pl-8">
      <div className="flex flex-col items-end px-3">
        <img
          className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
          src="https://images.pexels.com/photos/5988909/pexels-photo-5988909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project Screenshot"
        />
        <img
          className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
          src="https://images.pexels.com/photos/4551029/pexels-photo-4551029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="UI Design"
        />
      </div>
      <div className="px-3">
        <img
          className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
          src="https://images.pexels.com/photos/8505252/pexels-photo-8505252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Mobile View"
        />
      </div>
    </div>
  </div>

  <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
    <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-black">
          Expertise
        </p>
        <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl text-black">
          Crafting scalable, interactive web applications.
        </h5>
        <p className="mb-6 text-base text-zinc-700 md:text-lg sm:mb-8">
          With experience in React, JavaScript, and CSS frameworks, I specialize in developing high-performance websites that merge functionality and aesthetics. My focus is on delivering engaging, fast-loading, and mobile-friendly sites that drive results.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button type="text-icon" icon={<IoMailUnread />}>Get in Touch</Button>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
        >
          View Projects
        </a>
      </div>
    </div>
    <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
      <div>
        <p className="mb-2 text-xs font-semibold tracking-wide uppercase text-black">
          Skills
        </p>
        <h5 className="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl text-black">
          Bringing user-centered design to life.
        </h5>
        <p className="mb-6 text-base text-zinc-700 md:text-lg sm:mb-8">
          My core skill set includes HTML, CSS, JavaScript, React, and responsive design, paired with a love for creating user-friendly interfaces. From wireframes to fully deployed solutions, I turn ideas into engaging digital experiences.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button type="text-icon" icon={<PiFlagBannerFoldFill />}>Get Started</Button>
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
        >
          Learn more
        </a>
      </div>
    </div>
  </div>
</div>
</section>

  );
});
export { AboutMe };
