import React from 'react';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { Tag, ShieldCheck, Zap, Users, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <SimpleLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 select-none relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div 
            className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mx-auto shadow-md"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <Tag className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            About DealPulse
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-medium">
            Reinventing how shoppers discover premium discounts and real-time flash sales.
          </p>
        </div>

        {/* Mission statement */}
        <div 
          className="p-8 rounded-3xl text-white shadow-xl relative overflow-hidden border"
          style={{ backgroundColor: 'var(--accent-primary)', borderColor: 'var(--border-color)', color: 'var(--bg-base)' }}
        >
          <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-10 pointer-events-none">
            <Sparkles className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 space-y-4 max-w-2xl">
            <span 
              className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-xs"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
            >
              Our Mission
            </span>
            <h2 className="text-3xl font-black tracking-tight text-white leading-snug">
              Replacing Cluttered Promotional Emails with a Clean Social Stream
            </h2>
            <p className="leading-relaxed text-sm opacity-90 text-white font-medium">
              DealPulse is a modern deal discovery platform that replaces cluttered promotional emails with a clean social-style feed of real-time discounts, affiliate offers, and curated savings. We believe saving money shouldn't require digging through dozens of spammy newsletter folders or expired coupon codes.
            </p>
          </div>
        </div>

        {/* Affiliate-driven model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[var(--text-main)]">
              The Affiliate-Driven Model Explained
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-medium">
              DealPulse partners directly with premier affiliate networks and brand ambassador programs. When our users click through our verified deals and make a qualifying purchase, we may earn a small commission from the merchant at absolutely zero additional cost to you.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-medium">
              This transparent model allows us to maintain a fast, ad-light user interface without charging subscription fees or selling user privacy data.
            </p>
          </div>

          <div 
            className="rounded-3xl p-8 border space-y-4 shadow-xs"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <h4 className="font-black text-[var(--text-main)] text-base">Key Win-Win Advantages</h4>
            <ul className="space-y-3 text-sm text-[var(--text-muted)] font-medium">
              <li className="flex items-start gap-2">
                <span className="font-black" style={{ color: 'var(--accent-primary)' }}>✓</span>
                <span className="text-[var(--text-main)]">Direct API sync with merchant platforms ensures instant code validity.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black" style={{ color: 'var(--accent-primary)' }}>✓</span>
                <span className="text-[var(--text-main)]">Brand verification guarantees authentic product discounts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black" style={{ color: 'var(--accent-primary)' }}>✓</span>
                <span className="text-[var(--text-main)]">Zero cost to consumers — you get 100% of the discount savings.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* User benefits */}
        <div className="space-y-8 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <h3 className="text-2xl font-black text-[var(--text-main)] text-center tracking-tight">
            Unrivaled Shopper Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Social Experience",
                description: "Browse deals in a gorgeous, familiar Twitter/X or Slickdeals format with likes, comments, and shares.",
                icon: Users
              },
              {
                title: "Lightning Fast",
                description: "Real-time updates ensure you catch limited-quantity flash sales before items sell out.",
                icon: Zap
              },
              {
                title: "Total Curation",
                description: "Follow only the brands you genuinely care about and filter out the noise effortlessly.",
                icon: Tag
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={i} 
                  className="p-6 rounded-3xl border shadow-xs space-y-3 transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent-primary)' }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-[var(--text-main)] text-base">{benefit.title}</h4>
                  <p className="text-[var(--text-muted)] text-xs leading-relaxed font-medium">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};
