import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../app/AppContext';
import { Home, UserCheck, Compass, Bookmark, Bell } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const location = useLocation();
  const { notifications } = useApp();

  const unreadCount = notifications.filter(n => n.unread).length;

  const navItems = [
    { name: 'Feed', path: '/feed', icon: Home },
    { name: 'Following', path: '/following', icon: UserCheck },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Saved', path: '/saved', icon: Bookmark },
    { name: 'Alerts', path: '/notifications', icon: Bell, count: unreadCount },
  ];

  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t py-2 px-4 flex items-center justify-around select-none"
      style={{ 
        backgroundColor: 'color-mix(in srgb, var(--bg-card) 90%, transparent)',
        borderColor: 'var(--border-color)' 
      }}
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center gap-1 relative py-1 px-3 rounded-xl transition-all"
            style={{
              color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
              fontWeight: isActive ? 800 : 500,
              transform: isActive ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px] tracking-tight">{item.name}</span>
            {item.count && item.count > 0 ? (
              <span 
                className="absolute top-0 right-2 w-2 h-2 rounded-full ring-2" 
                style={{ 
                  backgroundColor: 'var(--accent-primary)',
                  borderColor: 'var(--bg-base)' 
                }} 
              />
            ) : null}
          </Link>
        );
      })}
    </div>
  );
};
