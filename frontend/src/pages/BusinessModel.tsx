import { CreditCard, BarChart, ShoppingBag, Store, ChevronRight, CheckCircle, Briefcase, Building, Globe, DollarSign } from 'lucide-react';
import Layout from '@/components/Layout';
const BusinessModel = () => {
  return <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-accent/20 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium inline-block mb-4">
              Our Revenue Model
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              How <span className="text-gradient">Swyf</span> Creates Value
            </h1>
            <p className="text-lg text-foreground/80">A comprehensive overview of our B2C and B2B revenue streams, demonstrating how Swyf builds a sustainable business while revolutionizing fashion retail.</p>
          </div>
        </section>
        
        {/* Business Model Overview */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* For Online & App-Based Try-On */}
            <div className="glass-card rounded-2xl p-8 fadeIn">
              <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
                <ShoppingBag size={24} className="text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6">For Online & App-Based Try-On</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <CreditCard size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Subscription Plans</h3>
                    <p className="text-foreground/70 text-sm">
                      Retailers can choose from tiered monthly or yearly subscription plans based on their size and integration needs, with packages designed for businesses of all sizes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <DollarSign size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Transaction Fees</h3>
                    <p className="text-foreground/70 text-sm">
                      A small commission is charged for each purchase made through our platform, creating a revenue stream that scales with our partners' success and incentivizing us to optimize conversion rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">B2B Licensing</h3>
                    <p className="text-foreground/70 text-sm">
                      Fashion brands and online retailers can license our technology to integrate virtual try-on capabilities directly into their own platforms, with custom solutions available for enterprise clients.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Freemium Model</h3>
                    <p className="text-foreground/70 text-sm">
                      Basic features are available at no cost to consumers and small retailers, while premium analytics, customization options, and advanced features are offered through paid tiers.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Scalable pricing models</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Performance-based revenue</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Enterprise solutions</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For In-Store Virtual Mirror Integration */}
            <div className="glass-card rounded-2xl p-8 fadeIn animation-delay-100">
              <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                <Store size={24} className="text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold mb-6">For In-Store Virtual Mirror Integration</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Building size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Retail Virtual Mirror Setup</h3>
                    <p className="text-foreground/70 text-sm">
                      We provide complete hardware and software solutions for in-store virtual mirrors, offering both outright purchase and hardware-as-a-service models for physical retail locations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Integration Fees</h3>
                    <p className="text-foreground/70 text-sm">
                      One-time and ongoing fees for integrating our virtual try-on technology with existing point-of-sale systems, inventory management software, and other retail infrastructure.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <BarChart size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Customer Engagement Analytics</h3>
                    <p className="text-foreground/70 text-sm">
                      Premium retail analytics packages provide detailed insights on shopper preferences, behavior patterns, and conversion metrics, helping retailers optimize their merchandise mix and store layouts.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <ShoppingBag size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Omnichannel Retail Expansion</h3>
                    <p className="text-foreground/70 text-sm">
                      Comprehensive solutions that unify online and offline shopping experiences, with revenue from implementation, training, and ongoing support services.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Hardware & software solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Retail analytics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Omnichannel integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Revenue Streams */}
          <div className="glass-card rounded-2xl p-8 mb-16 fadeIn">
            <h2 className="text-2xl font-bold mb-6">Additional Revenue Streams</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Data Insights (Anonymized)</h3>
                <p className="text-foreground/70 text-sm">
                  Aggregated, anonymized trend data provides valuable industry insights that we package and sell to fashion brands and market research firms.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">Premium Consumer Features</h3>
                <p className="text-foreground/70 text-sm">
                  Individual shoppers can upgrade to premium features like unlimited virtual closet storage, priority processing, and exclusive retail partnerships.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold mb-3">API Access for Developers</h3>
                <p className="text-foreground/70 text-sm">Third-party developers can access our API to build complementary apps and services that extend the Swyf ecosystem.</p>
              </div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="text-center max-w-3xl mx-auto mb-12 fadeIn">
            <h2 className="text-3xl font-display font-bold mb-6">
              Our Impact on Partner Success
            </h2>
            <p className="text-lg text-foreground/70 mb-8">When our partners succeed, we succeed. Here's how Swyf is transforming retail metrics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 fadeIn">
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">38%</div>
              <h3 className="font-bold mb-3">Reduction in Returns</h3>
              <p className="text-foreground/70 text-sm">
                Our partners see a significant decrease in return rates due to more accurate sizing and visualization.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">27%</div>
              <h3 className="font-bold mb-3">Increase in Conversion</h3>
              <p className="text-foreground/70 text-sm">
                Customers who use virtual try-on are significantly more likely to complete their purchase.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">42%</div>
              <h3 className="font-bold mb-3">Higher Cart Value</h3>
              <p className="text-foreground/70 text-sm">
                The confidence from virtual try-on leads to larger average order values for our retail partners.
              </p>
            </div>
          </div>
        </section>
        
        {/* Partner CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Ready to transform your retail business?
                </h2>
                <p className="text-lg text-foreground/70 mb-6">Join hundreds of successful retailers who have partnered with Swyf to reduce returns, increase conversions, and delight customers.</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Quick implementation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>ROI within months</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={16} className="text-primary" />
                    <span>Dedicated support team</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                    Partner With Us
                    <ChevronRight size={18} className="ml-1" />
                  </a>
                  <a href="#" className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center">
                    Request Demo
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/3 h-64 bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">
                Partner Graphic
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default BusinessModel;