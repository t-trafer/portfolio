'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';

import DarkModeToggler from '@/components/common/dark-mode-switch';
import { Logo } from '@/components/common/logo';
import MenuOverlay from '@/components/features/menu-overlay';
import { Terminal } from '@/components/features/terminal/terminal';

const NAV_LINKS = [
  { path: '#', title: 'Home' },
  { path: '#about', title: 'About' },
  { path: '#contact', title: 'Contact' },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuButton = (
    <div className="mobile-menu block md:hidden">
      {!navbarOpen ? (
        <button
          onClick={() => setNavbarOpen(true)}
          className="flex items-center rounded-sm border border-zinc-400 bg-white/10 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-white"
        >
          <Bars3Icon className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setNavbarOpen(false)}
          className="flex items-center rounded-sm border border-zinc-400 bg-white/10 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-white"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );

  const desktopNavbar = (
    <div id="navbar" className="menu hidden md:block md:w-auto">
      <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
        {NAV_LINKS.map((link, index) => (
          <li key={index}>
            <Link href={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <nav className="sticky top-0 z-10 w-full border-b border-gray-500/80 bg-gray-200/80 px-4 lg:px-8 dark:bg-black/80">
      <div className={`flex h-[6rem] items-center justify-between`}>
        <Logo />
        <div className="flex items-center gap-4">
          <Terminal />
          <DarkModeToggler />
          {mobileMenuButton}
          {desktopNavbar}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
}
