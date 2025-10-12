
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

const Resources = () => {
  const documentTypes = [
    {
      title: "Specifications",
      description: "Technical documents defining legal data structures, contract components, and classification models",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { title: "Schema Overview", status: "Coming Soon" },
        { title: "Core Components", status: "Coming Soon" },
        { title: "Party Definitions", status: "Coming Soon" },
        { title: "Terms & Clauses", status: "Coming Soon" }
      ]
    },
    {
      title: "Guidelines",
      description: "Best practices for implementation, versioning, integration, and privacy",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { title: "Implementation Guide", status: "Coming Soon" },
        { title: "Contract Assembly", status: "Coming Soon" },
        { title: "Smart Contract Integration", status: "Coming Soon" },
        { title: "Data Privacy", status: "Coming Soon" }
      ]
    },
    {
      title: "Reference Materials",
      description: "Supporting resources including whitepapers, sample agreements, and validation tools",
      icon: <FileText className="w-6 h-6" />,
      items: [
        { title: "Whitepaper", status: "Available" },
        { title: "Sample Agreements", status: "Coming Soon" },
        { title: "Validation Tools", status: "Coming Soon" },
        { title: "Sample Code", status: "Coming Soon" }
      ]
    }
  ];

  return (
    <section id="resources" className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2">
            <span className="chip">Resources</span>
          </div>
          <h2 className="section-title">Documentation & Support</h2>
          <p className="text-muted-foreground">
            Our resources support legal engineers and developers in understanding, implementing, 
            and building upon the standards developed by LESO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {documentTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-secondary/50 rounded-full w-fit">{type.icon}</div>
              <h3 className="text-xl font-medium mb-3">{type.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{type.description}</p>
              
              <div className="space-y-4">
                {type.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{item.title}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${item.status === 'Available' ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4">Standards Development Roadmap</h3>
              <p className="text-muted-foreground mb-6">
                Our roadmap outlines the planned development of standards for legal engineering, 
                including key milestones and target dates.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-accent hover:text-accent/90 transition-colors duration-300 font-medium"
              >
                <span>View Full Roadmap</span>
                <ArrowRight size={16} />
              </a>
            </div>
            
            <div className="space-y-4">
              {[
                { phase: "Phase 1", title: "Foundational Schema & Classifications", date: "Q3 2023", status: "In Progress" },
                { phase: "Phase 2", title: "Smart Contract Integration", date: "Q4 2023", status: "Planned" },
                { phase: "Phase 3", title: "Compliance & Validation Frameworks", date: "Q1 2024", status: "Planned" },
                { phase: "Phase 4", title: "Ecosystem & Tooling", date: "Q2 2024", status: "Planned" }
              ].map((phase, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 flex-shrink-0">
                    <span className="text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="flex-grow border-b border-dashed border-secondary pb-2">
                    <span className="font-medium">{phase.title}</span>
                  </div>
                  <div className="w-20 flex-shrink-0 text-sm text-right">{phase.date}</div>
                  <div className="w-24 flex-shrink-0">
                    <span className={`text-xs px-2 py-1 rounded-full ${phase.status === 'In Progress' ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                      {phase.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/90 transition-colors duration-300"
          >
            <span>External References</span>
            <ExternalLink size={16} />
          </a>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {["W3C", "IETF", "ISO", "Ricardian Contracts", "Legal Markup Standards", "Blockchain Protocol Standards"].map((resource, i) => (
              <a 
                key={i} 
                href="#" 
                className="text-xs bg-secondary px-3 py-1 rounded-full hover:bg-secondary/70 transition-colors duration-300"
              >
                {resource}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
