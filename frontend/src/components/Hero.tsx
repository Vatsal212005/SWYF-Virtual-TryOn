import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70 animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl opacity-60 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 space-y-8 fadeIn">
            <div className="inline-block slideRight animation-delay-100">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                AI-Powered Fashion Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight slideUp animation-delay-200">
              <span className="text-gradient">SWYF</span> - <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl italic">See What You Fit</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl slideUp animation-delay-300">
              AI-powered virtual try-on for the perfect fit—anytime, anywhere. See exactly how clothes will look on you before purchasing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 slideUp animation-delay-400">
              <Link to="/projects" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hover:shadow-xl flex items-center justify-center">
                <Sparkles className="mr-2" size={18} />
                Virtual Try-On
              </Link>
              <Link to="/business-model" className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center">
                Partner With Us
              </Link>
            </div>
            
            <div className="pt-6 flex items-center space-x-4 slideUp animation-delay-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-300 border-2 border-white flex items-center justify-center text-xs text-white">JD</div>
                <div className="w-8 h-8 rounded-full bg-purple-300 border-2 border-white flex items-center justify-center text-xs text-white">MK</div>
                <div className="w-8 h-8 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-xs text-white">SR</div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs text-white">+5k</div>
              </div>
              <p className="text-sm text-foreground/70">
                Join <span className="font-medium text-foreground">5,000+</span> fashion enthusiasts
              </p>
            </div>
          </div>
          
          {/* Right column - Image/Visualization */}
          <div className="w-full lg:w-1/2 scaleIn animation-delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl filter blur-xl opacity-70"></div>
              <div className="glass-morphism rounded-2xl overflow-hidden p-4 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <AspectRatio ratio={4/5} className="bg-accent/10 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                        alt="Virtual try-on experience" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <AspectRatio ratio={1/1} className="bg-primary/10 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920" 
                        alt="Fashion selection" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  <div className="space-y-4">
                    <AspectRatio ratio={1/1} className="bg-secondary/10 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920" 
                        alt="Shopping experience" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                    <AspectRatio ratio={4/5} className="bg-accent/20 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1566206091558-7f218b696731?q=80&w=1920" 
                        alt="AI fashion technology" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 glass-card rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Simulated Preview</h3>
                    <p className="text-xs text-foreground/70">See how clothes fit your style in real-time</p>
                  </div>
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full bg-red-400 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-green-400 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-yellow-400 border border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
