import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  // Sound effect refs
  const hoverSound = useRef<HTMLAudioElement>(null);
  const clickSound = useRef<HTMLAudioElement>(null);
  const playHoverSound = () => {
    if (hoverSound.current) {
      (hoverSound.current as HTMLAudioElement).currentTime = 0;
      (hoverSound.current as HTMLAudioElement).play();
    }
  };
  const playClickSound = () => {
    if (clickSound.current) {
      (clickSound.current as HTMLAudioElement).currentTime = 0;
      (clickSound.current as HTMLAudioElement).play();
    }
  };

  return (
    <nav className="w-full fixed top-0 z-30">
      {/* Sound effect elements */}
      <audio ref={hoverSound} src="/hover.mp3" preload="auto" />
      <audio ref={clickSound} src="/key6.wav" preload="auto" />
      <div className="backdrop-blur-md bg-white/70 border-b border-indigo-100 shadow-lg py-4 px-8 flex items-center justify-between max-w-7xl mx-auto rounded-b-2xl mt-2">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => { setMenuOpen(false); playClickSound(); }}
        >
          {/* Subtle logo/icon */}
          <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-700 flex items-center justify-center shadow-md">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" opacity=".15"/><path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <span className="text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight leading-tight" style={{letterSpacing: '-0.03em'}}>Azan Ali</span>
        </Link>
        <ul className="hidden md:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.name}
              whileHover={{ scale: 1.12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="relative"
              onMouseEnter={playHoverSound}
            >
              <Link
                to={nav.path}
                onClick={playClickSound}
                className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 ${location.pathname === nav.path ? 'text-indigo-700 bg-indigo-100' : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50'}`}
              >
                {nav.name}
                <motion.span
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500 rounded"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                  style={{ originX: 0 }}
                />
              </Link>
            </motion.li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="Azan_Ali_Resume.pdf"
              className="ml-2 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow hover:from-indigo-600 hover:to-indigo-800 transition"
              onClick={playClickSound}
            >
              Download Resume
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-indigo-700 focus:outline-none"
          onClick={() => { setMenuOpen(!menuOpen); playClickSound(); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 shadow-lg py-4 z-40 rounded-b-2xl">
          <ul className="flex flex-col gap-4 items-center">
            {navLinks.map((nav) => (
              <motion.li
                key={nav.name}
                whileHover={{ scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="relative"
                onMouseEnter={playHoverSound}
              >
                <Link
                  to={nav.path}
                  onClick={() => { setMenuOpen(false); playClickSound(); }}
                  className={`text-lg font-medium px-2 py-1 rounded transition-colors duration-200 ${location.pathname === nav.path ? 'text-indigo-700 bg-indigo-100' : 'text-gray-700 hover:text-indigo-700 hover:bg-indigo-50'}`}
                >
                  {nav.name}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500 rounded"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download="Azan_Ali_Resume.pdf"
                className="px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-indigo-500 to-indigo-700 text-white shadow hover:from-indigo-600 hover:to-indigo-800 transition"
                onClick={playClickSound}
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 