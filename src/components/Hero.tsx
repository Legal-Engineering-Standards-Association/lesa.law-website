
import { ArrowRight } from 'lucide-react';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="chip bg-secondary/50 backdrop-blur-sm border border-white/10 py-1.5 px-4">Coming Soon</span>
          </div>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/f99e6c39-f7d9-4b03-ab9b-5fa4cc593801.png" 
              alt="LESA Logo" 
              width="auto"
              height="96"
              fetchPriority="high"
              className="h-24" 
              style={{
                maxWidth: '100%'
              }} 
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-6 animate-fade-in flex flex-col">
            <span className="font-normal bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-2 py-[8px]">
              Legal Engineering
            </span>
            <span>Standards Association</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            A global forum for defining open, interoperable standards for the future of legal agreements in a world shaped by AI, blockchain, and smart systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <a href="https://forms.gle/vAFMbfzsJLeEwBXx9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent/90 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 w-full sm:w-auto relative overflow-hidden group">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </a>
            <a href="https://forms.gle/vAFMbfzsJLeEwBXx9" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 text-accent hover:text-accent/90 transition-colors duration-300 px-6 py-3 w-full sm:w-auto">
              <span>Join the Association</span>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#overview" className="opacity-50 hover:opacity-100 transition-opacity duration-300">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>;
};
export default Hero;
