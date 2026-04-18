import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "igo", href: "/connect" },
    { name: "launchpad", href: "/connect" },
    { name: "staking", href: "/connect" },
    { name: "farming", href: "/connect" },
    { name: "crypto", href: "/connect" },
    { name: "defi", href: "/connect" },
    { name: "web3", href: "/connect" },
    { name: "ido", href: "/connect" },
    { name: "token", href: "/connect" },
    { name: "nft", href: "/connect" },
  ];

  return (
    <nav className="bg-black text-white px-6 md:px-8 py-6 flex items-center justify-between relative z-[100]">
      
      <Link to="/">
        <div className="flex items-center text-xl md:text-2xl font-bold tracking-tighter shrink-0">
          <span className="text-yellow-400">W</span>
          <span className="text-pink-500">E</span>
          <span className="text-blue-400">B</span>
          <span className="ml-1 text-white uppercase">3 Network</span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={`${link.href}/${link.name}`}
            className="text-xs font-medium hover:text-gray-400 transition-colors duration-200 uppercase"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`h-0.5 w-6 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>

        <span
          className={`h-0.5 w-6 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>

        <span
          className={`h-0.5 w-6 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`
        absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 border-t border-white/10
        ${isOpen ? "opacity-100 visible h-screen" : "opacity-0 invisible h-0"}
        lg:hidden
      `}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={`${link.href}/${link.name}`}
              className="text-lg font-bold hover:text-gray-400 border-b border-white/5 pb-2 uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;