import React from 'react';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { DealCard } from '../components/DealCard';
import { Bookmark, AlertCircle } from 'lucide-react';

export const SavedDealsPage: React.FC = () => {
  const { deals } = useApp();

  const savedDeals = deals.filter(d => d.bookmarked);

  return (
    <FeedLayout>
      <div className="space-y-6 select-none">
        {/* Header */}
        <div className="pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-2 mb-1">
            <Bookmark className="w-6 h-6 fill-current" style={{ color: 'var(--accent-primary)' }} />
            <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">Saved Bookmarks</h1>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Your personal collection of saved promo codes, flash drops, and wishlisted deals.
          </p>
        </div>

        {/* Deals list */}
        <div className="space-y-6">
          {savedDeals.length > 0 ? (
            savedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <div 
              className="text-center py-16 rounded-3xl border p-8 space-y-4 shadow-xs"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <AlertCircle className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
              <h3 className="text-lg font-bold text-[var(--text-main)]">No saved deals yet</h3>
              <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto font-medium">
                You haven't bookmarked any deals. Browse the live stream and click the bookmark icon on any deal card to save it here for easy reference!
              </p>
            </div>
          )}
        </div>
      </div>
    </FeedLayout>
  );
};
