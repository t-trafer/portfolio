import Link from 'next/link';

const MenuOverlay = ({
  links,
}: {
  links: { path: string; title: string }[];
}) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
