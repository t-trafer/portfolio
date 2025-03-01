'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

import { motion } from 'framer-motion';

import { RESPONSES } from './not-found.contants';

export default function NotFound() {
  const router = useRouter();
  const [output, setOutput] = useState<string[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = e.currentTarget.value.toLowerCase();
      const newOutput =
        RESPONSES[command.toLowerCase()] ?? `Command not found: ${command}`;

      switch (command) {
        case '':
          setOutput([...output, `>`]);
          break;
        case 'clear':
          setOutput([]);
          break;
        case 'home':
          setTimeout(() => {
            router.push('/');
          }, 1000);
          setOutput([...output, `> ${command}`, newOutput]);
          break;
        default:
          setOutput([...output, `> ${command}`, newOutput]);
          break;
      }
      e.currentTarget.value = '';
    }
  };

  return (
    <section
      className={`flex min-h-[calc(100vh-6rem)] w-full bg-black p-8 font-mono`}
    >
      <div className="before:animate-grain pointer-events-none fixed inset-0 overflow-hidden before:absolute before:inset-0 before:bg-[url('/noise.png')] before:opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-2xl"
      >
        <pre className="mb-8 text-center text-xs text-green-500 sm:text-sm">
          {`
 ███████╗██████╗ ██████╗  ██████╗ ██████╗ 
 ██╔════╝██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
 █████╗  ██████╔╝██████╔╝██║   ██║██████╔╝
 ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██╔══██╗
 ███████╗██║  ██║██║  ██║╚██████╔╝██║  ██║
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
                                          
 > SYSTEM ERROR: Page Not Found
 > INITIATING RECOVERY PROTOCOL...
`}
        </pre>

        <div className="text-blue-500" />
        <div className="rounded-lg border border-green-500 bg-black p-4">
          <div
            ref={outputRef}
            className="scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-zinc-900 mb-4 max-h-[300px] space-y-2 overflow-y-auto"
          >
            {output.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${line.startsWith('>') ? 'text-blue-500' : 'text-green-500'} mb-0`}
              >
                {line}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center">
            <span className="mr-2 text-green-500">{'>'}</span>
            <input
              type="text"
              onKeyDown={handleCommand}
              className="w-full bg-transparent text-green-500 outline-none"
              autoFocus
              placeholder="Type 'help' for available commands..."
            />
          </div>
        </div>

        <div className="mt-8 text-center text-green-500">
          <p className="mb-4 animate-pulse">
            SYSTEM RECOMMENDATION: Return to known coordinates
          </p>
          <Link
            href="/"
            className="inline-block rounded border border-green-500 px-4 py-2 transition-colors hover:bg-green-500 hover:text-black"
          >
            EMERGENCY RETURN
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
