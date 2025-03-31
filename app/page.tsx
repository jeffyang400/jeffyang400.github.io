"use client";

import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Include the weights you need
  display: "swap",
  variable: "--font-figtree", // Optional: for CSS variable usage
});

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  // Set images to visible after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex min-h-screen relative">
      {/* Background image with blur */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }} // Start black & blurred
        animate={{ opacity: 1, scale: 1.05, filter: "blur(8px)" }} // End visible & less blurred
        transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
        className="absolute inset-0 bg-center bg-no-repeat overflow-hidden h-screen w-full"
      >
        <Image
          src="/background-image.png"
          alt="Background Image"
          className="object-cover"
          fill
          priority
        />
      </motion.div>

      {/* Content container */}
      <div className="relative items-center flex mx-auto p-4">
        {/* Profile Introduction */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 m-4 bg-transparent bg-opacity-40 rounded-xl shadow-2xl mx-auto overflow-auto">
          <div
            className={`opacity-0 transform scale-95 ${
              isVisible ? "opacity-100 scale-100" : ""
            } transition-all delay-500 duration-700 ease-in-out`}
          >
            <Image
              src="/my-profile.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="object-cover mb-6 rounded-lg shadow-lg"
            />
          </div>

          {/* Profile Text Section */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }} // Start slightly scaled up and invisible
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale to normal size
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20, color: "#ffffff" }} // Start white
              animate={{ opacity: 1, y: 0, color: "#000000" }} // Transition to black
              transition={{ duration: 2.0, ease: "easeOut", delay: 0.2 }} // Smooth transition
              className={`${figtree.className} text-5xl mb-4`}
            >
              Hi I&apos;m Jeffrey
            </motion.h1>
          </motion.div>

          {/* Bio */}
          <p
            className={`${figtree.className} text-lg text-center max-w-md text-black`}
          >
            I graduated from San Jose State University with a B.S. in Software
            Engineering, and I am interning at
            <a
              href="https://www.linkedin.com/company/bawshuman/posts/?feedView=all"
              className="underline"
            >
              {" "}
              BawsHuman{" "}
            </a>
            while studying part-time for a Master&apos;s in Computer Science at
            Johns Hopkins University.
          </p>
        </div>

        {/* External Link Section*/}
        <div className="items-start justify-center p-4 m-4 bg-transparent bg-opacity-40 rounded-xl shadow-xl mx-auto overflow-auto">
          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            } transition-opacity delay-1100 duration-1000 ease-in-out`}
          >
            <a
              href="https://www.jhu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/jhu-mascot.png"
                alt="Go to JHU Homepage"
                width={150}
                height={150}
                className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
              />
            </a>
          </div>
          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            } transition-opacity delay-700 duration-1000 ease-in-out`}
          >
            <a
              href="https://www.sjsu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/sjsu-mascot.png"
                alt="Go to SJSU Homepage"
                width={150}
                height={150}
                className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
              />
            </a>
          </div>
          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            } transition-opacity delay-900 duration-1000 ease-in-out`}
          >
            <a
              href="https://www.linkedin.com/in/jeffrey-yang-9a9139186/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin-logo.png"
                alt="Go to Jeffrey's LinkedIn"
                width={150}
                height={150}
                className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
              />
            </a>
          </div>
          <div
            className={`opacity-0 ${
              isVisible ? "opacity-100" : ""
            } transition-opacity delay-1300 duration-700 ease-in-out`}
          >
            <a
              href="https://github.com/jeffyang400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/git-logo.png"
                alt="Go to Jeffrey's Github"
                width={150}
                height={150}
                className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
