
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Github, Menu, X } from 'lucide-react';

const XLogo = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.622l-5.187-6.789-5.94 6.789H1.44l7.73-8.835L1.5 2.25h6.789l4.7 6.205L18.244 2.25zm-1.161 17.52h1.833L7.748 4.126H5.78l11.303 15.644z" />
  </svg>
);

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
            alt="LESA Logo" 
            width="28"
            height="28"
            fetchPriority="high"
            className="h-7 mr-2"
          />
          <span className="text-gradient font-semibold">LESA</span>
          <span className="ml-2 text-sm text-muted-foreground font-light hidden md:inline">
            Legal Engineering Standards Association
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
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/Legal-Engineering-Standards-Association"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LESA on GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://x.com/lesa_law"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LESA on X"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <XLogo size={18} />
            </a>
          </div>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2S2x63ewcDiqeYVjHBnZS192NgDdgHDS74CKVuLv7xZVu-A/viewform?usp=dialog" 
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
              alt="LESA Logo" 
              width="32"
              height="32"
              className="h-8 mr-3"
            />
            <span className="text-gradient">LESA</span>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2S2x63ewcDiqeYVjHBnZS192NgDdgHDS74CKVuLv7xZVu-A/viewform?usp=dialog" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent/90 text-white px-6 py-3 rounded-md text-lg font-medium mt-4 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="https://github.com/Legal-Engineering-Standards-Association"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LESA on GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Github size={22} />
          </a>
          <a
            href="https://x.com/lesa_law"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LESA on X"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XLogo size={22} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
