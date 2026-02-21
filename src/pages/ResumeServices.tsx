import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What is an ATS Resume?",
    a: "An ATS resume is formatted to pass automated screening systems used by companies.",
  },
  {
    q: "Why does ATS 90+ score matter?",
    a: "A high ATS score ensures your resume passes filters and reaches recruiters.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery usually takes 24–48 hours depending on urgency.",
  },
];

const ResumeServices = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        title="ATS Resume Services"
        subtitle="Get a professionally crafted resume that scores 90+ on ATS systems."
        badge="Resume Building"
      />

      {/* Order Form */}
      <section className="section-padding bg-emerald-soft">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Order Your Resume
            </h2>
          </div>

          <form
            action="https://formspree.io/f/xykdnjny"
            method="POST"
            className="bg-card border border-border rounded-xl p-8 space-y-4"
          >
            <Input
              name="name"
              placeholder="Full Name *"
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address *"
              required
            />

            <Input
              name="phone"
              placeholder="Phone Number"
            />

            <Textarea
              name="message"
              placeholder="Tell us your career field, experience level, or requirements *"
              rows={4}
              required
            />

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              size="lg"
            >
              Build My Resume Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-medium hover:bg-muted/50 transition-colors"
                >
                  {faq.q}
                  {openFaq === i ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
            Don’t Let ATS Reject Your Talent
          </h2>
          <p className="text-hero-foreground/60 text-lg max-w-2xl mx-auto mb-8">
            Get a resume that increases your interview calls.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResumeServices;