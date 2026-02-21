import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Search, Clock, ArrowRight } from "lucide-react";

const categories = ["All", "Resume Tips", "Internship Guide", "Interview Preparation", "Career Growth"];

const blogs = [
  {
    id: 1,
    title: "How to Build an ATS-Friendly Resume in 2025",
    desc: "Learn the key formatting rules, keywords, and structure that help your resume score 90+ on Applicant Tracking Systems.",
    category: "Resume Tips",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Top 10 Internship Mistakes Students Make",
    desc: "Avoid these common pitfalls that can hurt your internship performance and professional reputation.",
    category: "Internship Guide",
    date: "Feb 10, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Cracking Your First Interview: A Complete Guide",
    desc: "From preparation to follow-up — everything you need to know to ace your first professional interview.",
    category: "Interview Preparation",
    date: "Feb 5, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Why Freshers Should Focus on Skills, Not Degrees",
    desc: "In today's job market, practical skills often matter more than academic credentials. Here's how to build yours.",
    category: "Career Growth",
    date: "Jan 28, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "5 Resume Keywords That Get You Noticed",
    desc: "Discover the action verbs and industry keywords that make recruiters and ATS systems pay attention.",
    category: "Resume Tips",
    date: "Jan 20, 2025",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 6,
    title: "How to Make the Most of a Remote Internship",
    desc: "Tips for staying productive, building connections, and delivering great work in a virtual internship.",
    category: "Internship Guide",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    featured: false,
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = blogs.filter((b) => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || b.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = blogs.find((b) => b.featured);

  return (
    <div>
      <PageHero title="Blog & Resources" subtitle="Expert tips on resume building, internships, interviews, and career growth." badge="Blog" />

      <section className="section-padding">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Featured */}
          {featured && activeCategory === "All" && !search && (
            <div className="bg-emerald-soft border border-border rounded-xl p-8 md:p-10 mb-12">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">Featured Article</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3">{featured.title}</h2>
              <p className="text-muted-foreground mb-4 max-w-2xl">{featured.desc}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.readTime}</span>
              </div>
            </div>
          )}

          {/* Search & Categories */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog) => (
              <article key={blog.id} className="bg-card border border-border rounded-xl overflow-hidden card-hover">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-primary/30 text-6xl font-bold">{blog.id}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{blog.category}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{blog.desc}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{blog.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
