'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { ArrowPathIcon } from '@heroicons/react/16/solid';

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const fileId = '1Y4DXQgkZBCbM4EHJoXPqBE8qLF2iMACM';
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', 'Nilesh_CV.pdf');
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
      setTimeout(() => {
        setIsDownloading(false);
      }, 2500);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <section className={`flex min-h-[calc(100vh-6rem)]`}>
      <div className="my-auto grid grid-cols-1 px-12 md:grid-cols-12">
        <div className="place-self-center text-center md:col-span-6 md:text-left xl:col-span-8">
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl md:leading-normal lg:text-[5rem]">
            <span className="from-primary-400 to-secondary-600 bg-linear-to-r bg-clip-text text-transparent">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Nilesh',
                1000,
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-zinc-900 transition-colors dark:text-zinc-100"
            />
          </h1>
          <p className="mb-6 text-base text-zinc-600 md:text-lg lg:text-xl dark:text-zinc-400">
            Software Engineer specializing in performance optimization and
            scalable architecture for modern web applications.
          </p>
          <div>
            <Link
              href="/#contact"
              className="from-primary-500 to-secondary-500 mr-4 inline-block rounded-full bg-linear-to-br px-6 py-3 text-white hover:bg-slate-200"
            >
              Hire Me
            </Link>
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="from-primary-500 to-secondary-500 mt-3 inline-block rounded-full bg-linear-to-br px-1 py-1 text-white hover:bg-slate-800"
            >
              <span className="block rounded-full bg-[#121212] px-5 py-2 hover:bg-slate-800">
                {isDownloading ? (
                  <>
                    <ArrowPathIcon className="inline h-5 w-5 animate-spin" />
                    Downloading...
                  </>
                ) : (
                  'Download CV'
                )}
              </span>
            </button>
          </div>
        </div>

        <div className="mt-4 place-self-center md:col-span-6 lg:mt-0 xl:col-span-4">
          <div className="relative h-[250px] w-[250px] rounded-full bg-[#181818] lg:h-[400px] lg:w-[400px]">
            <Image
              src={`/images/hero-image-3.webp`}
              alt="Nilesh - Software Engineer and Web Developer"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-white object-cover transition-all duration-300 hover:scale-105 dark:border-zinc-800"
              priority
              width={400}
              height={400}
              sizes="(max-width: 768px) 250px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
