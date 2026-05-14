import React from 'react';
import { SimpleLayout } from '../layouts/SimpleLayout';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <SimpleLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Privacy Policy & Disclosures
            </h1>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Effective Date: January 1, 2026. Last updated: March 2026.
          </p>
        </div>

        {/* Affiliate Disclosure Notice Box */}
        <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/80 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Mandatory Affiliate Disclosure
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>This platform may earn commissions through affiliate partnerships.</strong> When you click on product links, promotional coupons, or store redirects listed on DealPulse and make a purchase, we may receive a commission from the merchant at no extra cost to you. This helps fund our real-time deal discovery infrastructure.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. User Data Handling</h2>
            <p>
              We prioritize your privacy. When you register an account, we collect basic profile information such as your name, email address, and saved store preferences. This data is utilized solely for authenticating your session, sending optional deal alerts, and tailoring your social shopping stream. We never sell your personal information to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Cookies and Storage</h2>
            <p>
              DealPulse uses cookies and local browser storage mechanisms to maintain user sessions, save your dark mode theme preferences (`#0f172a`), and remember your bookmarked deals. By continuing to use our service, you consent to our use of essential functional cookies required to render the application seamlessly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Analytics Tracking</h2>
            <p>
              To improve our real-time deal feed algorithms, we aggregate anonymized click-through velocity and bookmark counts. This analytics tracking helps us surface trending viral sales under our "Hot Today" and "Trending" explore feeds without tracking individual user browsing histories across external merchant websites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">4. Third-Party Merchant Links</h2>
            <p>
              Our live deal stream contains links to external ecommerce stores (e.g., Nike, Amazon, Apple). Once you leave DealPulse via an external link, your browsing and purchase activity are governed by the respective merchant's privacy policy and terms of service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">5. Your Rights and Choices</h2>
            <p>
              You maintain full control over your profile preferences. You can unfollow stores, clear your bookmarks, or request complete account deletion by contacting our privacy compliance team via our Contact page.
            </p>
          </section>
        </div>
      </div>
    </SimpleLayout>
  );
};
