import React from 'react';
import { Link } from 'react-router-dom';
import { FeedLayout } from '../layouts/FeedLayout';
import { useApp } from '../app/AppContext';
import { Bell, CheckCheck, ArrowRight, Tag } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const { notifications, markNotificationsRead } = useApp();

  return (
    <FeedLayout>
      <div className="space-y-6 select-none">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Bell className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              <h1 className="text-2xl font-black text-[var(--text-main)] tracking-tight">Activity Alerts</h1>
            </div>
            <p className="text-xs text-[var(--text-muted)]">
              Live updates from followed brands and flash sale reminders.
            </p>
          </div>

          <button
            onClick={markNotificationsRead}
            className="px-3 py-1.5 rounded-xl border transition-colors flex items-center gap-1.5 text-xs font-bold hover:opacity-80"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}
          >
            <CheckCheck className="w-4 h-4 text-emerald-600" />
            <span>Mark all read</span>
          </button>
        </div>

        {/* Notifications list */}
        <div className="space-y-3">
          {notifications.map((notif) => (
            <Link
              key={notif.id}
              to={notif.link}
              className="p-4 rounded-2xl border transition-all flex items-start gap-4 group shadow-xs hover:scale-[1.01]"
              style={{
                backgroundColor: notif.unread ? 'var(--bg-surface)' : 'var(--bg-card)',
                borderColor: notif.unread ? 'var(--accent-primary)' : 'var(--border-color)'
              }}
            >
              <img 
                src={notif.storeLogo} 
                alt={notif.title} 
                className="w-10 h-10 rounded-xl object-cover shrink-0 mt-0.5 ring-1 ring-black/5 bg-white" 
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span 
                    className="text-xs font-black px-2.5 py-0.5 rounded text-white shadow-xs uppercase tracking-wider"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    {notif.type}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-medium">{notif.time}</span>
                </div>
                <p className="text-sm font-black text-[var(--text-main)] group-hover:opacity-80 transition-opacity">
                  {notif.title}
                </p>
                <div className="flex items-center gap-1 text-xs font-black mt-2 opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent-primary)' }}>
                  <span>View Deal Stream</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              {notif.unread && (
                <span className="w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 shadow-xs" style={{ backgroundColor: 'var(--accent-primary)' }} />
              )}
            </Link>
          ))}
        </div>

        {/* Notification tips */}
        <div 
          className="p-4 rounded-2xl border flex items-center gap-3 shadow-xs"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <Tag className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-primary)' }} />
          <p className="text-xs leading-relaxed text-[var(--text-main)] font-medium">
            <strong>Pro Tip:</strong> Ensure browser push notifications are enabled to receive high-tier discount drops instantly even when DealPulse is in the background.
          </p>
        </div>
      </div>
    </FeedLayout>
  );
};
