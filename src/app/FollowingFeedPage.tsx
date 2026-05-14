import React from 'react';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { DealCard } from '../components/DealCard';
import { UserCheck, UserPlus, AlertCircle } from 'lucide-react';

export const FollowingFeedPage: React.FC = () => {
  const { deals, stores, toggleFollow } = useApp();

  const followedStoreHandles = stores.filter(st => st.isFollowed).map(st => st.handle.toLowerCase());
  const followingDeals = deals.filter(deal => followedStoreHandles.includes(deal.storeHandle.toLowerCase()));

  return (
    <FeedLayout>
      <div className="space-y-6 select-none">
        {/* Header */}
        <div className="pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="flex items-center gap-2 mb-1">
            <UserCheck className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
            <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">Following Stream</h1>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Exclusive real-time sales strictly from your curated brand watchlist.
          </p>
        </div>

        {/* Manage Brands Bar */}
        <div 
          className="rounded-3xl p-4 space-y-3 border shadow-xs"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
            Manage Followed Brands
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {stores.map((store) => {
              return (
                <button
                  key={store.handle}
                  onClick={() => toggleFollow(store.handle)}
                  className="p-2.5 rounded-xl border flex flex-col items-center gap-2 transition-all text-center select-none shadow-xs"
                  style={{
                    backgroundColor: store.isFollowed ? 'var(--accent-primary)' : 'var(--bg-surface)',
                    borderColor: store.isFollowed ? 'var(--accent-primary)' : 'var(--border-color)',
                    color: store.isFollowed ? '#ffffff' : 'var(--text-main)'
                  }}
                >
                  <img src={store.logo} alt={store.name} className="w-8 h-8 rounded-full object-cover ring-1 ring-black/5 bg-white" />
                  <span className="text-xs font-black truncate w-full">{store.name}</span>
                  <span className="text-[10px] opacity-90 flex items-center gap-0.5 font-bold">
                    {store.isFollowed ? <UserCheck className="w-3 h-3" /> : <UserPlus className="w-3 h-3" />}
                    <span>{store.isFollowed ? "Following" : "Follow"}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deal Feed List */}
        <div className="space-y-6">
          {followingDeals.length > 0 ? (
            followingDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <div 
              className="text-center py-16 rounded-3xl border p-8 space-y-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <AlertCircle className="w-12 h-12 text-[var(--text-muted)] mx-auto" />
              <h3 className="text-lg font-bold text-[var(--text-main)]">No deals from followed stores</h3>
              <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                None of your currently followed stores have active deals posted right now, or you aren't following any stores. Try following more stores above!
              </p>
            </div>
          )}
        </div>
      </div>
    </FeedLayout>
  );
};
