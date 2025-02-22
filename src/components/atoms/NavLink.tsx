import Link from 'next/link';

export default function NavLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return <Link href={href}>{title}</Link>;
}
