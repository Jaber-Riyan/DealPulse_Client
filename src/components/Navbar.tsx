import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../app/AppContext';
import { Tag, Moon, Sun, ArrowRight, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode, user, sidebarOpen, setSidebarOpen } = useApp();
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // hide on scrolling down, show on scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // If we navigate, show navbar automatically
  useEffect(() => {
    setVisible(true);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b border-[var(--border-color)] ${ 
        visible ? 'translate-y-0 shadow-md' : '-translate-y-full shadow-none'
      }`}
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg-base) 85%, transparent)' }}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Hamburger button for mobile feed sidebars */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-[var(--text-main)] hover:bg-[var(--bg-surface)] transition-colors"
            title="Toggle Menu Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <Tag className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-[var(--text-main)]">
              Deal<span style={{ color: 'var(--accent-primary)' }}>Pulse</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--text-muted)]">
            <Link to="/feed" className="hover:text-[var(--text-main)] transition-colors">Live Feed</Link>
            <Link to="/explore" className="hover:text-[var(--text-main)] transition-colors">Explore</Link>
            <Link to="/about" className="hover:text-[var(--text-main)] transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-[var(--text-main)] transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl text-[var(--text-main)] hover:bg-[var(--bg-surface)] transition-colors"
            title="Toggle theme"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-slate-800" />}
          </button>

          {user ? (
            <Link 
              to="/feed" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-medium text-sm transition-all shadow-sm hover:opacity-90"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <span>Feed</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="hidden sm:inline-flex px-4 py-2 rounded-xl text-sm font-medium text-[var(--text-main)] hover:bg-[var(--bg-surface)] transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl text-white font-medium text-sm transition-all flex items-center gap-1.5 shadow-sm hover:opacity-90"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
