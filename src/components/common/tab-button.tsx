import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({
  active,
  selectTab,
  children,
}: {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 pr-2 font-semibold hover:text-slate-800 dark:hover:text-slate-200 ${
          active ? 'text-slate-800 dark:text-slate-200' : 'text-slate-500'
        }`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className={`bg-primary-500 mt-2 mr-3 h-1 ${active ? 'w-full' : 'w-0'}`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
