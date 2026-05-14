import React, { createContext, useContext, useState, useEffect } from 'react';
import { Deal, Store, INITIAL_DEALS, INITIAL_STORES, INITIAL_NOTIFICATIONS } from '../data/deals';

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  deals: Deal[];
  stores: Store[];
  notifications: typeof INITIAL_NOTIFICATIONS;
  user: { name: string; email: string; isLoggedIn: boolean } | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
  toggleBookmark: (dealId: number) => void;
  toggleFollow: (storeHandle: string) => void;
  markNotificationsRead: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('dealpulse_dark');
    return saved ? JSON.parse(saved) : true;
  });

  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [stores, setStores] = useState<Store[]>(INITIAL_STORES);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [user, setUser] = useState<{ name: string; email: string; isLoggedIn: boolean } | null>({
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    isLoggedIn: true
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Deals");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('dealpulse_dark', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const login = (email: string, name = "Deal Hunter") => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleBookmark = (dealId: number) => {
    setDeals(prevDeals =>
      prevDeals.map(deal =>
        deal.id === dealId ? { ...deal, bookmarked: !deal.bookmarked } : deal
      )
    );
  };

  const toggleFollow = (storeHandle: string) => {
    setStores(prevStores =>
      prevStores.map(st =>
        st.handle.toLowerCase() === storeHandle.toLowerCase() ? { ...st, isFollowed: !st.isFollowed } : st
      )
    );
  };

  const markNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      deals,
      stores,
      notifications,
      user,
      login,
      logout,
      toggleBookmark,
      toggleFollow,
      markNotificationsRead,
      searchQuery,
      setSearchQuery,
      selectedCategory,
      setSelectedCategory,
      sidebarOpen,
      setSidebarOpen
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};
