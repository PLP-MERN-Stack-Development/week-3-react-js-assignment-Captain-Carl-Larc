import React from 'react';

interface NavbarProps {
  links: { name: string; href: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-white hover:text-gray-300">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;