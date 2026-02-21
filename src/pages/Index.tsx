import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Briefcase, Users, CheckCircle, Star, Award, DollarSign, Code, BarChart3, Palette, TrendingUp, UserCheck, Building } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: FileText, title: "ATS Resume Building", desc: "Professionally crafted resumes that score 90+ on Applicant Tracking Systems and land you interviews." },
  { icon: Briefcase, title: "Online Internships", desc: "Gain real-world experience with industry-based projects across IT and Management domains." },
  { icon: Users, title: "Career Support", desc: "End-to-end career guidance from resume building to interview preparation and placement." },
];

const features = [
  { value: "90+", label: "ATS Score", desc: "Resumes optimized for ATS", icon: CheckCircle },
  { value: "15+", label: "Domains", desc: "Industry-relevant programs", icon: Award },
  { value: "100%", label: "Verified", desc: "Certified & verifiable", icon: Star },
  { value: "₹***", label: "Starting At", desc: "Affordable for students", icon: DollarSign },
];

const itDomains = [
  { icon: Code, name: "Web Development" },
  { icon: Code, name: "Java Programming" },
  { icon: BarChart3, name: "Data Analytics" },
  { icon: Palette, name: "UI/UX Design" },
];

const mgmtDomains = [
  { icon: TrendingUp, name: "Digital Marketing" },
  { icon: UserCheck, name: "HR Management" },
  { icon: Building, name: "Business Development" },
  { icon: DollarSign, name: "Finance Basics" },
];

const testimonials = [
  { name: "Priya Sharma", role: "B.Tech Student, Mumbai", quote: "C2C Future helped me build a resume that actually got through ATS filters. I landed 3 interviews within a week!", rating: 5 },
  { name: "Rahul Verma", role: "MBA Fresher, Delhi", quote: "The digital marketing internship gave me real project experience. The certificate boosted my LinkedIn profile significantly.", rating: 5 },
  { name: "Sneha Patel", role: "BCA Graduate, Pune", quote: "Affordable, professional, and genuinely helpful. My resume went from zero callbacks to multiple interview calls.", rating: 5 },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-section overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/80 via-hero/60 to-hero" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium mb-6 animate-fade-up">
              Campus 2 Corporate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.1s" }}>
              From <span className="text-gradient">Campus to Corporate</span>
            </h1>
            <p className="text-hero-foreground/70 text-lg md:text-xl mb-8 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              ATS 90+ Resume Building & Industry-Based Online Internships — Your bridge to a successful career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/internships">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-8 card-hover">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-emerald-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why C2C Future</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.label} className="bg-card rounded-xl p-6 text-center card-hover border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{f.value}</div>
                <div className="font-semibold mb-1">{f.label}</div>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Domains */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Internship Domains</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" /> IT Domains
              </h3>
              <div className="space-y-4">
                {itDomains.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <d.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" /> Management Domains
              </h3>
              <div className="space-y-4">
                {mgmtDomains.map((d) => (
                  <div key={d.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <d.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{d.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-emerald-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">What Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-8 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-section section-padding">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">Ready to Launch Your Career?</h2>
          <p className="text-hero-foreground/60 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of students who have transformed their career journey with C2C Future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/resume-services">
              <Button variant="hero" size="lg">Build My Resume <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </Link>
            <Link to="/internships">
              <Button variant="heroOutline" size="lg">Apply for Internship</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
