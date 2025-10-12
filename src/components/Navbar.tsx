
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = ['overview', 'benefits', 'membership'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20" : "bg-transparent"
      )}
    >
      <div className="container-custom mx-auto flex items-center justify-between py-4">
        <a 
          href="/" 
          className="text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80 flex items-center"
        >
          <img 
            src="/lovable-uploads/f99e6c39-f7d9-4b03-ab9b-5fa4cc593801.png" 
            alt="LESO Logo" 
            width="28"
            height="28"
            fetchPriority="high"
            className="h-7 mr-2"
          />
          <span className="text-gradient font-semibold">LESO</span>
          <span className="ml-2 text-sm text-muted-foreground font-light hidden md:inline">
            Legal Engineering Standards Organization
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Overview', 'Benefits', 'Membership'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={cn(
                "text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300",
                activeSection === item.toLowerCase() 
                  ? "text-accent after:w-full" 
                  : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
              )}
            >
              {item}
            </a>
          ))}
          <a 
            href="https://forms.gle/vAFMbfzsJLeEwBXx9" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 glass transition-opacity duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <a 
            href="/"
            className="text-2xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80 mb-8 flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img 
              src="/lovable-uploads/f99e6c39-f7d9-4b03-ab9b-5fa4cc593801.png" 
              alt="LESO Logo" 
              width="32"
              height="32"
              className="h-8 mr-3"
            />
            <span className="text-gradient">LESO</span>
          </a>
          {['Overview', 'Benefits', 'Membership'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xl font-medium relative link-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="https://forms.gle/vAFMbfzsJLeEwBXx9" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent/90 text-white px-6 py-3 rounded-md text-lg font-medium mt-4 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
