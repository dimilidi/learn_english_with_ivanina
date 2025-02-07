"use client";

import { useState } from "react";
import { Home, User, BookOpen, MessageSquare, Mail, Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#courses", label: "Courses", icon: BookOpen },
  { href: "#testimonials", label: "Testimonials", icon: MessageSquare },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-xl font-bold text-emerald-600">
            Learn English with Ivanina
          </a>

          {/* Burger menu button for mobile */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu (No icons) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="hover:text-emerald-600 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile menu (With icons) */}
        {isMenuOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              {navItems.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-5 h-5 md:hidden" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
