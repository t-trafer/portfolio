import NavLink from '../atoms/NavLink';

const MenuOverlay = ({
  links,
}: {
  links: { path: string; title: string }[];
}) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
