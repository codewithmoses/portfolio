"use client"; // Required for handling state in Next.js 14 components

import { useState } from "react";
import Button from "./Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloudDownload } from "react-icons/io5";
import { FaTimes } from 'react-icons/fa'; // Importing icons
import Link from "./Link";
import Image from "next/image";
import DownloadButton from "./DownloadButton";

export const Header = ({ heroRef, aboutRef, featuresRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/#hero"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Image
              src="/logo%201.png" // Make sure the file path is correct and rename if needed.
              alt="Company Logo"
              width={32}
              height={32}
              className="w-8 text-deep-purple-accent-400"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-zinc-800">
              Personal
            </span>
          </a>

          {/* Links section */}
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                text="Home"
                ariaLabel="Home"
                title="Home"
                onClick={() => handleScrollTo(heroRef)}
                active
              />
            </li>
            <li>
              <Link
                text="About Me"
                ariaLabel="About Me"
                title="About Me"
                onClick={() => handleScrollTo(aboutRef)}
              />
            </li>
            <li>
              <Link
                text="Skills"
                ariaLabel="Skills"
                title="Skills"
                onClick={() => handleScrollTo(featuresRef)}
              />
            </li>
            <li>
              <Link
                text="Projects"
                ariaLabel="Projects"
                title="Projects"
                onClick={() => handleScrollTo(projectsRef)}
              />
            </li>
            <li>
              <Link
                text="Contact Me"
                ariaLabel="Contact Me"
                title="Contact Me"
                onClick={() => handleScrollTo(contactRef)}
              />
            </li>
            <li>
            <DownloadButton/>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBarsStaggered className="w-5 text-zinc-600 text-xl" /> {/* Using FaBars for the mobile menu icon */}
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <a
                      href="/#hero"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <Image
                        src="/logo%201.png" // Again, check if the file path is correct.
                        alt="Company Logo"
                        width={32}
                        height={32}
                        className="w-8 text-deep-purple-accent-400"
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-zinc-800 uppercase">
                        Personal
                      </span>
                    </a>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-zinc-200 focus:bg-zinc-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaTimes className="w-5 text-zinc-600" /> {/* Using FaTimes for the close menu icon */}
                    </button>
                  </div>

                  {/* Mobile Menu Links */}
                  <nav>
                    <ul className="space-y-4 ">
                      <li>
                        <Link
                          text="Home"
                          ariaLabel="Home"
                          title="Home"
                          onClick={() => handleScrollTo(heroRef)}
                          active
                        />
                      </li>
                      <li>
                        <Link
                          text="About Me"
                          ariaLabel="About Me"
                          title="About Me"
                          onClick={() => handleScrollTo(aboutRef)}
                        />
                      </li>
                      <li>
                        <Link
                          text="Skills"
                          ariaLabel="Skills"
                          title="Skills"
                          onClick={() => handleScrollTo(featuresRef)}
                        />
                      </li>
                      <li>
                        <Link
                          text="Projects"
                          ariaLabel="Projects"
                          title="Projects"
                          onClick={() => handleScrollTo(projectsRef)}
                        />
                      </li>
                      <li>
                        <Link
                          text="Contact Me"
                          ariaLabel="Contact Me"
                          title="Contact Me"
                          onClick={() => handleScrollTo(contactRef)}
                        />
                      </li>
                      <li>
                        <Button type="text-icon" icon={<IoCloudDownload />}>Resume</Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
