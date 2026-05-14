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

  return (
    <SimpleLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-4 mb-12">
          <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center text-white mx-auto shadow-xl shadow-blue-500/30">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have questions about our affiliate partnerships, promotional feed drops, or app support? Reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Quick contact info */}
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-800/80 p-8 border border-slate-200 dark:border-slate-700 space-y-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">Contact Information</h3>
            
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Us</p>
                <a href="mailto:support@dealpulse.com" className="font-bold hover:underline text-slate-900 dark:text-white">
                  support@dealpulse.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Connect on Social</p>
              <div className="flex gap-4 text-slate-600 dark:text-slate-300 font-semibold text-sm">
                <a href="#twitter" className="hover:text-blue-600 transition-colors">Twitter/X</a>
                <a href="#instagram" className="hover:text-blue-600 transition-colors">Instagram</a>
                <a href="#slickdeals" className="hover:text-blue-600 transition-colors">Slickdeals</a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-slate-800 p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Received!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out to DealPulse. Our support and affiliate partnership team will respond to your email within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Hunter"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-blue-500 outline-none text-sm text-slate-900 dark:text-white transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-blue-500 outline-none text-sm text-slate-900 dark:text-white transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Subject / Topic
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-blue-500 outline-none text-sm text-slate-900 dark:text-white transition-all shadow-sm"
                  >
                    <option value="General Support">General Support</option>
                    <option value="Affiliate Partnership">Affiliate Partnership</option>
                    <option value="Report Expired Deal">Report Expired Deal</option>
                    <option value="Brand Advertising">Brand Advertising</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you today?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-blue-500 outline-none text-sm text-slate-900 dark:text-white transition-all shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 text-sm"
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
