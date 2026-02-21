import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code,
  BarChart3,
  Palette,
  TrendingUp,
  UserCheck,
  Building,
  DollarSign,
  Briefcase,
  Award,
  FileText,
  Star,
  ArrowRight,
} from "lucide-react";

const Internship = () => {
  return (
    <div>
      <PageHero
        title="Internship Programs"
        subtitle="4-week industry-based online internships with live projects, mentorship, and verified certificates."
        badge="Programs"
      />

      {/* Apply Form Section */}
      <section id="apply" className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Apply Now
            </span>
            <h2 className="text-3xl font-bold mt-2">
              Start Your Internship
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

            <select
              name="domain"
              required
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="">Select Domain *</option>

              <optgroup label="IT">
                <option value="Web Development">Web Development</option>
                <option value="Java Programming">Java Programming</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </optgroup>

              <optgroup label="Management">
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="HR Management">HR Management</option>
                <option value="Business Development">Business Development</option>
                <option value="Finance Basics">Finance Basics</option>
              </optgroup>
            </select>

            <Textarea
              name="message"
              placeholder="Tell us about yourself (optional)"
              rows={4}
            />

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
            >
              Submit Application <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Internship;