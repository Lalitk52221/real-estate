import Link from "next/link";

const links = [
  { title: "Home", href: "/" },
  { title: "Buy", href: "/buy" },
  { title: "Rent", href: "/rent" },
  { title: "Sell", href: "/sell" },
  { title: "Projects", href: "/projects" },
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export default function NavLinks() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-10">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}