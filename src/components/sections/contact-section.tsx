'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { toast } from 'sonner';

import { ThemedIcon } from '@/components/common/themed-icon';
import { PERSONAL_INFO } from '@/constants/personal-info.constants';

import GithubIcon from '../../../public/svg/github-icon.svg';
import LinkedinIcon from '../../../public/svg/linkedin-icon.svg';

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (!res.ok || response.error) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative my-12 grid gap-4 px-8 py-24 md:my-12 md:grid-cols-2"
    >
      <div className="from-primary-900 absolute top-3/4 -left-4 z-0 h-80 w-80 -translate-1/2 -translate-x-1/2 transform rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent blur-lg"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
          Let&apos;s Connect
        </h5>
        <p className="mb-4 max-w-md text-zinc-600 dark:text-zinc-400">
          My inbox is always open. Whether you have a question or just want to
          say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link
            href={PERSONAL_INFO.LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <ThemedIcon src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href={PERSONAL_INFO.LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <ThemedIcon src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-zinc-300 bg-white p-2.5 text-sm text-zinc-900 placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-zinc-300 bg-white p-2.5 text-sm text-zinc-900 placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-zinc-300 bg-white p-2.5 text-sm text-zinc-900 placeholder-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-400"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="from-primary-500 to-secondary-500 w-full rounded-lg bg-gradient-to-r px-5 py-2.5 font-medium text-white transition-colors hover:bg-slate-800 disabled:opacity-70"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
