import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen text-white font-['Barlow',sans-serif] bg-transparent">
      <div className="w-full flex flex-col relative pt-28 md:pt-36 z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <Link scroll={false} href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider uppercase text-[#50C1BA]">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: October 1, 2026</p>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p>Welcome to VisualRif. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contact Data:</strong> if you email or call us, your name, email address, telephone number and the content of your message.</li>
                <li><strong>Technical Data:</strong> your internet protocol (IP) address, browser type and version, operating system and device information, processed by our hosting provider to deliver and secure the website.</li>
                <li><strong>Usage Data:</strong> aggregated information about how the website is used — such as pages viewed, referring websites, country, browser, operating system and device type — collected with Vercel Web Analytics. It does not use cookies and does not identify you personally.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Third-Party Services</h2>
              <p>This website relies on the following third parties, which may process your data:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Vercel:</strong> hosts the website and provides Vercel Web Analytics. Vercel processes IP addresses and request data to serve and protect the site.</li>
                <li><strong>Google Fonts:</strong> the website&apos;s fonts are loaded from Google&apos;s servers, which receive your IP address when the fonts are requested.</li>
                <li><strong>YouTube:</strong> videos are embedded from YouTube. When a page containing a video loads, YouTube may set cookies and collect data in line with Google&apos;s privacy policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}