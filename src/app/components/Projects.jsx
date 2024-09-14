import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';
import React, { forwardRef } from 'react';
 const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="mt-16">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <a
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-zinc-800 sm:text-4xl"
          >
            Showcasing Innovative Solutions
          </a>
        </div>
        <p className="text-base text-zinc-700 md:text-lg">
          Dive into our collection of projects that highlight cutting-edge solutions and expert craftsmanship in web development. From dynamic interfaces to complex backend systems, explore the ingenuity that drives our work.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Project">
            <img
              src="https://i.pinimg.com/564x/92/45/26/924526afda574e47d2b8be14180976f8.jpg"
              className="object-cover w-full h-64 rounded"
              alt="Project screenshot"
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-zinc-600 uppercase">
              13 Jul 2020
            </p>
            <a
              href="/"
              aria-label="Project"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-zinc-800"
            >
              <p className="text-2xl font-bold leading-5">Innovative Web Design</p>
            </a>
            <p className="mb-4 text-zinc-700">
              A showcase of our latest web design project, featuring responsive layouts and intuitive user interfaces crafted with the latest technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-repo"
                aria-label="GitHub Repository"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <FaGithub className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Repo</p>
              </a>
              <a
                href="/"
                aria-label="External Link"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <GoLinkExternal className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Project Demo</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Project">
            <img
              src="https://i.pinimg.com/564x/29/ef/7c/29ef7c28e6e93dd4b89f432e3ece95e6.jpg"
              className="object-cover w-full h-64 rounded"
              alt="Project screenshot"
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-zinc-600 uppercase">
              4 Nov 2020
            </p>
            <a
              href="/"
              aria-label="Project"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-zinc-800"
            >
              <p className="text-2xl font-bold leading-5">Advanced Backend Systems</p>
            </a>
            <p className="mb-4 text-zinc-700">
              Explore our advanced backend systems designed for scalability and performance. This project demonstrates our ability to handle complex data interactions and server-side logic.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-repo"
                aria-label="GitHub Repository"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <FaGithub className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Repo</p>
              </a>
              <a
                href="/"
                aria-label="External Link"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <GoLinkExternal className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Project Demo</p>
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
          <a href="/" aria-label="Project">
            <img
              src="https://i.pinimg.com/564x/34/97/f6/3497f6f59671c87b239ef241a55eea35.jpg"
              className="object-cover w-full h-64 rounded"
              alt="Project screenshot"
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-zinc-600 uppercase">
              28 Dec 2020
            </p>
            <a
              href="/"
              aria-label="Project"
              className="inline-block mb-3 text-black transition-colors duration-200 hover:text-zinc-800"
            >
              <p className="text-2xl font-bold leading-5">Responsive Mobile Solutions</p>
            </a>
            <p className="mb-4 text-zinc-700">
              Check out our mobile solutions that provide seamless user experiences across different devices. This project highlights our commitment to modern design and functionality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/your-repo"
                aria-label="GitHub Repository"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <FaGithub className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Repo</p>
              </a>
              <a
                href="/"
                aria-label="External Link"
                className="flex items-center text-zinc-800 transition-colors duration-200 hover:text-zinc-800 group"
              >
                <div className="mr-2">
                  <GoLinkExternal className="w-5 h-5 text-zinc-600 transition-colors duration-200 group-hover:text-zinc-800" />
                </div>
                <p className="font-semibold">Project Demo</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:text-center">
        <a
          href="/"
          aria-label="Learn more"
          className="inline-flex items-center font-semibold transition-colors duration-200 text-black hover:text-zinc-800"
        >
          Explore More Projects
        </a>
      </div>
    </div>
    </section>
  );
});
export { Projects };