
import { FileJson, Layers, Scale, Lock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Overview = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="overview" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-secondary/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMjkuOTk5IDU5Ljk5OWgzMFYzMGgtMzB2MzB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwVjBIMHYzMHptMCAzMGgzMFYzMEgwdjMweiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30 -z-10"></div>
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block mb-2">
              <span className="chip bg-accent/10 text-accent border border-accent/20">Our Mission</span>
            </div>
            <h2 className="section-title">
              <span className="block mb-1">A Home for</span>
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">Legal Engineering</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              The Legal Engineering Standards Organization (LESO) is a neutral, community-led effort to support the emerging field of legal engineering. 
              By fostering collaborative frameworks that converge toward a unified standard, LESO bridges legal reasoning and software design in ways that are resilient, 
              interoperable, and future-focused.
            </p>
            <p className="text-muted-foreground mb-6">
              Legal engineering has a rich history—from early markup languages and contract modeling to Ricardian contracts in the 1990s. 
              Today, a new generation of tools—blockchain, AI, and programmable infrastructure—are transforming how legal agreements are created, 
              enforced, and understood. LESO provides a place for professionals across law, technology, and policy to collaborate on a common standard 
              that will guide this evolution while allowing for diverse contributions and perspectives.
            </p>
            <a 
              href="#" 
              className="group inline-flex items-center gap-2 text-accent"
            >
              <span className="relative overflow-hidden">
                <span className="relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">Read our whitepaper</span>
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            {[
              { 
                icon: <Layers className="w-8 h-8 text-accent" />, 
                title: "Interoperability", 
                description: "A unified standard connecting law and code" 
              },
              { 
                icon: <FileJson className="w-8 h-8 text-accent" />, 
                title: "Classification", 
                description: "Shared language for describing legal-tech solutions" 
              },
              { 
                icon: <Scale className="w-8 h-8 text-accent" />, 
                title: "Transparency", 
                description: "Documenting legal semantics in machine-readable formats" 
              },
              { 
                icon: <Lock className="w-8 h-8 text-accent" />, 
                title: "Security", 
                description: "Defining protections for digital-first legal agreements" 
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass relative bg-white/80 backdrop-blur p-6 rounded-xl border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 relative">
                  <div className={`absolute -inset-2 bg-accent/10 rounded-full transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="relative">{item.icon}</div>
                </div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
