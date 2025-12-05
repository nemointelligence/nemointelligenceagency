import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Nemo Intelligent Agency</title>
        <meta
          name="description"
          content="Terms and Conditions for Nemo Intelligent Agency. Review our terms of service and usage policies."
        />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Terms & Conditions
              </h1>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-foreground text-lg mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the Nemo Intelligent Agency website and services, you
                  accept and agree to be bound by these Terms and Conditions. If you do not agree
                  to these terms, please do not use our services.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Services
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nemo Intelligent Agency provides AI automation consulting and implementation
                  services. The specific scope, deliverables, and terms of each project will be
                  defined in separate service agreements.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground mb-4">
                  All content on this website, including text, graphics, logos, and software, is
                  the property of Nemo Intelligent Agency and is protected by intellectual
                  property laws.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nemo Intelligent Agency shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages resulting from your use of our
                  services.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms & Conditions, please contact us at
                  contact@nemointelligent.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
