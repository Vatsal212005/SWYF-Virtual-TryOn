
import { Shield, Cpu, Palette, Store, Globe, Lock, Leaf, ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout';

const Features = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Innovative Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Experience Shopping <span className="text-gradient">Reimagined</span>
            </h1>
            <p className="text-lg text-foreground/80">
              SWYF enhances fashion shopping with cutting-edge AI and AR technology, creating a seamless, personalized experience that reduces returns and increases satisfaction.
            </p>
          </div>
        </section>
        
        {/* Feature List */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* Feature 1 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn">
              <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
                <Cpu size={24} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Personalization</h3>
              <p className="text-foreground/70 mb-4">
                Our AI analyzes your style preferences and body measurements to create a custom profile, offering smart outfit suggestions tailored specifically to you.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized style recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Adaptive learning from your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Outfit coordination suggestions</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-100">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                <Shield size={24} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time AR Try-On</h3>
              <p className="text-foreground/70 mb-4">
                See clothing items on your body in real-time with our advanced augmented reality technology that accurately sizes and positions garments.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Real-time visualization of clothes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Accurate size representation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Multiple angle viewing options</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 3 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-200">
              <div className="w-12 h-12 rounded-full bg-pink-400/10 flex items-center justify-center mb-6">
                <Palette size={24} className="text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skin Tone & Color Analysis</h3>
              <p className="text-foreground/70 mb-4">
                Our AI analyzes your skin tone and suggests colors and patterns that perfectly complement your unique features.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personalized color palette suggestions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Seasonal trend adaptations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Pattern and texture recommendations</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 4 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-300">
              <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
                <Store size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Virtual Mirror for Stores</h3>
              <p className="text-foreground/70 mb-4">
                Our in-store virtual mirror solution lets shoppers try clothes without changing, enhancing the retail experience with a seamless digital fitting room.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quick try-before-you-buy experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Full outfit coordination in-store</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Immediate size and color alternatives</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 5 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-400">
              <div className="w-12 h-12 rounded-full bg-indigo-400/10 flex items-center justify-center mb-6">
                <Globe size={24} className="text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Omnichannel Experience</h3>
              <p className="text-foreground/70 mb-4">
                Enjoy a consistent shopping experience across web, mobile app, and physical stores with your preferences and measurements synced across all platforms.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Cross-device profile synchronization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Continuing shopping sessions seamlessly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unified purchase history and preferences</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 6 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-500">
              <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center mb-6">
                <Lock size={24} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy & Security</h3>
              <p className="text-foreground/70 mb-4">
                Our on-device processing technology ensures your personal data stays private while you enjoy our advanced try-on experience.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>On-device processing of biometric data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Full GDPR and CCPA compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optional data sharing controls</span>
                </li>
              </ul>
            </div>
            
            {/* Feature 7 */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-500 md:col-span-2">
              <div className="w-12 h-12 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
                <Leaf size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability Impact</h3>
              <p className="text-foreground/70 mb-4">
                By reducing return rates dramatically, we help decrease packaging waste, carbon emissions from shipping, and the overall environmental footprint of fashion retail.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Up to 40% reduction in return rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Carbon footprint tracking for environmental impact</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Partnership with sustainable fashion brands</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Ready to experience the future of shopping?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Try our revolutionary virtual fitting room technology and see the difference for yourself.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center"
                >
                  Try It Now
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center"
                >
                  See It In Action
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;
