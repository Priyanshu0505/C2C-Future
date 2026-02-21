import PageHero from "@/components/PageHero";
import { Target, Eye, Heart, TrendingUp, Shield, Lightbulb } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust", desc: "We build trust through transparency, verified certificates, and genuine student outcomes." },
  { icon: TrendingUp, title: "Growth", desc: "Every program is designed to accelerate personal and professional growth." },
  { icon: Heart, title: "Professionalism", desc: "Corporate-grade quality in every resume, certificate, and interaction." },
  { icon: Lightbulb, title: "Skill Development", desc: "Practical, industry-relevant skills that employers actually look for." },
];

const About = () => {
  return (
    <div>
      <PageHero title="About C2C Future" subtitle="A student-led startup on a mission to bridge the gap between campus and corporate." badge="Our Story" />

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower every college student and fresher with the tools, skills, and confidence they need to transition seamlessly from campus life to the corporate world. We believe no student should be held back by a poorly formatted resume or lack of practical experience.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted platform for student career readiness — making professional resume building, industry internships, and career mentorship accessible and affordable for every student across the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-emerald-soft">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">The Founder</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Built by Students, for Students</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            C2C Future was born from a simple frustration — watching talented classmates get rejected not because they lacked skills, but because their resumes couldn't pass automated screening systems.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a student who experienced the same struggle, our founder decided to build something that genuinely helps. What started as helping friends craft better resumes grew into a full-fledged platform offering ATS-optimized resume building, industry-based internships, and career mentorship. Today, C2C Future is committed to ensuring every student has a fair shot at their dream career.
          </p>
        </div>
      </section>

      {/* Why We Started */}
      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why C2C Future</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Why We Started</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Over 70% of resumes are rejected by ATS before a human ever sees them. Students invest years in education but often lack the practical exposure and professional presentation needed to stand out.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We started C2C Future to solve this — by providing affordable, professional resume services and real-world internship experiences that give students a genuine competitive edge in the job market.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-emerald-soft">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6 text-center card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
