'use client';

import DarkModeToggler from '@/components/atoms/darkModeToggler';
import { useState } from 'react';
import NavLink from '@/components/atoms/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from '@/components/molecules/MenuOverlay';
import { NAV_LINKS } from '@/constants/general';
import { Logo } from '../atoms/Logo';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="lg:px-22 sticky top-0 z-10 w-full border-b border-gray-500/80 bg-gray-200/80 px-16 dark:bg-black/80">
      <div className={`flex h-[6rem] items-center justify-between`}>
        <Logo />
        <div className="flex items-center gap-4">
          <DarkModeToggler />
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center rounded border border-zinc-400 bg-white/10 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center rounded border border-zinc-400 bg-white/10 px-3 py-2 text-zinc-700 transition-colors hover:border-zinc-600 hover:text-zinc-900 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-300 dark:hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div id="navbar" className="menu hidden md:block md:w-auto">
            <ul className="mt-0 flex p-4 md:flex-row md:space-x-8 md:p-0">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={NAV_LINKS} /> : null}
    </nav>
  );
}
