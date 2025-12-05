import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nemo Intelligence Agency</title>
        <meta
          name="description"
          content="Privacy Policy for Nemo Intelligence Agency. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      <Layout>
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                Privacy Policy
              </h1>
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-muted-foreground text-lg mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you fill out a
                  contact form, subscribe to our newsletter, or communicate with us. This may
                  include your name, email address, company name, and any other information you
                  choose to provide.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you newsletters and marketing communications (with your consent)</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction.
                </p>

                <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, please contact us at
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

export default Privacy;
