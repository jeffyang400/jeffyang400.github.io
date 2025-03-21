'use client';

import { useRouter } from 'next/navigation';
import { JSX } from 'react';

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-lg text-center">
        This is the home page. Click the button to go to the about page
      </p>
      <button 
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        onClick={() => router.push('/about')}
      >
        Go to About Page
      </button>
    </div>
  );
}
