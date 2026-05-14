import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { useApp } from '../app/AppContext';
import { Tag, LogIn } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("sarah.j@example.com");
  const [password, setPassword] = useState("••••••••");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      login(email, "Sarah Jenkins");
      navigate('/feed');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login("google.user@gmail.com", "Alex Hunter");
      navigate('/feed');
    }, 1000);
  };

  return (
    <SimpleLayout>
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4 py-16 select-none relative z-10">
        <div 
          className="w-full max-w-md rounded-3xl border p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="text-center mb-8">
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-md"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              <Tag className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-[var(--text-main)] tracking-tight">
              Welcome Back
            </h2>
            <p className="text-sm text-[var(--text-muted)] mt-2 font-medium">
              Sign in to DealPulse to continue saving on real-time deals.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
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

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">
                  Password
                </label>
                <a 
                  href="#forgot" 
                  onClick={(e) => { e.preventDefault(); alert("Password reset link sent to email!"); }} 
                  className="text-xs font-bold hover:underline"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Forgot password?
                </a>
              </div>
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

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-sm text-[var(--text-muted)] font-medium">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded"
                  style={{ accentColor: 'var(--accent-primary)' }}
                />
                <span>Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-white font-black shadow-lg transition-all flex items-center justify-center gap-2 text-sm hover:opacity-90"
              style={{ backgroundColor: 'var(--accent-primary)' }}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </>
              )}
            </button>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" style={{ borderColor: 'var(--border-color)' }} />
            </div>
            <span 
              className="relative px-4 text-xs font-bold uppercase tracking-widest"
              style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-muted)' }}
            >
              Or
            </span>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full py-3.5 rounded-xl border font-bold transition-all flex items-center justify-center gap-3 text-sm shadow-xs hover:opacity-80"
            style={{ 
              backgroundColor: 'var(--bg-surface)', 
              borderColor: 'var(--border-color)', 
              color: 'var(--text-main)' 
            }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.2 8.9 5 12 5z"/>
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
              <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.4s.2-1.7.4-2.4L1.6 7.1C.6 9.1 0 11.5 0 14s.6 4.9 1.6 6.9l3.7-2.9z"/>
              <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-2.9l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.1 0-5.8-2.2-6.7-5.3L1.6 16C3.5 19.9 7.4 23 12 23z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <p className="text-center text-xs text-[var(--text-muted)] mt-8 font-medium">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-bold hover:underline" style={{ color: 'var(--accent-primary)' }}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </SimpleLayout>
  );
};
