import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import premiumBeltImage from "@/assets/premium-leather-belt.jpg";
import executiveBeltImage from "@/assets/executive-leather-belt.jpg";
import braceletImage from "@/assets/handcrafted-bracelet.jpg";
import keychainImage from "@/assets/leather-keychain.jpg";
import cufflinksImage from "@/assets/silver-cufflinks.jpg";
import passportHolderImage from "@/assets/passport-holder.jpg";
import cardholderImage from "@/assets/minimalist-cardholder.jpg";

const products = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    price: 7499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80",
    category: "Accessories",
    isNew: true,
    popularity: 85,
  },
  {
    id: 2,
    name: "Chronograph Watch",
    price: 24999,
    originalPrice: 32999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    category: "Watches",
    isSale: true,
    popularity: 95,
  },
  {
    id: 3,
    name: "Minimalist Cardholder",
    price: 3799,
    image: cardholderImage,
    category: "Accessories",
    popularity: 70,
  },
  {
    id: 4,
    name: "Premium Leather Belt",
    price: 6299,
    image: premiumBeltImage,
    category: "Belts",
    isNew: true,
    popularity: 80,
  },
  {
    id: 5,
    name: "Travel Duffle Bag",
    price: 20999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    category: "Bags",
    popularity: 88,
  },
  {
    id: 6,
    name: "Aviator Sunglasses",
    price: 13299,
    originalPrice: 16599,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
    category: "Eyewear",
    isSale: true,
    popularity: 92,
  },
  {
    id: 7,
    name: "Handcrafted Bracelet",
    price: 5499,
    image: braceletImage,
    category: "Jewelry",
    popularity: 75,
  },
  {
    id: 8,
    name: "Laptop Messenger Bag",
    price: 15899,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&q=80",
    category: "Bags",
    isNew: true,
    popularity: 82,
  },
  {
    id: 9,
    name: "Executive Leather Belt",
    price: 8499,
    image: executiveBeltImage,
    category: "Belts",
    popularity: 78,
  },
  {
    id: 10,
    name: "Luxury Leather Keychain",
    price: 1999,
    image: keychainImage,
    category: "Accessories",
    isNew: true,
    popularity: 72,
  },
  {
    id: 11,
    name: "Silver Cufflinks Set",
    price: 4299,
    image: cufflinksImage,
    category: "Jewelry",
    popularity: 68,
  },
  {
    id: 12,
    name: "Leather Passport Holder",
    price: 3499,
    originalPrice: 4499,
    image: passportHolderImage,
    category: "Accessories",
    isSale: true,
    popularity: 85,
  },
];

const categories = ["All", "Accessories", "Watches", "Bags", "Jewelry", "Eyewear", "Belts"];
const MAX_PRICE = 35000;

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        filtered.sort((a, b) => b.popularity - a.popularity);
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <section id="shop" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Curated Selection
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mt-3">
            Featured Products
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Handpicked pieces that blend timeless design with contemporary elegance.
          </p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-foreground/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort & Price Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Price Range */}
            <div className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-2 min-w-[200px]">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Price:</span>
              <div className="flex-1">
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={MAX_PRICE}
                  step={500}
                  className="w-full"
                />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </span>
            </div>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredAndSortedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No products match your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setPriceRange([0, MAX_PRICE]);
              }}
              className="mt-4 text-primary hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
