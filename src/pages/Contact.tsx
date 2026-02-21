import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond promptly."
        badge="Get in Touch"
      />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              <form
                action="https://formspree.io/f/xykdnjny"
                method="POST"
                className="space-y-4"
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
                  placeholder="Your Message *"
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Email</div>
                    <p className="text-muted-foreground text-sm">
                      campus2corporatefuture@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Phone</div>
                    <p className="text-muted-foreground text-sm">
                      +91 8651828176
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">Location</div>
                    <p className="text-muted-foreground text-sm">
                      India, New Delhi
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/918651828176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="font-medium mb-3">
                  Follow Us
                </h3>

                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/campus2corporatefuture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;