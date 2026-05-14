import React, { useState } from 'react';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { DealCard } from '../components/DealCard';
import { CATEGORIES } from '../data/deals';
import { Compass, Flame, TrendingUp, Sparkles } from 'lucide-react';

export const ExplorePage: React.FC = () => {
  const { deals } = useApp();
  const [activeTab, setActiveTab] = useState("Trending");
  const [selectedCat, setSelectedCat] = useState("All Deals");

  const getDeals = () => {
    let base = [...deals];
    if (selectedCat !== "All Deals") {
      base = base.filter(d => d.category.toLowerCase() === selectedCat.toLowerCase());
    }

    if (activeTab === "Trending") {
      return base.sort((a, b) => b.shares - a.shares);
    } else if (activeTab === "Hot Today") {
      return base.sort((a, b) => b.likes - a.likes);
    } else {
      return base.sort((a, b) => b.comments - a.comments);
    }
  };

  const exploredDeals = getDeals();

  return (
    <FeedLayout>
      <div className="space-y-8 select-none">
        {/* Header */}
        <div className="pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-2 mb-1">
            <Compass className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
            <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">Explore Global Deals</h1>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Discover trending viral discounts, hot daily drops, and global affiliate savings.
          </p>
        </div>

        {/* Hot Today Highlight Banner themed using custom green palette elements */}
        <div 
          className="rounded-3xl p-6 text-white shadow-xl relative overflow-hidden border"
          style={{ 
            backgroundColor: 'var(--accent-primary)', 
            borderColor: 'var(--border-color)',
            color: 'var(--bg-base)' 
          }}
        >
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 opacity-10 pointer-events-none">
            <Flame className="w-64 h-64 text-white" />
          </div>
          
          <div className="relative z-10 max-w-lg space-y-3">
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
            >
              <Flame className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              <span>Hot Today Section</span>
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-snug text-white">
              Flash Deals Are Peaking Now
            </h2>
            <p className="text-sm leading-relaxed opacity-90 text-white font-medium">
              Our smart recommendation engine monitors social shares and affiliate click velocity to surface the absolute best deals instantly.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-3 border-b pb-px" style={{ borderColor: 'var(--border-color)' }}>
          {[
            { name: "Trending", icon: TrendingUp },
            { name: "Hot Today", icon: Flame },
            { name: "Viral Picks", icon: Sparkles }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className="flex items-center gap-2 py-3 px-4 text-sm font-black border-b-2 transition-all"
                style={{
                  borderColor: isActive ? 'var(--accent-primary)' : 'transparent',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)'
                }}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category filters */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className="px-3.5 py-2 rounded-xl text-xs font-black transition-all border shadow-xs"
                  style={{
                    backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)'
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trending Cards Feed */}
        <div className="space-y-6">
          {exploredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </FeedLayout>
  );
};
