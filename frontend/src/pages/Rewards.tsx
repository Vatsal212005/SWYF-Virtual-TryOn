import { 
  Gift, 
  Star, 
  Users, 
  ShoppingBag, 
  Sparkles, 
  BadgePercent, 
  TrendingUp, 
  HelpCircle, 
  ChevronRight,
  ArrowRight,
  Share2,
  Clock,
  Activity
} from 'lucide-react';
import { useState } from 'react';
import Layout from '@/components/Layout';

const Rewards = () => {
  const [rewardProgress, setRewardProgress] = useState(65); // Example progress
  
  return (
    <Layout>
      <div className="pt-32 pb-20">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-purple-500/10 to-background"></div>
        
        {/* Introduction */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16 fadeIn">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium inline-block mb-4">
              Rewards Program
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Earn While You <span className="text-gradient">Explore</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Our rewards program lets you earn tokens for every interaction with SWYF. Redeem them for exclusive discounts, early access, and special features.
            </p>
          </div>
        </section>
        
        {/* Reward Overview */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-6">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl mb-16">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/10 rounded-full filter blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Your Rewards Journey
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Track your progress, earn tokens, and unlock exclusive rewards as you engage with the SWYF platform.
                </p>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Level Progress</span>
                    <span className="text-sm font-medium">{rewardProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-purple-500 to-primary h-2.5 rounded-full" style={{ width: `${rewardProgress}%` }}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-foreground/50">Level 2</span>
                    <span className="text-xs text-foreground/50">Level 3</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                    <Star size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">340 SWYF Tokens</h4>
                    <p className="text-sm text-foreground/70">Available to spend</p>
                  </div>
                </div>
                
                <a 
                  href="#earning" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center w-full md:w-auto inline-flex"
                >
                  Start Earning More
                  <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
              
              <div className="relative z-10 flex-col space-y-4 hidden md:flex">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                    <BadgePercent size={20} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">15% Off Next Purchase</h4>
                    <p className="text-sm text-foreground/70">Unlock at Level 3</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">150 tokens</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                    <Sparkles size={20} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Exclusive Style Recommendations</h4>
                    <p className="text-sm text-foreground/70">Available now</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-1 bg-green-500/10 rounded-md text-xs text-green-500">Unlocked</span>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                    <TrendingUp size={20} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Premium Features</h4>
                    <p className="text-sm text-foreground/70">Unlock at Level 4</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-1 bg-gray-100/10 rounded-md text-xs">300 tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Earning Methods */}
        <section id="earning" className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium inline-block mb-4">
              Earning Opportunities
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              How to Earn SWYF Tokens
            </h2>
            <p className="text-lg text-foreground/70">
              Multiple ways to earn rewards while using our platform. The more you engage, the more you earn!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Method 1 */}
            <div className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg fadeIn">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={32} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Try-On Activities</h3>
              <p className="text-foreground/70 mb-4">
                Earn tokens every time you try on clothing items in our virtual fitting room.
              </p>
              <div className="flex items-center justify-center my-4 py-2 px-4 bg-purple-500/5 rounded-lg">
                <Star size={16} className="text-purple-500 mr-2" />
                <span className="text-xl font-bold text-purple-500">5-10</span>
                <span className="text-sm ml-2 text-foreground/70">tokens per try-on</span>
              </div>
              <a href="#" className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center">
                Try On Now
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            {/* Method 2 */}
            <div className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg fadeIn animation-delay-100">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
                <Share2 size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Referrals</h3>
              <p className="text-foreground/70 mb-4">
                Invite friends to join SWYF and earn tokens when they sign up and make their first try-on.
              </p>
              <div className="flex items-center justify-center my-4 py-2 px-4 bg-blue-500/5 rounded-lg">
                <Star size={16} className="text-blue-500 mr-2" />
                <span className="text-xl font-bold text-blue-500">50</span>
                <span className="text-sm ml-2 text-foreground/70">tokens per referral</span>
              </div>
              <a href="#" className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center">
                Invite Friends
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
            
            {/* Method 3 */}
            <div className="glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg fadeIn animation-delay-200">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                <Activity size={32} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Participation</h3>
              <p className="text-foreground/70 mb-4">
                Participate in our blockchain governance, vote on proposals, and contribute to platform development.
              </p>
              <div className="flex items-center justify-center my-4 py-2 px-4 bg-green-500/5 rounded-lg">
                <Star size={16} className="text-green-500 mr-2" />
                <span className="text-xl font-bold text-green-500">20-100</span>
                <span className="text-sm ml-2 text-foreground/70">tokens per activity</span>
              </div>
              <a href="#" className="text-primary hover:text-primary/90 text-sm font-medium inline-flex items-center">
                Join Community
                <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          </div>
          
          <div className="mt-16 glass-card rounded-2xl p-8 fadeIn animation-delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">More Ways to Earn</h3>
                <p className="text-foreground/70 mb-6">
                  Discover additional opportunities to earn SWYF tokens and maximize your rewards.
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Daily Logins</h4>
                      <p className="text-sm text-foreground/70">Earn 2 tokens every day you log in, with bonuses for consecutive days.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Users size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Social Sharing</h4>
                      <p className="text-sm text-foreground/70">Share your try-on results on social media to earn 15 tokens per share.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Star size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Feedback & Reviews</h4>
                      <p className="text-sm text-foreground/70">Provide feedback on your virtual try-on experience for 10 tokens.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3">
                      <Sparkles size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Special Events</h4>
                      <p className="text-sm text-foreground/70">Participate in limited-time events for bonus token rewards.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center">
                    <Star size={40} className="text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">SWYF Token Staking</h3>
                    <p className="text-foreground/70 mb-4">
                      Stake your tokens to earn passive rewards and get exclusive benefits.
                    </p>
                    <div className="bg-blue-500/10 rounded-lg p-3 mb-4">
                      <p className="text-sm font-medium">Earn up to</p>
                      <p className="text-3xl font-bold text-blue-500">12% APY</p>
                    </div>
                    <a href="#" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all inline-flex items-center justify-center">
                      Learn About Staking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium inline-block mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl font-display font-bold mb-6">
              Rewards FAQ
            </h2>
            <p className="text-lg text-foreground/70">
              Everything you need to know about our rewards program.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ item 1 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md fadeIn">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">How do I earn SWYF tokens?</h3>
                  <p className="text-foreground/70">
                    You can earn SWYF tokens by trying on clothes in our virtual fitting room, referring friends, participating in community activities, daily logins, social sharing, providing feedback, and participating in special events.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ item 2 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md fadeIn animation-delay-100">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">What can I do with my SWYF tokens?</h3>
                  <p className="text-foreground/70">
                    SWYF tokens can be redeemed for exclusive discounts on partner stores, access to premium features, early access to new styles, and more. You can also stake your tokens to earn passive rewards.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ item 3 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md fadeIn animation-delay-200">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Do SWYF tokens expire?</h3>
                  <p className="text-foreground/70">
                    No, SWYF tokens do not expire. Once earned, they remain in your wallet until you choose to redeem them. However, some promotional token rewards may have specific expiration periods, which will be clearly indicated.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ item 4 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md fadeIn animation-delay-300">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">How do levels work in the rewards program?</h3>
                  <p className="text-foreground/70">
                    The rewards program has multiple levels, each offering increased benefits. You progress through levels by earning tokens and engaging with the platform. Higher levels unlock exclusive rewards, higher earning rates, and special features.
                  </p>
                </div>
              </div>
            </div>
            
            {/* FAQ item 5 */}
            <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md fadeIn animation-delay-400">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <HelpCircle size={20} className="text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Can I transfer my tokens to someone else?</h3>
                  <p className="text-foreground/70">
                    Yes, SWYF tokens are built on blockchain technology, allowing you to transfer them to other SWYF users securely. This feature is available once you reach Level 3 in the rewards program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl text-center">            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Ready to start earning rewards?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Join our rewards program today and start earning tokens for every interaction with SWYF.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/projects" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center">
                  Try SWYF Features
                  <ChevronRight size={18} className="ml-1" />
                </a>
                <a href="/blockchain-features" className="px-6 py-3 rounded-full bg-white border border-border text-foreground font-medium hover:bg-accent/50 transition-all flex items-center justify-center">
                  Learn About Blockchain
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Rewards;