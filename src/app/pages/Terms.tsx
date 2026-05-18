import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Footer } from '../components/Footer';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen text-white font-['Barlow',sans-serif] bg-transparent">
      <div className="w-full flex flex-col relative pt-12 md:pt-24 z-10 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full flex-grow mb-32">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider uppercase text-[#50C1BA]">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8">Last Updated: May 18, 2026</p>
          
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
              <p>By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Intellectual Property Rights</h2>
              <p>Other than the content you own, under these Terms, VisualRif and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Restrictions</h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Publishing any Website material in any other media.</li>
                <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
                <li>Publicly performing and/or showing any Website material without attribution.</li>
                <li>Using this Website in any way that is or may be damaging to this Website.</li>
                <li>Using this Website in any way that impacts user access to this Website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitation of Liability</h2>
              <p>In no event shall VisualRif, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. VisualRif, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
