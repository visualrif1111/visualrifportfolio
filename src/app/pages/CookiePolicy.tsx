import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen text-white font-['Barlow',sans-serif] bg-transparent">
      <div className="w-full flex flex-col relative pt-12 md:pt-24 z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider uppercase text-[#50C1BA]">Cookie Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: May 18, 2026</p>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. What Are Cookies?</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services available through our website and to use some of its features.</li>
                <li><strong>Performance and Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website and application for you.</li>
                <li><strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Third-Party Cookies</h2>
              <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the website and deliver advertisements on and through the website. Third-party cookies include Google Analytics and YouTube embed trackers.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Your Choices Regarding Cookies</h2>
              <p>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
