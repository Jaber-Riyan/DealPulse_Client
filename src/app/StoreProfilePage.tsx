import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { DealCard } from '../components/DealCard';
import { UserPlus, UserCheck, ExternalLink, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export const StoreProfilePage: React.FC = () => {
  const { handle } = useParams<{ handle?: string }>();
  const { stores, deals, toggleFollow } = useApp();
  const [activeTab, setActiveTab] = useState("Latest Deals");

  const storeHandle = handle ? handle.toLowerCase() : "nike";
  const store = stores.find(st => st.handle.toLowerCase() === storeHandle) || stores[0];

  const storeDeals = deals.filter(d => d.storeHandle.toLowerCase() === store.handle.toLowerCase());

  const displayedDeals = activeTab === "Latest Deals"
    ? [...storeDeals]
    : [...storeDeals].sort((a, b) => b.likes - a.likes);

  return (
    <FeedLayout>
      <div className="space-y-6 select-none">
        {/* Store Banner */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/1] bg-black/10 shadow-md">
          <img src={store.banner} alt={store.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 z-10">
            <span 
              className="px-3 py-1 text-white rounded-lg text-xs font-black tracking-wider uppercase shadow-xs"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              {store.featuredCategory}
            </span>
            <span className="text-xs text-white/90 font-medium tracking-wide">Official Partner</span>
          </div>
        </div>

        {/* Store Profile Info */}
        <div 
          className="p-6 rounded-3xl border shadow-sm relative -mt-4 z-20 backdrop-blur-xl"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex items-center gap-4">
              <img 
                src={store.logo} 
                alt={store.name} 
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-black/10 shadow-xl shrink-0 bg-white" 
              />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">{store.name}</h1>
                  <span title="Verified Official Store">
                    <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-1 font-medium">
                  <span className="font-bold text-[var(--text-main)]">@{store.handle}</span>
                  <span>•</span>
                  <span><strong className="text-[var(--text-main)]">{store.followers}</strong> Followers</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => toggleFollow(store.handle)}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl text-sm font-black shadow-xs transition-all flex items-center justify-center gap-2 hover:opacity-90"
                style={{
                  backgroundColor: store.isFollowed ? 'var(--bg-surface)' : 'var(--accent-primary)',
                  color: store.isFollowed ? 'var(--text-main)' : '#ffffff',
                  border: `1px solid ${store.isFollowed ? 'var(--border-color)' : 'transparent'}`
                }}
              >
                {store.isFollowed ? <UserCheck className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                <span>{store.isFollowed ? "Following Store" : "Follow Store"}</span>
              </button>

              <a
                href={`https://www.google.com/search?q=${store.name}+official+store`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border transition-colors hover:opacity-80"
                style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
                title="Visit Official Store website"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="pt-4 space-y-4 text-sm text-[var(--text-muted)] leading-relaxed font-medium">
            <p className="text-[var(--text-main)]">{store.description}</p>
            <div className="flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
              <ShieldCheck className="w-4 h-4" />
              <span>Real-time direct affiliate link sync active. Codes verified daily.</span>
            </div>
          </div>
        </div>

        {/* Categories present in store */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-1.5">
            <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
            <span>Store Categories</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {["All Items", "Footwear", "Apparel", "Clearance", "Accessories"].map((c, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 rounded-xl text-xs font-bold border"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          {["Latest Deals", "Popular Deals"].map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="py-3 px-4 text-sm font-black border-b-2 transition-all"
                style={{
                  borderColor: isActive ? 'var(--accent-primary)' : 'transparent',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)'
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Deals list */}
        <div className="space-y-6">
          {displayedDeals.length > 0 ? (
            displayedDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <div 
              className="text-center py-12 rounded-3xl border p-8 space-y-2"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <p className="text-sm text-[var(--text-muted)]">No deals posted under this section currently.</p>
            </div>
          )}
        </div>
      </div>
    </FeedLayout>
  );
};
