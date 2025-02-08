import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BarChart3, Calendar, Users2, ArrowRight, CheckCircle2, ChevronRight, LineChart, BarChart2, Menu } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-[#2c2c2c] bg-[#1e1e1e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#1e1e1e]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-[#0da5f9]" />
              <span className="ml-2 text-xl font-bold">Statzy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#docs" className="text-gray-300 hover:text-white transition-colors">Docs</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <Button variant="ghost" className="text-gray-300">Log In</Button>
              <Button className="bg-[#0da5f9] hover:bg-[#0da5f9]/90">Get Started</Button>
            </div>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#2c2c2c] rounded-full mb-8">
            <span className="text-sm text-gray-300">✨ Discover our new analytics features</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Smart insights for fast startups
          </h1>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights. Make better decisions with real-time analytics and powerful visualization tools.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#0da5f9] hover:bg-[#0da5f9]/90">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#2c2c2c]">
              Book a Demo
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border border-[#2c2c2c]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for modern teams</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our analytics platform is built to be flexible and powerful, helping you make data-driven decisions faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <LineChart className="h-6 w-6 text-[#0da5f9]" />,
                title: "Real-time Analytics",
                description: "Get instant insights with our real-time dashboard and analytics tools."
              },
              {
                icon: <Calendar className="h-6 w-6 text-[#0da5f9]" />,
                title: "Smart Scheduling",
                description: "Plan and optimize your workflow with our intelligent scheduling system."
              },
              {
                icon: <Users2 className="h-6 w-6 text-[#0da5f9]" />,
                title: "Team Collaboration",
                description: "Work together seamlessly with built-in collaboration features."
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-[#2c2c2c] border-[#1e1e1e]">
                <div className="p-3 bg-[#1e1e1e] inline-block rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include core features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "19",
                features: ["5 team members", "Basic analytics", "24/7 support"]
              },
              {
                name: "Pro",
                price: "49",
                popular: true,
                features: ["Unlimited team members", "Advanced analytics", "Custom reports", "API access"]
              },
              {
                name: "Enterprise",
                price: "99",
                features: ["Everything in Pro", "Custom solutions", "Dedicated support", "SLA guarantee"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`p-6 ${plan.popular ? 'bg-[#2c2c2c] border-[#0da5f9]' : 'bg-[#2c2c2c] border-[#1e1e1e]'}`}>
                {plan.popular && (
                  <div className="text-[#0da5f9] text-sm font-medium mb-2">Most Popular</div>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[#0da5f9] mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={plan.popular ? 'w-full bg-[#0da5f9]' : 'w-full bg-[#2c2c2c]'}>
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#1e1e1e]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does the pricing work?",
                answer: "Our pricing is subscription-based and scales with your usage. Choose the plan that best fits your needs and upgrade anytime."
              },
              {
                question: "Can I try before I buy?",
                answer: "Yes! We offer a 14-day free trial on all plans. No credit card required."
              },
              {
                question: "What kind of support do you offer?",
                answer: "We provide 24/7 email support for all plans, and dedicated support for Enterprise customers."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#2c2c2c]">
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2c2c2c] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#2c2c2c] flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BarChart3 className="h-6 w-6 text-[#0da5f9] mr-2" />
              <span className="font-bold">Statzy</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Statzy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;