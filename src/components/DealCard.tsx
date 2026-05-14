import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Deal } from '../data/deals';
import { useApp } from '../app/AppContext';
import { 
  Bookmark, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Tag, 
  CheckCircle2, 
  Share2, 
  ThumbsUp, 
  MessageSquare,
  Copy,
  Check
} from 'lucide-react';

export const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const { toggleBookmark } = useApp();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(deal.likes);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleCopyCode = (e: React.MouseEvent) => {
    e.preventDefault();
    if (deal.code) {
      navigator.clipboard.writeText(deal.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article 
      className="rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group/card relative"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
    >
      {/* Header info */}
      <div className="p-4 sm:p-5 pb-3 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link to={`/store/${deal.storeHandle}`} className="shrink-0">
            <img 
              src={deal.storeLogo} 
              alt={deal.store} 
              className="w-12 h-12 rounded-xl object-cover ring-1 ring-black/5 bg-white shadow-xs"
            />
          </Link>
          <div>
            <div className="flex items-center gap-1.5">
              <Link 
                to={`/store/${deal.storeHandle}`} 
                className="font-extrabold text-[var(--text-main)] hover:opacity-80 transition-opacity"
              >
                {deal.store}
              </Link>
              {deal.verified && (
                <span title="Verified Affiliate Partner">
                  <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-medium">
              <span>@{deal.storeHandle}</span>
              <span>•</span>
              <span>{deal.postedTime}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span 
            className="px-3 py-1 rounded-full text-xs font-black tracking-wide text-white shadow-xs"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            {deal.discount}
          </span>
          <button
            onClick={() => toggleBookmark(deal.id)}
            className="p-2 rounded-xl transition-transform hover:scale-110"
            style={{ color: deal.bookmarked ? 'var(--accent-primary)' : 'var(--text-muted)' }}
            title={deal.bookmarked ? "Remove Bookmark" : "Bookmark Deal"}
          >
            <Bookmark className={`w-5 h-5 ${deal.bookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-5 py-2 flex-1">
        <h3 className="text-lg font-black text-[var(--text-main)] mb-2 leading-snug group-hover/card:translate-x-0.5 transition-transform">
          {deal.title}
        </h3>

        {/* Pricing comparison if present */}
        {(deal.originalPrice || deal.discountPrice) && (
          <div className="flex items-center gap-2 mb-3">
            {deal.discountPrice && (
              <span className="text-xl font-black text-[var(--text-main)]">
                {deal.discountPrice}
              </span>
            )}
            {deal.originalPrice && (
              <span className="text-sm font-semibold line-through opacity-60 text-[var(--text-muted)]">
                {deal.originalPrice}
              </span>
            )}
          </div>
        )}

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 font-medium">
          {deal.description}
        </p>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-video mb-4 bg-black/5 group">
          <img 
            src={deal.image} 
            alt={deal.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          {deal.code && (
            <div 
              className="absolute bottom-3 left-3 z-10 flex items-center gap-2 backdrop-blur-md px-3 py-1.5 rounded-xl border shadow-lg"
              style={{ 
                backgroundColor: 'var(--bg-base)', 
                borderColor: 'var(--border-color)', 
                color: 'var(--text-main)' 
              }}
            >
              <Tag className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
              <span className="text-xs font-mono font-bold tracking-wider">{deal.code}</span>
              <button
                onClick={handleCopyCode}
                className="p-1 rounded transition-colors ml-1 hover:opacity-70"
                style={{ color: 'var(--text-main)' }}
                title="Copy coupon code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}
        </div>

        {/* Tags / Meta info */}
        <div 
          className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-bold text-[var(--text-muted)] mb-4 pt-3 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-primary)' }} />
            <span>{deal.distance}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-primary)' }} />
            <span>{deal.expires}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span 
              className="px-2.5 py-0.5 rounded-lg text-[11px] font-black uppercase tracking-wider"
              style={{ backgroundColor: 'var(--bg-surface)', color: 'var(--accent-primary)' }}
            >
              {deal.category}
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Call to action */}
      <div 
        className="px-4 sm:px-5 py-3.5 border-t flex items-center justify-between gap-4"
        style={{ 
          backgroundColor: 'var(--bg-surface)', 
          borderColor: 'var(--border-color)' 
        }}
      >
        <div className="flex items-center gap-4 text-[var(--text-muted)] text-xs font-bold">
          <button 
            onClick={handleLike}
            className="flex items-center gap-1.5 transition-colors hover:opacity-80"
            style={{ color: liked ? 'var(--accent-primary)' : 'inherit' }}
          >
            <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
            <span>{likeCount}</span>
          </button>
          <div className="flex items-center gap-1.5 transition-colors cursor-pointer hover:opacity-80">
            <MessageSquare className="w-4 h-4" />
            <span>{deal.comments}</span>
          </div>
          <div className="flex items-center gap-1.5 transition-colors cursor-pointer hover:opacity-80">
            <Share2 className="w-4 h-4" />
            <span>{deal.shares}</span>
          </div>
        </div>

        <a 
          href={`https://www.google.com/search?q=${encodeURIComponent(deal.store + ' ' + deal.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-black text-xs transition-all shadow-xs hover:opacity-95"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        >
          <span>Shop Now</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
};
