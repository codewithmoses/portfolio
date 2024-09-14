"use client"; // Required for handling state in Next.js 14 components

import { IoCloudDownload } from "react-icons/io5";
import Link from "next/link"; // Use Link component for navigation

const DownloadButton = () => {
  return (
    <a
      href="/blank.pdf" // Path to your PDF file in the public folder
      download="resume.pdf" // Name of the file to be downloaded
      className="px-4 py-[10px] rounded text-sm font-semibold shadow inline-flex items-center justify-center gap-2 text-white bg-zinc-800 hover:bg-zinc-900  space-x-2"
    >
      <IoCloudDownload className="w-5 h-5 mr-2" />
      Resume
    </a>
  );
};

export default DownloadButton;
