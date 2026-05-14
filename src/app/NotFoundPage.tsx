import React from 'react';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { Ghost, ArrowLeft, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <SimpleLayout>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center select-none">
        <div className="space-y-8 relative z-10">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-md"
            style={{ backgroundColor: 'var(--bg-surface)' }}
          >
            <Ghost className="w-12 h-12" style={{ color: 'var(--accent-primary)' }} />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-8xl font-black text-[var(--text-main)] tracking-tighter">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-main)] tracking-tight">
              Page Not Found
            </h2>
            <p className="text-lg text-[var(--text-muted)] font-medium max-w-md mx-auto leading-relaxed">
              We looked everywhere, but it seems this deal or page has expired, vanished, or never existed.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border font-bold transition-all flex items-center justify-center gap-2 hover:opacity-80"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
            <Link 
              to="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-sm flex items-center justify-center gap-2 text-[var(--bg-base)]"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};
