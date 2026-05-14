import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../app/AppContext';
import { Search, TrendingUp, Sparkles, UserPlus, ArrowUpRight } from 'lucide-react';

export const RightSidebar: React.FC = () => {
  const { stores, toggleFollow, searchQuery, setSearchQuery, deals } = useApp();

  const trendingDeals = deals.slice(0, 3);
  const suggestedStores = stores.filter(st => !st.isFollowed).slice(0, 3);

  return (
    <aside 
      className="w-80 shrink-0 hidden xl:flex flex-col h-[calc(100vh-4rem)] sticky top-16 p-4 border-l overflow-y-auto space-y-6 select-none"
      style={{ borderColor: 'var(--border-color)' }}
    >
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search deals, stores..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
          style={{ 
            backgroundColor: 'var(--bg-card)', 
            borderColor: 'var(--border-color)',
            color: 'var(--text-main)' 
          }}
        />
      </div>

      {/* Suggested follows */}
      <div 
        className="rounded-2xl p-4 space-y-4 border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <h3 className="font-bold text-sm text-[var(--text-main)]">Suggested Follows</h3>
          </div>
          <Link to="/following" className="text-xs font-semibold hover:underline" style={{ color: 'var(--accent-primary)' }}>
            Manage
          </Link>
        </div>

        <div className="space-y-3">
          {suggestedStores.length > 0 ? (
            suggestedStores.map((store) => (
              <div key={store.handle} className="flex items-center justify-between gap-3">
                <Link to={`/store/${store.handle}`} className="flex items-center gap-2 overflow-hidden group">
                  <img src={store.logo} alt={store.name} className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-black/5" />
                  <div className="truncate">
                    <p className="text-sm font-semibold text-[var(--text-main)] truncate group-hover:opacity-80 transition-opacity">
                      {store.name}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] truncate">@{store.handle}</p>
                  </div>
                </Link>
                <button
                  onClick={() => toggleFollow(store.handle)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white transition-all shrink-0 flex items-center gap-1 shadow-xs hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Follow</span>
                </button>
              </div>
            ))
          ) : (
            <p className="text-xs text-[var(--text-muted)] italic">You follow all suggested stores!</p>
          )}
        </div>
      </div>

      {/* Top discounts today */}
      <div 
        className="rounded-2xl p-4 space-y-4 border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald-500" />
          <h3 className="font-bold text-sm text-[var(--text-main)]">Top Discounts Today</h3>
        </div>

        <div className="space-y-3">
          {trendingDeals.map((deal) => (
            <Link 
              key={deal.id} 
              to="/feed" 
              className="block p-3 rounded-xl border transition-all group"
              style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span 
                  className="text-xs font-bold px-2 py-0.5 rounded text-white shadow-xs"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  {deal.discount}
                </span>
                <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                  {deal.store}
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: 'var(--accent-primary)' }} />
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--text-main)] group-hover:opacity-80 transition-opacity line-clamp-2">
                {deal.title}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                {deal.expires}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Affiliate info badge */}
      <div 
        className="rounded-2xl text-white p-4 space-y-2 shadow-md"
        style={{ backgroundColor: 'var(--accent-primary)' }}
      >
        <h4 className="font-bold text-sm">💡 Pro DealHunter Tip</h4>
        <p className="text-xs leading-relaxed opacity-90">
          Bookmark your favorite flash sales to get reminder alerts before promo codes expire!
        </p>
        <div className="pt-2">
          <Link
            to="/register"
            className="inline-block px-3 py-1.5 font-semibold rounded-lg text-xs transition-colors hover:opacity-90"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            Join VIP Waitlist
          </Link>
        </div>
      </div>
    </aside>
  );
};
