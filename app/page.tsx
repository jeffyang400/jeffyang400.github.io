'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';
import Image from 'next/image';

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Image
        src="/nextjs-website/profile.jpg" 
        alt="Profile Picture" 
        width={192}
        height={192}
        className="object-cover mb-6 rounded-lg shadow-lg"
      />
      <p className="text-lg text-white mb-6 max-w-lg text-center">
        This is a website about Jeffrey Yang
      </p>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => router.push('/about')}
      >
        Learn more
      </button>
    </div>
  );
}
