import React from 'react';
import { Link } from 'react-router-dom';
import { Tag, ShieldAlert, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="border-t transition-colors duration-300 select-none relative z-10"
      style={{ 
        backgroundColor: 'var(--bg-card)', 
        borderColor: 'var(--border-color)',
        color: 'var(--text-muted)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Info Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div 
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-xs"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <Tag className="w-4 h-4" />
              </div>
              <span className="text-xl font-black tracking-tight text-[var(--text-main)]">
                Deal<span style={{ color: 'var(--accent-primary)' }}>Pulse</span>
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-sm">
              The next-generation social shopping stream. Replace cluttered promotional email newsletters with a lightning-fast real-time feed of verified discounts.
            </p>

            <div 
              className="p-3.5 rounded-2xl border flex items-start gap-2.5 text-xs shadow-xs max-w-md"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--accent-primary)' }} />
              <span className="leading-relaxed text-[var(--text-main)]">
                <strong>Affiliate Transparency Notice:</strong> We may earn qualified commissions through affiliate retail partnerships when you purchase via our listed brand URLs.
              </span>
            </div>
          </div>

          {/* Quick links columns */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              Explore Live
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/feed" className="hover:text-[var(--text-main)] transition-colors">Live Deal Stream</Link></li>
              <li><Link to="/explore" className="hover:text-[var(--text-main)] transition-colors">Global Trending</Link></li>
              <li><Link to="/following" className="hover:text-[var(--text-main)] transition-colors">Curated Stores</Link></li>
              <li><Link to="/saved" className="hover:text-[var(--text-main)] transition-colors">Saved Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/about" className="hover:text-[var(--text-main)] transition-colors">About DealPulse</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--text-main)] transition-colors">Affiliate Support</Link></li>
              <li><Link to="/register" className="hover:text-[var(--text-main)] transition-colors">VIP Waitlist Access</Link></li>
              <li><Link to="/notifications" className="hover:text-[var(--text-main)] transition-colors">Activity Alerts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-4">
              Legal & Platform
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-[var(--text-main)] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[var(--text-main)] transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[var(--text-main)] transition-colors">Data Handling</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[var(--text-main)] transition-colors">Cookie Tracking</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom footer credit strip */}
        <div 
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p>© {new Date().getFullYear()} DealPulse Platform. Designed with passion for deal discovery.</p>
          <div className="flex items-center gap-1">
            <span>Built securely for the web</span>
            <Heart className="w-3.5 h-3.5 fill-current text-red-500 animate-pulse" />
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:underline">Privacy Guidelines</Link>
            <Link to="/contact" className="hover:underline">Contact Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
