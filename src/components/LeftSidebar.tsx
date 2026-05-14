import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../app/AppContext';
import { 
  Home, 
  UserCheck, 
  Compass, 
  Bookmark, 
  Bell, 
  User as UserIcon, 
  Tag, 
  PlusCircle,
  LogOut,
  Moon,
  Sun,
  X
} from 'lucide-react';

export const LeftSidebar: React.FC = () => {
  const location = useLocation();
  const { notifications, user, logout, darkMode, toggleDarkMode, sidebarOpen, setSidebarOpen } = useApp();

  const unreadCount = notifications.filter(n => n.unread).length;

  const menuItems = [
    { name: 'Live Feed', path: '/feed', icon: Home },
    { name: 'Following', path: '/following', icon: UserCheck },
    { name: 'Explore', path: '/explore', icon: Compass },
    { name: 'Saved Deals', path: '/saved', icon: Bookmark },
    { name: 'Notifications', path: '/notifications', icon: Bell, count: unreadCount },
    { name: 'Store Profile (Nike)', path: '/store/nike', icon: UserIcon },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between select-none">
      <div className="space-y-6">
        <div className="px-3 py-2 flex items-center justify-between">
          {/* <div>
            <Link 
              to="/" 
              onClick={() => setSidebarOpen(false)} 
              className="flex items-center gap-2 mb-1 group"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                <Tag className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                Deal<span style={{ color: 'var(--accent-primary)' }}>Pulse</span>
              </span>
            </Link>
            <p className="text-xs text-[var(--text-muted)]">Social deal stream</p>
          </div> */}

          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center justify-between px-3 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? 'font-bold border-l-4'
                    : 'hover:opacity-80'
                }`}
                style={{
                  backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-main)',
                  borderColor: isActive ? 'var(--accent-primary)' : 'transparent'
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" style={{ color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)' }} />
                  <span>{item.name}</span>
                </div>
                {item.count && item.count > 0 ? (
                  <span 
                    className="px-2 py-0.5 text-xs font-bold text-white rounded-full shadow-xs"
                    style={{ backgroundColor: 'var(--accent-primary)' }}
                  >
                    {item.count}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="pt-2">
          <Link
            to="/explore"
            onClick={() => setSidebarOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-white font-medium rounded-xl text-sm shadow-sm transition-all hover:opacity-90"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Post a Deal</span>
          </Link>
        </div>
      </div>

      <div className="space-y-3 pt-4 border-t border-[var(--border-color)]">
        <button
          onClick={toggleDarkMode}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors hover:opacity-80"
          style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
        >
          <div className="flex items-center gap-3">
            {darkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-[var(--text-muted)]" />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <span className="text-xs opacity-50">Theme Toggle</span>
        </button>

        {user ? (
          <div 
            className="flex items-center justify-between p-2 rounded-xl border border-[var(--border-color)]"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                style={{ backgroundColor: 'var(--accent-primary)' }}
              >
                SJ
              </div>
              <div className="truncate text-left">
                <p className="text-sm font-semibold text-[var(--text-main)] truncate">{user.name}</p>
                <p className="text-xs text-[var(--text-muted)] truncate">{user.email}</p>
              </div>
            </div>
            <button 
              onClick={() => { logout(); setSidebarOpen(false); }}
              className="p-1.5 text-[var(--text-muted)] hover:text-red-400 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            onClick={() => setSidebarOpen(false)}
            className="block text-center py-2.5 rounded-xl text-sm font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-main)' }}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Standard desktop sidebar */}
      <aside className="w-64 shrink-0 hidden lg:block h-[calc(100vh-4rem)] sticky top-16 p-4 border-r border-[var(--border-color)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile collapsible slide-out drawer overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
          
          {/* Drawer content */}
          <aside 
            className="relative w-72 max-w-[80%] h-full p-5 shadow-2xl flex flex-col overflow-y-auto transition-transform"
            style={{ backgroundColor: 'var(--bg-base)' }}
          >
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
