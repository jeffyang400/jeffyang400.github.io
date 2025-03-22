'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';

export default function About(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">About Jeffrey</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        This is the About page
      </p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => router.push('/')}
      >
        Go Back to Home
      </button>
    </div>
  );
}