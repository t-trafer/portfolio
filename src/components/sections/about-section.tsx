'use client';
import Image from 'next/image';
import { useTransition, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import TabButton from '@/components/common/tab-button';
import { SKILLS } from '@/constants/skills.constants';

import SkillTree from '../features/skill-tree';

const TABS_CONFIG: { title: string; id: Tab; content: JSX.Element }[] = [
  {
    title: 'Skills',
    id: 'skills',
    content: <SkillTree skills={SKILLS} />,
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-bold">
            National Institute of Technology, Srinagar
          </span>
          <span className="pl-2 text-sm text-gray-500">| 2018 - 2022</span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

type Tab = 'skills' | 'education' | 'certifications';

const AboutSection = () => {
  const [tab, setTab] = useState<Tab>('skills');

  const handleTabChange = (id: Tab) => {
    setTab(id);
  };

  return (
    <section className="text-slate-800 dark:text-slate-200" id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image
          alt="about-image"
          src="/images/about-image.png"
          width={500}
          height={500}
        />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="text-base lg:text-lg">
            Full Stack Software Engineer specializing in modern web technologies
            and scalable applications. Passionate about clean code, performance
            optimization, and creating exceptional user experiences.
          </p>
          <div className="mt-8 flex w-full flex-row justify-start">
            {TABS_CONFIG.map((tabConfig) => (
              <TabButton
                key={tabConfig.id}
                selectTab={() => handleTabChange(tabConfig.id)}
                active={tab === tabConfig.id}
              >
                {tabConfig.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TABS_CONFIG.find((tabConfig) => tabConfig.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
