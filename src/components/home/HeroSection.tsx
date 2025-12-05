import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import AIBrain from "./AIBrain";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              AI-Powered Automation
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              Automate Your Business With{" "}
              <span className="gradient-text">Intelligent AI Systems</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Smart automation that saves time, reduces costs, and boosts
              productivity. Transform your workflows with cutting-edge AI
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/contact">
                  <Play size={20} />
                  Book a Demo
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-in animation-delay-400">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by innovative companies
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 items-center opacity-60">
                <span className="font-heading text-lg text-foreground">TechCorp</span>
                <span className="font-heading text-lg text-foreground">InnovateLab</span>
                <span className="font-heading text-lg text-foreground">FutureTech</span>
              </div>
            </div>
          </div>

          {/* AI Robot Visual */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <AIBrain />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
