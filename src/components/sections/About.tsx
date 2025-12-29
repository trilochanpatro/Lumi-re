const About = () => {
  const values = [
    {
      title: "Quality First",
      description: "We never compromise on materials or craftsmanship. Every product is built to last."
    },
    {
      title: "Sustainable Practices",
      description: "We're committed to ethical sourcing and environmentally responsible production."
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We stand behind every product we sell."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Story</span>
          <h2 className="font-display text-3xl lg:text-5xl font-semibold tracking-tight mt-3 mb-6">
            Crafted with Purpose
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            At Lumière, we believe that the finest accessories are more than just objects — 
            they're expressions of personal style and craftsmanship that stand the test of time.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-24">
          <div className="space-y-6">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold">
              A Legacy of Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2020, Lumière emerged from a passion for exceptional quality and timeless design. 
              We partner with skilled artisans who share our commitment to excellence, ensuring every piece 
              in our collection meets the highest standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From premium leather goods to elegant timepieces, each item is carefully curated to bring 
              sophistication and functionality to your everyday life. Our journey began with a simple belief: 
              that everyone deserves access to beautifully crafted accessories.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" 
              alt="Lumière store" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-display text-2xl lg:text-3xl font-semibold text-center mb-10">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-background border border-border/50 hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-display font-bold text-xl">{index + 1}</span>
                </div>
                <h4 className="font-display text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
