import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Schedule = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    preferredDate: "",
    preferredTime: "",
    projectDescription: "",
  });

  const WEBHOOK_URL = "https://n-i-a.app.n8n.cloud/form/a9901ca9-87da-4c35-9594-3b8c1445668e";

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("preferredDate", formData.preferredDate);
      formDataToSend.append("preferredTime", formData.preferredTime);
      formDataToSend.append("projectDescription", formData.projectDescription);
      formDataToSend.append("submittedAt", new Date().toISOString());
      formDataToSend.append("type", "consultation_request");

      await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formDataToSend,
      });

      setIsSubmitted(true);
      toast({
        title: "Appointment Requested!",
        description: "We'll confirm your consultation time shortly.",
      });
    } catch (error) {
      console.error("Failed to submit appointment:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <Helmet>
          <title>Appointment Confirmed | N.I.A</title>
        </Helmet>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">Thank You!</h1>
            <p className="text-muted-foreground">
              Your free consultation request has been submitted. Our team will contact you within 24 hours to confirm
              your appointment.
            </p>
            <Button onClick={() => (window.location.href = "/")} variant="outline">
              Return Home
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Schedule Free Consultation | N.I.A</title>
        <meta
          name="description"
          content="Book your free consultation with N.I.A for premium AI solutions and digital services."
        />
      </Helmet>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Free Consultation</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule Your <span className="text-primary">Free Session</span>
            </h1>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-muted/50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="bg-muted/50"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="bg-muted/50"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-primary" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="bg-muted/50"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Preferred Date
                  </Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="bg-muted/50"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Preferred Time
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, preferredTime: value }))}
                    required
                  >
                    <SelectTrigger className="bg-muted/50">
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="projectDescription" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Project Overview
                </Label>
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about your project goals, challenges, and what you hope to achieve..."
                  rows={4}
                  className="bg-muted/50 resize-none"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg" variant="hero">
                {isSubmitting ? "Scheduling..." : "Request Free Consultation"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By scheduling, you agree to our terms of service. This consultation is completely free with no
                obligations.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Schedule;
