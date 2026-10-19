import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../components/Footer';

export default function GDPR() {
  return (
    <div className="min-h-screen text-white font-['Barlow',sans-serif] bg-transparent">
      <div className="w-full flex flex-col relative pt-28 md:pt-36 z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <Link scroll={false} href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider uppercase text-[#50C1BA]">GDPR Compliance & Data Usage</h1>
          <p className="text-gray-400 mb-8">Last Updated: October 1, 2026</p>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Your UK GDPR Rights</h2>
              <p>Under the UK General Data Protection Regulation (UK GDPR), you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                <li><strong>Consent withdrawal:</strong> You have the right to withdraw your consent at any time where we rely on your consent to process your personal data.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Third-Party Services and Data Sharing</h2>
              <p>We use the following third-party services which may collect or process your data:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Vercel Web Analytics:</strong> We use Vercel Web Analytics to understand aggregate traffic to our website. It does not use cookies and reports anonymous information such as pages viewed, referrer, country, browser and device type.</li>
                <li><strong>YouTube Embeds:</strong> Videos on our site are embedded from YouTube. Viewing these videos may result in YouTube placing cookies on your device and tracking your viewing behavior.</li>
                <li><strong>Hosting (Vercel):</strong> Our website is hosted by Vercel, which delivers content through its global network and logs IP addresses for security and performance monitoring.</li>
                <li><strong>Google Fonts:</strong> Our fonts are loaded from Google&apos;s servers, which receive your IP address when the fonts are requested.</li>
                <li><strong>Email and Telephone:</strong> If you contact us by email or phone, we use the details you provide only to respond to you. They are not shared with third parties except as required for email delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Exercising Your Rights</h2>
              <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at our email: <strong>hello@visualrif.com</strong>.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
