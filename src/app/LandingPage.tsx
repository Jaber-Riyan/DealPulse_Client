import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { useApp } from '../app/AppContext';
import { 
  Zap, 
  UserCheck, 
  Bell, 
  MapPin, 
  Bookmark, 
  Moon, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  CheckCircle,
  Sparkles,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { deals } = useApp();
  const navigate = useNavigate();
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        navigate('/register');
      }, 1500);
    }
  };

  const featureCards = [
    {
      title: "Real-time deal feed",
      description: "Receive instant updates like a live Twitter/X feed. No more expired coupons.",
      icon: Zap,
    },
    {
      title: "Follow favorite stores",
      description: "Curate your personal shopping stream by following brands like Nike, Apple, and Amazon.",
      icon: UserCheck,
    },
    {
      title: "Instant notifications",
      description: "Get push alerts the second a high-discount flash sale drops online.",
      icon: Bell,
    },
    {
      title: "Nearby in-store deals",
      description: "Discover local clearance drops and distance indicators for stores near you.",
      icon: MapPin,
    },
    {
      title: "Save/bookmark deals",
      description: "Save items for later, track price drops, and organize your wishlists easily.",
      icon: Bookmark,
    },
    {
      title: "Dark mode support",
      description: "Premium SaaS-grade dark mode optimized for late-night deal hunting.",
      icon: Moon,
    }
  ];

  const baseBrands = [
    { name: "Nike", logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&auto=format&fit=crop&q=80" },
    { name: "Adidas", logo: "https://images.unsplash.com/photo-1518002171953-a080ee817800?w=150&auto=format&fit=crop&q=80" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&auto=format&fit=crop&q=80" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=150&auto=format&fit=crop&q=80" },
    { name: "Target", logo: "https://images.unsplash.com/photo-1563013591-733f1631f5f7?w=150&auto=format&fit=crop&q=80" },
    { name: "Walmart", logo: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=150&auto=format&fit=crop&q=80" }
  ];

  // Loop base items multiple times so marquee is non stop continuous
  const infiniteBrands = [...baseBrands, ...baseBrands, ...baseBrands, ...baseBrands];

  return (
    <SimpleLayout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold tracking-wide shadow-xs"
            style={{ 
              backgroundColor: 'var(--bg-card)', 
              borderColor: 'var(--border-color)',
              color: 'var(--accent-primary)' 
            }}
          >
            <Sparkles className="w-4 h-4 animate-spin duration-1000" />
            <span>The next-generation affiliate shopping stream</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl mx-auto text-[var(--text-main)]">
            Never Miss a Deal Again.
          </h1>

          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-[var(--text-muted)]">
            Follow your favorite brands and receive real-time sales, coupons, and discounts in a social-media-style shopping feed.
          </p>

          {/* Additional Info for Building Trust & Impressing Affiliate Platforms */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3 max-w-4xl mx-auto text-left">
            {[
              { title: "Affiliate Platform Ready", desc: "Verified API webhooks guarantee instant discount code tracking and top tier conversions.", icon: Award },
              { title: "Direct Commission Sync", desc: "Built with transparency. Shoppers receive 100% of exclusive brand promotional savings.", icon: ShieldCheck },
              { title: "Social Feed Velocity", desc: "Live user interaction highlights top trending drops before items run out of stock.", icon: Layers }
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl border transition-all"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--text-main)]">{info.title}</h4>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{info.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/feed"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold shadow-lg transition-all text-base flex items-center justify-center gap-2 group hover:opacity-95"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <span>Start Discovering Deals</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/explore"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold transition-all text-base flex items-center justify-center gap-2 hover:opacity-80"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
            >
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
              <span>Explore Live Feed</span>
            </Link>
          </div>

          {/* Feed Preview UI Showcase */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div 
              className="rounded-3xl p-4 sm:p-6 border backdrop-blur-xl shadow-2xl transition-all"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-color)] text-left">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-[var(--text-muted)]">Live Affiliate Stream Preview</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {deals.slice(0, 2).map((deal) => (
                  <div 
                    key={deal.id} 
                    className="rounded-2xl p-4 border shadow-sm flex flex-col justify-between"
                    style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <img src={deal.storeLogo} alt={deal.store} className="w-8 h-8 rounded-lg object-cover ring-1 ring-black/10" />
                          <span className="font-bold text-sm text-[var(--text-main)]">{deal.store}</span>
                        </div>
                        <span 
                          className="px-2 py-0.5 rounded text-xs font-bold text-white shadow-xs"
                          style={{ backgroundColor: 'var(--accent-primary)' }}
                        >
                          {deal.discount}
                        </span>
                      </div>
                      <h4 className="font-bold text-[var(--text-main)] text-base mb-1 line-clamp-1">{deal.title}</h4>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-3">{deal.description}</p>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-muted)] font-medium">
                      <span>📍 {deal.distance}</span>
                      <span>⏳ {deal.expires}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Section - Non-Stop Scroll System (Infinite Marquee) */}
      <section className="py-12 border-y border-[var(--border-color)] overflow-hidden" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="max-w-7xl mx-auto px-4 text-center mb-6">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-extrabold">
            Followed & Trusted Across Top Affiliate Platforms
          </p>
        </div>
        
        {/* Continuous Marquee container */}
        <div className="relative w-full overflow-hidden flex select-none">
          <div className="animate-marquee flex items-center gap-12 sm:gap-20 py-2">
            {infiniteBrands.map((brand, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0 cursor-pointer group">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover ring-2 ring-black/5 group-hover:scale-110 transition-transform duration-300 shadow-md bg-white shrink-0" 
                />
                <span className="text-sm font-black tracking-tight text-[var(--text-main)] hidden sm:inline">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Designed for Modern Deal Hunters */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[var(--text-main)]">
            Designed for Modern Deal Hunters
          </h2>
          <p className="text-[var(--text-muted)] text-lg">
            Experience the ultimate professional social shopping toolkit. Built for engagement, rapid response tracking, and custom branded aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div 
                key={i} 
                className="p-8 rounded-3xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl group flex flex-col justify-between relative overflow-hidden"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                {/* Subtle corner light highlight */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-150" style={{ backgroundColor: 'var(--text-main)' }} />

                <div>
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md transition-all duration-300 group-hover:rotate-6 group-hover:scale-110"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    <Icon className="w-7 h-7 animate-pulse duration-2000" />
                  </div>
                  
                  <h3 className="text-xl font-black text-[var(--text-main)] mb-3 group-hover:translate-x-1 transition-transform">
                    {feat.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] leading-relaxed text-sm font-medium">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-1.5 text-xs font-black tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent-primary)' }}>
                  <span>Explore functionality</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Waitlist Section */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8 text-white text-center relative overflow-hidden border-t"
        style={{ 
          backgroundColor: 'var(--accent-primary)',
          borderColor: 'var(--border-color)' 
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10 space-y-8">
          <div className="w-16 h-16 rounded-3xl bg-white/20 flex items-center justify-center mx-auto shadow-md backdrop-blur-xs">
            <Tag className="w-8 h-8 text-white animate-bounce" />
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            Start Saving Smarter
          </h2>

          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 font-medium">
            Join thousands of smart shoppers who get notified instantly about high-tier discounts before they run out of stock.
          </p>

          <form onSubmit={handleJoinWaitlist} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4">
            <input
              type="email"
              required
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-5 py-4 rounded-xl text-slate-900 bg-white placeholder:text-slate-400 font-medium outline-none shadow-lg text-base"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-xl text-[var(--text-main)] font-black shadow-lg transition-all text-base flex items-center justify-center gap-2 whitespace-nowrap hover:opacity-90"
              style={{ backgroundColor: 'var(--bg-surface)' }}
            >
              {submitted ? (
                <>
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Joined! Redirecting...</span>
                </>
              ) : (
                <>
                  <span>Join the Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-xs opacity-80 font-medium">
            No spam. Unsubscribe anytime. Instantly unlocks access to the premium live feed.
          </p>
        </div>
      </section>
    </SimpleLayout>
  );
};
