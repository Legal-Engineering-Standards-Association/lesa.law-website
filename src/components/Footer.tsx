
import { Github, Twitter, ArrowRight, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-primary text-primary-foreground pt-20 pb-10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMjkuOTk5IDU5Ljk5OWgzMFYzMGgtMzB2MzB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwVjBIMHYzMHptMCAzMGgzMFYzMEgwdjMweiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-float-slow"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-lg animate-fade-in mb-16">
          <h2 className="text-3xl font-light mb-2">Get in Touch</h2>
          <div className="w-16 h-1 bg-accent mb-6"></div>
          <p className="text-primary-foreground/70 mb-6">
            Have questions or want to contribute to LESA? Contact our team.
          </p>
          
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSf2S2x63ewcDiqeYVjHBnZS192NgDdgHDS74CKVuLv7xZVu-A/viewform?usp=dialog" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 inline-flex items-center"
          >
            Contact Us
          </a>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2025 Legal Engineering Standards Association. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/privacy-policy" 
              className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 link-hover"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
