import { FaGithub, FaTwitter, FaLocationDot} from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRedditAlien, FaCode } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { MdPhone } from 'react-icons/md';
import Button from "./Button";
import Image from "next/image";

export const Footer = () => {
  return (
<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
        <a
          href="/"
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
            <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                    Combining creativity with cutting-edge technology, we turn your vision into reality. With a focus on exceptional web design and development, our solutions are tailored to your unique needs.
                </p>
                <p className="mt-4 text-sm text-gray-800">
                    From responsive designs to scalable applications, our expertise ensures your digital presence stands out in the crowded online space.
                </p>
            </div>
        </div>
        <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
                Contact Info
            </p>
            <div className="flex items-center">
                <MdPhone className="mr-1 text-lg text-gray-800" />
                <a
                    href="tel:850-123-5021"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    850-123-5021
                </a>
            </div>
            <div className="flex items-center">
                <IoIosMailUnread className="mr-1 text-lg text-gray-800" />
                <a
                    href="mailto:info@yourportfolio.com"
                    aria-label="Our email"
                    title="Our email"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    info@yourportfolio.com
                </a>
            </div>
            <div className="flex items-center">
                <FaLocationDot className="mr-1 text-gray-800" />
                <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    312 Lovely Street, NY
                </a>
            </div>
        </div>
        <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
                Follow Me
            </span>
            <div className="flex items-center mt-1 space-x-3">
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-deep-purple-accent-400">
                    <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://discord.com/invite/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-800 hover:text-deep-purple-accent-400">
                    <IoLogoDiscord className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-800 hover:text-deep-purple-accent-400">
                    <FaTwitter className="w-6 h-6" />
                </a>
                <a href="https://reddit.com/user/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="text-gray-800 hover:text-deep-purple-accent-400">
                    <FaRedditAlien className="w-6 h-6" />
                </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
                Connecting through various platforms, I share insights and updates on web development trends, tutorials, and my latest projects.
            </p>
        </div>
    </div>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a
                    href="/faq"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                    F.A.Q
                </a>
            </li>
            <li>
                <a
                    href="/privacy-policy"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                    Privacy Policy
                </a>
            </li>
            <li>
                <a
                    href="/terms-and-conditions"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                    Terms & Conditions
                </a>
            </li>
        </ul>
    </div>
</div>

  );
};


