import React from 'react';

interface FooterProps {
  links: { href: string; label: string }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">© {new Date().getFullYear()} Captain Carl. All rights reserved.</p>
        <div>
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-400 hover:text-white mx-2">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;