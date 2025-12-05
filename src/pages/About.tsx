import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Bot, Workflow, Cog, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing the boundaries of AI technology to deliver cutting-edge solutions.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Meticulously designed automations that work flawlessly every time.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside you, understanding your unique challenges and goals.",
  },
];

const capabilities = [
  {
    icon: Bot,
    title: "Artificial Intelligence",
    description: "Advanced AI models trained to understand and automate complex business processes.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "End-to-end workflow automation that eliminates manual tasks and reduces errors.",
  },
  {
    icon: Cog,
    title: "System Integration",
    description: "Seamless integration with your existing tools and platforms for unified operations.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Nemo Intelligence Agency</title>
        <meta
          name="description"
          content="Learn about Nemo Intelligence Agency - your partner in AI automation. We help businesses grow with intelligent automation solutions."
        />
      </Helmet>
      <Layout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 animate-fade-in">
                About Us
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
                Pioneering the Future of <span className="gradient-text">Business Automation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground animate-fade-in animation-delay-200">
                At Nemo Intelligence Agency, we believe that intelligent automation is the key to unlocking
                unprecedented business growth. Our mission is to empower organizations with AI solutions that save time,
                reduce costs, and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We are dedicated to transforming how businesses operate by implementing smart, scalable AI automation
                  solutions. Our team blends deep technical expertise with strong business insight to create automation
                  that truly makes an impact. From startups to large enterprises, we partner with organizations that are
                  ready to embrace the future of work. Our approach is collaborative, transparent, and focused on
                  delivering measurable improvements that help your business grow and operate more efficiently.
                </p>
                <p className="text-muted-foreground text-lg">
                  From startups to enterprises, we partner with organizations ready to embrace the future of work. Our
                  approach is collaborative, transparent, and focused on delivering measurable results.
                </p>
              </div>
              <div className="glass-card p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-2xl font-bold text-primary">5+</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Years of Experience</p>
                      <p className="text-sm text-muted-foreground">In AI & automation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-2xl font-bold text-accent">100+</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Projects Delivered</p>
                      <p className="text-sm text-muted-foreground">Across industries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-2xl font-bold text-primary">50+</span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">Happy Clients</p>
                      <p className="text-sm text-muted-foreground">Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We <span className="gradient-text">Excel At</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core capabilities that drive business transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide everything we do.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="glass-card p-8 hover-glow animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
