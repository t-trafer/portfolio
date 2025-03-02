import Image from 'next/image';

import { motion } from 'framer-motion';
import * as siSimpleicons from 'simple-icons';

export interface Skill {
  name: string;
  icon: siSimpleicons.SimpleIcon;
  level: number;
  category: string[];
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative flex items-center gap-4 rounded-lg bg-slate-50 p-4 shadow-sm dark:bg-slate-800"
    >
      {skill.icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md dark:bg-slate-700">
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill={`#${skill.icon.hex}`}
          >
            <path d={skill.icon.path} />
          </svg>
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-medium text-slate-900 dark:text-white">
          {skill.name}
        </h3>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-600">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-blue-500"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
