'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4">Page Not Found</p>
        <Link href="/" className="text-primary-500 hover:underline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
