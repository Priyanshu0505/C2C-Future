import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="hero-section border-t border-hero-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="C2C Future Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-heading font-bold text-lg text-hero-foreground">
                C2C Future
              </span>
            </div>

            <p className="text-hero-foreground/60 text-sm leading-relaxed">
              Helping college students and freshers transition from Campus to Corporate with professional resume building and industry internships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Resume Services", path: "/resume-services" },
                { name: "Internships", path: "/internships" },
                { name: "Verify Certificate", path: "/verify" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-hero-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4">
              Programs
            </h4>
            <ul className="space-y-2">
              {[
                "Web Development",
                "Data Analytics",
                "Digital Marketing",
                "UI/UX Design",
                "HR Management",
                "Business Development",
              ].map((item) => (
                <li key={item}>
                  <span className="text-hero-foreground/60 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-hero-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-hero-foreground/60 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                campus2corporatefuture@gmail.com
              </li>
              <li className="flex items-center gap-2 text-hero-foreground/60 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                +91 8651828176
              </li>
              <li className="flex items-center gap-2 text-hero-foreground/60 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                India, New Delhi
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/40 text-sm">
            © {new Date().getFullYear()} C2C Future. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="text-hero-foreground/40 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/about"
              className="text-hero-foreground/40 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;