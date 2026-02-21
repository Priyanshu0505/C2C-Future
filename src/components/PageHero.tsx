interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const PageHero = ({ title, subtitle, badge }: PageHeroProps) => {
  return (
    <section className="hero-section pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-medium mb-4 animate-fade-up">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hero-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        <p className="text-hero-foreground/60 text-lg max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
