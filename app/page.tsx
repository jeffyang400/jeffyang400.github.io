'use client';

import { JSX, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  
  // Set images to visible after component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
  <div className="flex min-h-screen relative">
    {/* Background image with blur */}
    <div className="absolute inset-0 bg-center bg-no-repeat blur-lg scale-105 overflow-hidden">
    <Image
        src="/background-image.png"
        alt="Background Image"
        className="object-cover"
        fill
      />
    </div>
  
    {/* Content container */}
    <div className="relative w-full z-10 flex items-center">      
        
        {/* First section - Education */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 m-4 bg-transparent bg-opacity-40 rounded-xl shadow-2xl max-h-[50vh] overflow-auto">
          <div className="flex space-x-6 mb-6">
            <div className={`opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity delay-800 duration-1000 ease-in-out`}>
              <a href="https://www.jhu.edu/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/jhu-mascot.png"
                  alt="Go to JHU Homepage"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
                />
              </a>
            </div>
            <div className={`opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity delay-400 duration-1000 ease-in-out`}>
              <a href="https://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/sjsu-mascot.svg"
                  alt="Go to SJSU Homepage"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
                />
              </a>
            </div>
          </div>
          <p className="text-lg text-center max-w-md text-black font-semibold">
            Jeffrey graduated from San Jose State University with a B.S. in Software Engineering and is currently studying for M.S. Computer Science at Johns Hopkins University
          </p>
        </div>
        
        {/* Second section - Profile Introduction */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 m-4 bg-transparent bg-opacity-40 rounded-xl shadow-2xl max-h-[50vh] overflow-auto">
          <h1 className="text-5xl font-bold mb-4 text-center text-black">This is Jeffrey</h1>
          <div className={`opacity-0 transform scale-95 ${isVisible ? 'opacity-100 scale-100' : ''} transition-all duration-700 ease-in-out`}>
            <Image
              src="/my-profile.jpg"
              alt="Profile Picture"
              width={256}
              height={256}
              className="object-cover mb-6 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-lg text-center max-w-md text-black font-semibold">
            Jeffrey is a Software Engineer Intern @ BawsHuman
          </p>
        </div>

        {/* Third section - Social Links */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 m-4 bg-transparent bg-opacity-40 rounded-xl shadow-2xl max-h-[50vh] overflow-auto">
          <div className="flex space-x-6 mb-6">
            <div className={`opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity delay-600 duration-1000 ease-in-out`}>
              <a href="https://www.linkedin.com/in/jeffrey-yang-9a9139186/" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/linkedin-logo.png"
                  alt="Go to Jeffrey's LinkedIn"
                  width={150}
                  height={150}
                  className="object-cover rounded-lg hover:opacity-80 transition cursor-pointer"
                />
              </a>
            </div>
            <div className={`opacity-0 ${isVisible ? 'opacity-100' : ''} transition-opacity delay-1000 duration-700 ease-in-out`}>
              <a href="https://github.com/jeffyang400" target="_blank" rel="noopener noreferrer">
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
          <p className="text-lg text-center max-w-md text-black font-semibold">
                Click on the images above to learn more
          </p>
        </div>
      </div>
    </div>
  );
};
