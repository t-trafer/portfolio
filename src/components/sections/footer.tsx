import { Logo } from '../common/logo';

const Footer = () => {
  return (
    <footer className="footer z-10 w-full border border-t-[#33353F] border-r-transparent border-l-transparent text-white">
      <div className="flex items-center justify-between p-12">
        <span>
          <Logo />
        </span>
        <p className="text-slate-600 dark:text-slate-400">
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
