import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Premium lifestyle products featuring elegant leather goods and accessories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <span 
            className="inline-block text-sm font-medium text-primary mb-4 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            New Collection 2024
          </span>
          
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Crafted for the
            <span className="block text-primary">Modern Lifestyle</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Discover timeless pieces designed with precision and passion. 
            Premium materials, sustainable practices, enduring quality.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <Button variant="hero" size="xl" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "500ms" }}
          >
            <div>
              <span className="font-display text-3xl font-semibold">50K+</span>
              <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
            </div>
            <div>
              <span className="font-display text-3xl font-semibold">200+</span>
              <p className="text-sm text-muted-foreground mt-1">Unique Products</p>
            </div>
            <div>
              <span className="font-display text-3xl font-semibold">15+</span>
              <p className="text-sm text-muted-foreground mt-1">Years of Craft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
