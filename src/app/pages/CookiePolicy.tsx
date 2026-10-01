import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen text-white font-['Barlow',sans-serif] bg-transparent">
      <div className="w-full flex flex-col relative pt-12 md:pt-24 z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <Link scroll={false} href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider uppercase text-[#50C1BA]">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: October 1, 2026</p>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. This policy also covers similar technologies, such as your browser&apos;s local and session storage.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies and Similar Technologies</h2>
              <p>This website does not set any cookies of its own. It uses your browser&apos;s storage in the following ways:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Local Storage:</strong> remembers your response to the cookie notice so it is not shown again.</li>
                <li><strong>Session Storage:</strong> temporarily remembers your position on the homepage so that returning from a project takes you back to where you were. It is cleared when you close the tab.</li>
                <li><strong>Analytics:</strong> we use Vercel Web Analytics, which does not use cookies or store anything on your device. It reports aggregated, anonymous traffic information only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Cookies</h2>
              <p>Videos on this website, including the homepage background video, are embedded from YouTube. When a page containing a video loads, YouTube may set cookies on your device. We do not use advertising cookies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Your Choices Regarding Cookies</h2>
              <p>You can set or amend your web browser controls to accept, refuse or delete cookies, including third-party cookies set by YouTube. If you block third-party cookies you can still use this website, although embedded videos may not play.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
