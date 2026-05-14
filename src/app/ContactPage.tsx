import React, { useState } from 'react';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Support");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      setSubmitted(true);
    }
  };

  const inputStyle = {
    backgroundColor: 'var(--bg-base)',
    borderColor: 'var(--border-color)',
    color: 'var(--text-main)'
  };

  return (
    <SimpleLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 select-none relative z-10">
        <div className="text-center space-y-4">
          <div 
            className="w-16 h-16 rounded-3xl flex items-center justify-center text-white mx-auto shadow-md"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          >
            <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[var(--text-main)] tracking-tight leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our affiliate partnerships, promotional feed drops, or app support? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Quick contact info */}
          <div 
            className="rounded-3xl p-8 border space-y-6 shadow-xs"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
          >
            <h3 className="font-black text-[var(--text-main)] text-xl">Contact Information</h3>
            
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] font-medium">
              <Mail className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <p className="text-xs uppercase tracking-wider font-black mb-1 opacity-70">Email Us</p>
                <a href="mailto:support@dealpulse.com" className="font-bold hover:underline text-[var(--text-main)] text-base">
                  support@dealpulse.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3" style={{ borderColor: 'var(--border-color)' }}>
              <p className="text-xs uppercase tracking-wider font-black opacity-70 text-[var(--text-muted)]">Connect on Social</p>
              <div className="flex gap-4 text-[var(--text-muted)] font-semibold text-sm">
                <a href="#twitter" className="transition-colors hover:opacity-70" style={{ color: 'var(--accent-primary)' }}>Twitter/X</a>
                <a href="#instagram" className="transition-colors hover:opacity-70" style={{ color: 'var(--accent-primary)' }}>Instagram</a>
                <a href="#slickdeals" className="transition-colors hover:opacity-70" style={{ color: 'var(--accent-primary)' }}>Slickdeals</a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div 
            className="lg:col-span-2 rounded-3xl p-8 border shadow-xs"
            style={{ backgroundColor: 'var(--bg-surface)', borderColor: 'var(--border-color)' }}
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 mx-auto animate-bounce" style={{ color: 'var(--accent-primary)' }} />
                <h3 className="text-2xl font-black text-[var(--text-main)]">Message Received!</h3>
                <p className="text-sm text-[var(--text-muted)] font-medium max-w-md mx-auto">
                  Thank you for reaching out to DealPulse. Our support and affiliate partnership team will respond to your email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-white font-bold text-sm transition-transform hover:scale-[1.02] active:scale-95 shadow-sm mt-4"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[var(--text-main)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Hunter"
                      className="w-full px-4 py-3 rounded-xl border outline-none text-sm font-medium transition-all focus:ring-2 focus:ring-blue-500/20"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[var(--text-main)] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border outline-none text-sm font-medium transition-all focus:ring-2 focus:ring-blue-500/20"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[var(--text-main)] mb-2">
                    Subject / Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border outline-none text-sm font-medium transition-all focus:ring-2 focus:ring-blue-500/20"
                    style={inputStyle}
                  >
                    <option value="General Support">General Support</option>
                    <option value="Affiliate Partnership">Affiliate Partnership</option>
                    <option value="Report Expired Deal">Report Expired Deal</option>
                    <option value="Brand Advertising">Brand Advertising</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[var(--text-main)] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 rounded-xl border outline-none text-sm font-medium transition-all focus:ring-2 focus:ring-blue-500/20"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-black transition-transform hover:scale-[1.02] active:scale-95 shadow-sm flex items-center justify-center gap-2 text-sm"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};
