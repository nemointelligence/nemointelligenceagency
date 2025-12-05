import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Workflow,
  Mail,
  Database,
  MessageSquare,
  Share2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Intelligent AI agents designed specifically for your business needs. From customer service to data analysis, our agents work 24/7 to streamline your operations.",
    features: ["Natural language processing", "Custom training", "Multi-platform deployment"],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Transform complex, manual processes into seamless automated workflows. Reduce errors, save time, and let your team focus on what matters most.",
    features: ["Process mapping", "Integration setup", "Performance monitoring"],
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Smart email campaigns that engage, nurture, and convert. From welcome sequences to re-engagement campaigns, automate your email marketing.",
    features: ["Drip campaigns", "Personalization", "Analytics & reporting"],
  },
  {
    icon: Database,
    title: "CRM Automations",
    description:
      "Automate your customer relationship management with intelligent triggers, data syncing, and personalized customer journeys.",
    features: ["Lead scoring", "Pipeline automation", "Customer segmentation"],
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description:
      "Deploy intelligent chatbots that understand context, handle complex queries, and provide instant support to your customers around the clock.",
    features: ["Multi-language support", "Intent recognition", "Seamless handoff"],
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description:
      "Automate your social media presence with scheduled posts, engagement tracking, and AI-powered content suggestions.",
    features: ["Content scheduling", "Engagement automation", "Performance analytics"],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Nemo Intelligence Agency</title>
        <meta
          name="description"
          content="Explore our AI automation services including custom AI agents, workflow automation, email automation, CRM automations, AI chatbots, and social media automation."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 animate-fade-in">
                Our Services
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
                AI Automation{" "}
                <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
                Comprehensive automation services designed to transform every aspect of your
                business operations. Choose the solutions that fit your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We <span className="gradient-text">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures successful implementation of your automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "We analyze your current workflows and identify automation opportunities." },
                { step: "02", title: "Strategy", desc: "Custom automation strategy tailored to your business goals." },
                { step: "03", title: "Implementation", desc: "Expert development and integration of your automation solutions." },
                { step: "04", title: "Optimization", desc: "Continuous monitoring and improvement for maximum ROI." },
              ].map((item, index) => (
                <div
                  key={item.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our automation services can transform your business.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
