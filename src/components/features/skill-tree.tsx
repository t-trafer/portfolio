import { useState } from 'react';

import { motion } from 'framer-motion';

import SkillCard, { Skill } from '@/components/common/skill-card';
import { unique } from '@/utils/general';

const ALL_CATEGORY = 'all';

function SkillTree({ skills }: { skills: Skill[] }) {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(ALL_CATEGORY);

  const filteredSkills =
    selectedCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category.includes(selectedCategory));

  const categories = unique([
    ALL_CATEGORY,
    ...skills.map((skill) => skill.category).flat(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-1 text-sm font-medium capitalize transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid h-[26rem] grid-cols-1 content-start gap-4 overflow-x-auto rounded-lg bg-zinc-900/5 p-4 sm:h-[12rem] sm:grid-cols-2 dark:bg-zinc-400/5">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SkillTree;
