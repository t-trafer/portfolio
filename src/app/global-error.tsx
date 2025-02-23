'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-red-100 dark:bg-red-900">
          <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-800">
            <h2 className="mb-4 text-2xl font-bold text-red-600 dark:text-red-400">
              GLOBAL Error Handler
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Root layout error:{' '}
              {error.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => reset()}
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
