import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Vote } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'गृह', href: '#' },
    { name: 'प्रतिबद्धता पत्र', href: '#manifesto' },
    { name: 'दृष्टिकोण', href: '#vision' },
    { name: 'तस्विरहरू', href: '#gallery' },
    { name: 'सम्पर्क', href: '#contact' },
  ];

  const logoUrl = "/uml-logo.svg";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="CPN-UML Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-red-600 leading-none">रश्मि आचार्य</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">कास्की क्षेत्र नं. २ उम्मेदवार</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
              अभियानमा जोडिनुहोस्
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-red-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-red-100 px-4 pt-2 pb-8 space-y-1 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-bold text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <button className="w-full bg-red-600 text-white px-5 py-4 rounded-2xl text-base font-bold shadow-lg shadow-red-200">
              अभियानमा जोडिनुहोस्
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
