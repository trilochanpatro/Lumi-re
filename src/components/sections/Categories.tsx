import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Leather Goods",
    description: "Timeless craftsmanship",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    count: 45,
  },
  {
    name: "Timepieces",
    description: "Precision & elegance",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    count: 32,
  },
  {
    name: "Accessories",
    description: "Complete your look",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    count: 78,
  },
];

const Categories = () => {
  return (
    <section id="collections" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Browse by Category
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
              Shop Collections
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 lg:mt-0 max-w-md">
            Explore our carefully curated collections, each telling its own story of quality and design.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <a
              key={category.name}
              href="#"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-background/70 text-sm">
                      {category.count} Products
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-background mt-1">
                      {category.name}
                    </h3>
                    <p className="text-background/80 mt-2">
                      {category.description}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-background group-hover:text-foreground text-background">
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
