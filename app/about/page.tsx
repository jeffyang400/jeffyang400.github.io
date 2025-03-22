'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Image from 'next/image';

export default function About(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-bold mb-4 text-center">This is Jeffrey</h1>
      <Image 
        src="/nextjs-website/profile.jpg" 
        alt="Profile Picture" 
        width={192}
        height={192}
        className="object-cover mb-6 rounded-lg shadow-lg"
      />
      <p className="text-lg text-white mb-6 max-w-lg text-center">
        Jeffrey is a Software Engineer Intern @ BawsHuman
      </p>

      <div className="flex space-x-6">
      <a href="https://www.linkedin.com/in/jeffrey-yang-9a9139186/" target="_blank" rel="noopener noreferrer">
        <Image
            src="/nextjs-website/linkedin-logo.png" 
            alt="Go to Jeffrey's LinkedIn" 
            width={100}
            height={100}
            className="object-cover rounded-lg shadow-lg hover:opacity-80 transition cursor-pointer"
          />
        </a>

        <a href="https://github.com/jeffyang400" target="_blank" rel="noopener noreferrer">
          <Image
            src="/nextjs-website/git-logo.png" 
            alt="Go to Jeffrey's Github" 
            width={100}
            height={100}
            className="object-cover rounded-lg shadow-lg hover:opacity-80 transition cursor-pointer"
          />
        </a>
      </div>
      <div className="text-lg text-gray-700 mt-8 max-w-lg text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
         onClick={() => router.push('/')}>
          Go Back
        </button>
      </div>
    </div>
  );
}