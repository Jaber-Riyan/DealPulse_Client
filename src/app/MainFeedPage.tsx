import React from 'react';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { DealCard } from '../components/DealCard';
import { CATEGORIES } from '../data/deals';
import { SlidersHorizontal, AlertCircle } from 'lucide-react';

export const MainFeedPage: React.FC = () => {
  const { deals, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory } = useApp();

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = searchQuery 
      ? deal.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        deal.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCat = selectedCategory === "All Deals" 
      ? true 
      : deal.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCat;
  });

  return (
    <FeedLayout>
      <div className="space-y-6">
        {/* Header / Title */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">Live Deal Stream</h1>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--accent-primary)' }}></span>
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">Real-time affiliate sales & flash promo drops</p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              className="p-2 rounded-xl text-[var(--text-main)] transition-colors flex items-center gap-1.5 text-xs font-semibold border"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Sort: Recent</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills - Colored scrollbar according to the website color */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 theme-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-xs"
                style={{
                  backgroundColor: isActive ? 'var(--accent-primary)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-main)',
                  border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-color)'}`
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search query feedback */}
        {searchQuery && (
          <div 
            className="p-3 rounded-xl text-xs flex items-center justify-between border"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
          >
            <span>Showing results for "{searchQuery}"</span>
            <button 
              onClick={() => setSearchQuery("")} 
              className="font-bold hover:underline"
              style={{ color: 'var(--accent-primary)' }}
            >
              Clear search
            </button>
          </div>
        )}

        {/* Deal Feed List */}
        <div className="space-y-6">
          {filteredDeals.length > 0 ? (
            filteredDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <div 
              className="text-center py-16 rounded-3xl border p-8 space-y-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <AlertCircle className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
              <h3 className="text-lg font-bold text-[var(--text-main)]">No matching deals found</h3>
              <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                We couldn't find any deals matching your current search criteria. Try selecting another category or clearing your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </FeedLayout>
  );
};
