import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { useApp } from '../app/AppContext';
import { UserPlus, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/deals';

export const RegisterPage: React.FC = () => {
  const { login, stores } = useApp();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedCats, setSelectedCats] = useState<string[]>(["Electronics", "Apparel"]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(["nike", "amazon"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleToggleCat = (cat: string) => {
    if (selectedCats.includes(cat)) {
      setSelectedCats(selectedCats.filter(c => c !== cat));
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  const handleToggleBrand = (handle: string) => {
    if (selectedBrands.includes(handle)) {
      setSelectedBrands(selectedBrands.filter(b => b !== handle));
    } else {
      setSelectedBrands([...selectedBrands, handle]);
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      login(email, name || "New Deal Hunter");
      navigate('/feed');
    }, 1200);
  };

  return (
    <SimpleLayout>
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4 py-16 select-none relative z-10">
        <div 
          className="w-full max-w-xl rounded-3xl border p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="text-center mb-8">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-md"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-[var(--text-main)] tracking-tight">
              Join the VIP Deal Stream
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 font-medium">
              Create your account to unlock real-time alerts, bookmark deals, and follow top stores.
            </p>
          </div>

          {error && (
            <div className="p-3 mb-6 rounded-xl bg-red-100 border border-red-200 text-red-600 text-xs font-bold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all"
                  style={{ 
                    backgroundColor: 'var(--bg-surface)', 
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)' 
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all"
                  style={{ 
                    backgroundColor: 'var(--bg-surface)', 
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)' 
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all"
                  style={{ 
                    backgroundColor: 'var(--bg-surface)', 
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)' 
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border outline-none text-sm transition-all"
                  style={{ 
                    backgroundColor: 'var(--bg-surface)', 
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-main)' 
                  }}
                />
              </div>
            </div>

            {/* Optional category preferences */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                Favorite Categories (Optional)
              </label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.filter(c => c !== "All Deals").map((cat) => {
                  const isSel = selectedCats.includes(cat);
                  return (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => handleToggleCat(cat)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all shadow-xs"
                      style={{
                        backgroundColor: isSel ? 'var(--accent-primary)' : 'var(--bg-surface)',
                        color: isSel ? '#ffffff' : 'var(--text-main)',
                        borderColor: isSel ? 'var(--accent-primary)' : 'var(--border-color)'
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional brand preferences */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mb-2">
                Choose Favorite Brands (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {stores.map((store) => {
                  const isSel = selectedBrands.includes(store.handle);
                  return (
                    <div
                      key={store.handle}
                      onClick={() => handleToggleBrand(store.handle)}
                      className="p-3 rounded-xl border flex items-center gap-2 cursor-pointer transition-all select-none"
                      style={{
                        backgroundColor: isSel ? 'var(--bg-surface)' : 'transparent',
                        borderColor: isSel ? 'var(--accent-primary)' : 'var(--border-color)',
                        color: 'var(--text-main)'
                      }}
                    >
                      <img src={store.logo} alt={store.name} className="w-6 h-6 rounded-lg object-cover ring-1 ring-black/5 bg-white" />
                      <span className="text-xs font-black truncate">{store.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl text-white font-black shadow-lg transition-all flex items-center justify-center gap-2 text-sm hover:opacity-90"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  <span>Register & Join Feed</span>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-[var(--text-muted)] mt-8 font-medium">
            Already have an account?{' '}
            <Link to="/login" className="font-bold hover:underline" style={{ color: 'var(--accent-primary)' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};
