
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

const Benefits = () => {
  const [activeTab, setActiveTab] = useState('engineers');
  
  const tabs = [
    { id: 'engineers', label: 'For Legal Engineers' },
    { id: 'developers', label: 'For Developers' },
    { id: 'institutions', label: 'For Institutions' },
  ];
  
  const benefits = {
    engineers: [
      "Reduce ambiguity in computable contracts",
      "Collaborate using modular, interoperable formats",
      "Establish shared definitions for terms and classifications",
      "Enable consistent, reusable components for digital legal work",
      "Contribute to foundational infrastructure for 21st-century law"
    ],
    developers: [
      "Access open, structured schemas for legal content",
      "Integrate smart contracts with standardized legal definitions",
      "Rely on consistent validation and enforcement logic",
      "Reduce development overhead by building on shared protocols",
      "Stay aligned with legal and regulatory expectations"
    ],
    institutions: [
      "Improve compliance and reduce risk through standardization",
      "Adopt future-proof frameworks for digital legal assets",
      "Lower operational costs for legal automation",
      "Participate in the evolution of global legal infrastructure",
      "Collaborate with a professional network of legal engineers and technologists"
    ]
  };

  return (
    <section id="benefits" className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2">
            <span className="chip">Benefits</span>
          </div>
          <h2 className="section-title">Why Legal Engineering Needs Standards</h2>
          <p className="text-muted-foreground">
            Legal engineering operates at the intersection of law and computation. Standards help establish 
            shared language, interoperable systems, and reliable implementations—enabling collaboration across 
            jurisdictions, platforms, and communities.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-md p-1 mb-8">
              <div className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={cn(
                      "flex-1 py-3 px-4 text-sm font-medium rounded-xl transition-all duration-300",
                      activeTab === tab.id 
                        ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-sm" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4 animate-fade-in" key={activeTab}>
              {benefits[activeTab as keyof typeof benefits].map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="rounded-2xl bg-secondary/20 p-8 border border-secondary">
              <div className="glass text-xs font-mono bg-white p-6 rounded-xl max-h-96 overflow-hidden animate-blur-in">
                <pre className="whitespace-pre-wrap break-words">
{`{
  "$schema": "https://lesa.law/schema/v1.0/agreement.json",
  "metadata": {
    "title": "Smart Contract License Agreement",
    "version": "1.0.0",
    "timestamp": "2023-04-01T12:00:00Z",
    "uuid": "f47ac10b-58cc-4372-a567-0e02b2c3d479"
  },
  "parties": [
    {
      "id": "party-licensor",
      "name": "AI Solutions Inc.",
      "type": "organization",
      "jurisdiction": "Delaware, USA",
      "identifiers": {
        "legalEntityId": "US-DE-12345678",
        "walletAddress": "0x1234567890123456789012345678901234567890"
      }
    },
    {
      "id": "party-licensee",
      "name": "Legal Engineering Ltd.",
      "type": "organization",
      "jurisdiction": "United Kingdom",
      "identifiers": {
        "legalEntityId": "GB-12345678",
        "walletAddress": "0x0987654321098765432109876543210987654321"
      }
    }
  ],
  "definitions": {
    "licensed_technology": "The smart contract code described in Appendix A",
    "license_fee": "5 ETH",
    "term": "12 months from the Effective Date"
  },
  "terms": [
    {
      "id": "term-license-grant",
      "title": "License Grant",
      "content": "Subject to the terms and conditions of this Agreement, Licensor grants Licensee a non-exclusive, non-transferable license to use the Licensed Technology for the Term.",
      "smartContractReference": {
        "address": "0x5678901234567890123456789012345678901234",
        "function": "grantLicense",
        "parameters": ["$party-licensee.walletAddress", "$term"]
      }
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
