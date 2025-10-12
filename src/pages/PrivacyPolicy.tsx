
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle navigation back to home
  const handleBackToHome = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Effective Date: 07 April 2025</p>
            
            <div className="prose prose-slate max-w-none">
              <p>
                LESO.law ("we", "our", or "us") respects your privacy and is committed to 
                protecting it. This Privacy Policy explains how we collect, use, and protect 
                information when you visit our website.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We do not collect any personally identifiable information (PII) directly 
                through our website. However, we use a third-party service, FullStory, to 
                help us understand how users interact with our site and improve their experience.
              </p>
              <p>FullStory may collect information such as:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Pages visited and time spent</li>
                <li>Clicks and mouse movements</li>
                <li>Browser and device information</li>
                <li>Referring URLs</li>
              </ul>
              <p>This data is anonymized and used solely for website analytics and improvement.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Information</h2>
              <p>The information collected by FullStory is used to:</p>
              <ul className="list-disc ml-6 mb-6">
                <li>Understand how visitors use our website</li>
                <li>Improve usability and performance</li>
                <li>Identify and fix issues</li>
              </ul>
              <p>We do not use this data for advertising or marketing purposes.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Cookies</h2>
              <p>
                Our website may use cookies or similar technologies via FullStory. 
                Cookies are small data files stored on your device that help analyze web 
                traffic and track site usage.
              </p>
              <p>You can disable cookies through your browser settings if you prefer.</p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your data to outside parties. 
                FullStory acts as a data processor on our behalf and is subject to their 
                own Privacy Policy.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Choices</h2>
              <p>
                You can opt out of FullStory tracking by visiting:{" "}
                <a 
                  href="https://www.fullstory.com/optout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  https://www.fullstory.com/optout
                </a>
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be 
                posted on this page with an updated effective date.
              </p>
              
              <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a 
                  href="mailto:team@sobol.io"
                  className="text-accent hover:underline"
                >
                  team@sobol.io
                </a>
              </p>
            </div>
            
            <div className="mt-12 pt-6 border-t">
              <Link 
                to="/" 
                className="text-accent hover:underline flex items-center gap-2"
                onClick={handleBackToHome}
              >
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
