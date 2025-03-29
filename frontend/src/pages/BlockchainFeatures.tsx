import { 
  Shield, 
  Network, 
  FileCode, 
  Eye, 
  Zap, 
  LockKeyhole, 
  CoinsIcon, 
  BarChart3, 
  RefreshCcw, 
  ArrowRightLeft, 
  ChevronRight,
  CreditCard,
  Clock,
  CheckCircle
} from 'lucide-react';
import Layout from '@/components/Layout';

const BlockchainFeatures = () => {
  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-blue-500/10 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium inline-block mb-4">
              Revolutionary Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Powered by <span className="text-gradient">Blockchain</span>
            </h1>
            <p className="text-lg text-foreground/80">
              SWYF integrates cutting-edge blockchain technology to enhance security, transparency, and efficiency in your fashion experience.
            </p>
          </div>
        </section>
        
        {/* Main Features */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Security Feature */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn">
              <div className="w-14 h-14 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                <Shield size={28} className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Enhanced Security</h3>
              <p className="text-foreground/70 mb-6">
                Our blockchain implementation provides industry-leading security for all your transactions and personal data, making your experience worry-free.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="mt-1">
                    <LockKeyhole size={18} className="text-blue-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Immutable Records</h4>
                    <p className="text-sm text-foreground/70">Once data is recorded on our blockchain, it cannot be altered, ensuring the integrity of all transactions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <Shield size={18} className="text-blue-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Cryptographic Protection</h4>
                    <p className="text-sm text-foreground/70">Advanced encryption secures your personal information and transaction history from unauthorized access.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decentralization Feature */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-100">
              <div className="w-14 h-14 rounded-full bg-purple-400/10 flex items-center justify-center mb-6">
                <Network size={28} className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Decentralization</h3>
              <p className="text-foreground/70 mb-6">
                Our decentralized approach eliminates single points of failure and distributes control, creating a more resilient and democratic fashion ecosystem.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="mt-1">
                    <ArrowRightLeft size={18} className="text-purple-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Peer-to-Peer Network</h4>
                    <p className="text-sm text-foreground/70">Direct transactions between users without intermediaries, reducing costs and increasing efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <Network size={18} className="text-purple-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Distributed Authority</h4>
                    <p className="text-sm text-foreground/70">No single entity controls the network, ensuring fairness and preventing manipulation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Smart Contracts Feature */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-200">
              <div className="w-14 h-14 rounded-full bg-green-400/10 flex items-center justify-center mb-6">
                <FileCode size={28} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Contracts</h3>
              <p className="text-foreground/70 mb-6">
                Self-executing contracts with the terms directly written into code, automating processes and removing the need for intermediaries.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="mt-1">
                    <RefreshCcw size={18} className="text-green-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Automated Execution</h4>
                    <p className="text-sm text-foreground/70">Transactions automatically execute when conditions are met, eliminating delays and human error.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <CoinsIcon size={18} className="text-green-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Tokenized Rewards</h4>
                    <p className="text-sm text-foreground/70">Earn tokens through our smart contract-powered loyalty program that automatically rewards your actions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Buy Now Pay Later Feature */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-250">
              <div className="w-14 h-14 rounded-full bg-indigo-400/10 flex items-center justify-center mb-6">
                <CreditCard size={28} className="text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Buy Now Pay Later</h3>
              <p className="text-foreground/70 mb-6">
                Flexible payment options powered by blockchain technology, allowing you to purchase fashion items now and pay over time without traditional credit checks.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="mt-1">
                    <Clock size={18} className="text-indigo-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Flexible Payment Schedule</h4>
                    <p className="text-sm text-foreground/70">Customize your payment timeline with options ranging from 2 weeks to 3 months, all managed through smart contracts.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <CheckCircle size={18} className="text-indigo-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">No Hidden Fees</h4>
                    <p className="text-sm text-foreground/70">Transparent payment terms with zero interest and no late fees, all secured and verified through blockchain.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transparency Feature */}
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-lg fadeIn animation-delay-300">
              <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Transparency</h3>
              <p className="text-foreground/70 mb-6">
                Our blockchain provides complete transparency in transactions and operations, building trust and accountability throughout the platform.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start">
                  <div className="mt-1">
                    <Eye size={18} className="text-amber-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Public Ledger</h4>
                    <p className="text-sm text-foreground/70">All transactions are recorded on a public ledger, accessible to anyone for verification while maintaining privacy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <BarChart3 size={18} className="text-amber-400 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-medium">Verifiable History</h4>
                    <p className="text-sm text-foreground/70">Track the complete history of products, transactions, and rewards with verifiable proof of authenticity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Efficiency & Benefits Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium inline-block mb-4">
              Operational Excellence
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Blockchain Efficiency
            </h2>
            <p className="text-lg text-foreground/70">
              Experience unprecedented efficiency in all your fashion interactions through our blockchain technology.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="w-14 h-14 rounded-full bg-blue-400/10 flex items-center justify-center mb-6">
                  <Zap size={28} className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Operational Benefits</h3>
                <p className="text-foreground/70 mb-6">
                  Our blockchain implementation dramatically improves efficiency across the entire platform, resulting in tangible benefits for all users.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap size={18} className="text-blue-400 mr-3 mt-1" />
                    <span className="text-foreground/90">Faster transactions with reduced processing times</span>
                  </li>
                  <li className="flex items-start">
                    <Zap size={18} className="text-blue-400 mr-3 mt-1" />
                    <span className="text-foreground/90">Lower costs through elimination of intermediaries</span>
                  </li>
                  <li className="flex items-start">
                    <Zap size={18} className="text-blue-400 mr-3 mt-1" />
                    <span className="text-foreground/90">Improved data integrity and access control</span>
                  </li>
                  <li className="flex items-start">
                    <Zap size={18} className="text-blue-400 mr-3 mt-1" />
                    <span className="text-foreground/90">Enhanced privacy while maintaining transparency</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-black/60 to-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 h-full">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                            <ArrowRightLeft size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Transaction Time</p>
                            <p className="font-bold">2.4 seconds</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-xs font-medium">95% Faster</span>
                      </div>
                      
                      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center mr-3">
                            <CoinsIcon size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Transaction Cost</p>
                            <p className="font-bold">0.001 SWYF</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-xs font-medium">87% Cheaper</span>
                      </div>
                      
                      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                            <Shield size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Security Rating</p>
                            <p className="font-bold">Enterprise-Grade</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-xs font-medium">99.99% Uptime</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                            <Eye size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Transparency Score</p>
                            <p className="font-bold">Full Visibility</p>
                          </div>
                        </div>
                        <span className="text-green-400 text-xs font-medium">100% Verifiable</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Integration with SWYF Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium inline-block mb-4">
                  Seamless Integration
                </span>
                <h2 className="text-3xl font-display font-bold mb-6">
                  How Blockchain Enhances Your SWYF Experience
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Our blockchain technology is seamlessly integrated with all SWYF features, enhancing your experience across the platform.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Secure Try-On Data</h4>
                      <p className="text-sm text-foreground/70">Your virtual try-on data is securely stored with blockchain protection, ensuring privacy.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Tokenized Rewards</h4>
                      <p className="text-sm text-foreground/70">Earn SWYF tokens for engaging with the platform that can be redeemed for discounts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Verified Authenticity</h4>
                      <p className="text-sm text-foreground/70">Verify the authenticity and source of fashion items through our blockchain ledger.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Community Governance</h4>
                      <p className="text-sm text-foreground/70">Participate in platform decisions through token-based voting mechanisms.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative z-10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1639152201720-5e536d254d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80" 
                  alt="Blockchain Integration" 
                  className="rounded-xl shadow-lg max-w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Ready to experience the future of secure fashion?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Start exploring our blockchain-powered features and discover the benefits of a secure, transparent, and efficient fashion platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/rewards" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Explore Rewards
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a href="/projects" className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center">
                  Try SWYF Features
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlockchainFeatures; 