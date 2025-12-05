import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, Zap, MessageSquare, Mail, Share2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Intelligent agents tailored to your specific business needs.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline complex processes with smart automation.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Automated email campaigns that convert and engage.",
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nemo Intelligence Agency | AI Automation Solutions</title>
        <meta
          name="description"
          content="Transform your business with intelligent AI automation. Custom AI agents, workflow automation, and smart solutions that save time and boost productivity."
        />
      </Helmet>
      <Layout>
        <HeroSection />

        {/* Services Preview */}
        <section className="py-20 lg:py-32 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Solutions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI automation services designed to transform your business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card p-8 hover-glow group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how AI automation can streamline your operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
