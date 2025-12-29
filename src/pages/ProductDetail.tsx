import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Minus, Plus, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import premiumBeltImage from "@/assets/premium-leather-belt.jpg";
import executiveBeltImage from "@/assets/executive-leather-belt.jpg";
import braceletImage from "@/assets/handcrafted-bracelet.jpg";
import keychainImage from "@/assets/leather-keychain.jpg";
import cufflinksImage from "@/assets/silver-cufflinks.jpg";
import passportHolderImage from "@/assets/passport-holder.jpg";
import cardholderImage from "@/assets/minimalist-cardholder.jpg";

// Product data (would come from API in real app)
const products = [
  {
    id: 1,
    name: "Classic Leather Wallet",
    price: 7499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
    ],
    category: "Accessories",
    description: "Crafted from premium full-grain leather, this classic wallet combines timeless elegance with everyday functionality. Features multiple card slots, a bill compartment, and a coin pocket. The leather develops a beautiful patina over time, making each piece uniquely yours.",
    sizes: ["One Size"],
    details: ["100% genuine leather", "8 card slots", "2 bill compartments", "RFID blocking technology", "Handcrafted finish"],
  },
  {
    id: 2,
    name: "Chronograph Watch",
    price: 24999,
    originalPrice: 32999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80",
    ],
    category: "Watches",
    description: "A sophisticated chronograph timepiece that combines precision engineering with elegant design. The stainless steel case houses a Japanese quartz movement, while the genuine leather strap ensures comfort throughout the day.",
    sizes: ["One Size"],
    details: ["Japanese quartz movement", "Stainless steel case", "Genuine leather strap", "Water resistant 50m", "2-year warranty"],
  },
  {
    id: 3,
    name: "Minimalist Cardholder",
    price: 3799,
    image: cardholderImage,
    images: [cardholderImage],
    category: "Accessories",
    description: "Sleek and minimalist, this cardholder is perfect for those who appreciate simplicity. Made from premium leather with a slim profile that fits perfectly in your front pocket.",
    sizes: ["One Size"],
    details: ["Premium leather", "Holds up to 6 cards", "Slim profile design", "Available in multiple colors"],
  },
  {
    id: 4,
    name: "Premium Leather Belt",
    price: 6299,
    image: premiumBeltImage,
    images: [premiumBeltImage],
    category: "Belts",
    description: "Elevate your style with this premium leather belt. Features a classic buckle design and is crafted from full-grain leather for lasting durability.",
    sizes: ["S (28-30)", "M (32-34)", "L (36-38)", "XL (40-42)"],
    details: ["Full-grain leather", "Classic buckle design", "35mm width", "Adjustable fit"],
  },
  {
    id: 5,
    name: "Travel Duffle Bag",
    price: 20999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    category: "Bags",
    description: "The perfect companion for weekend getaways. This spacious duffle bag is made from durable canvas with leather accents, offering both style and functionality.",
    sizes: ["One Size"],
    details: ["Canvas with leather trim", "Multiple pockets", "Adjustable shoulder strap", "Brass hardware", "55L capacity"],
  },
  {
    id: 6,
    name: "Aviator Sunglasses",
    price: 13299,
    originalPrice: 16599,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    category: "Eyewear",
    description: "Classic aviator sunglasses with polarized lenses for superior clarity and UV protection. The lightweight metal frame ensures all-day comfort.",
    sizes: ["One Size"],
    details: ["Polarized lenses", "100% UV protection", "Metal frame", "Includes protective case"],
  },
  {
    id: 7,
    name: "Handcrafted Bracelet",
    price: 5499,
    image: braceletImage,
    images: [braceletImage],
    category: "Jewelry",
    description: "A handcrafted leather bracelet with sterling silver accents. Each piece is unique, showcasing artisanal craftsmanship.",
    sizes: ["S", "M", "L"],
    details: ["Genuine leather", "Sterling silver accents", "Handcrafted", "Adjustable closure"],
  },
  {
    id: 8,
    name: "Laptop Messenger Bag",
    price: 15899,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80",
    ],
    category: "Bags",
    description: "Professional messenger bag designed to protect your laptop in style. Features padded compartments, multiple organizer pockets, and a comfortable shoulder strap.",
    sizes: ["One Size"],
    details: ["Fits laptops up to 15\"", "Padded compartment", "Multiple pockets", "Adjustable strap", "Water-resistant"],
  },
  {
    id: 9,
    name: "Executive Leather Belt",
    price: 8499,
    image: executiveBeltImage,
    images: [executiveBeltImage],
    category: "Belts",
    description: "A sophisticated black leather belt with a gold buckle, perfect for formal occasions. Crafted from premium leather for lasting elegance.",
    sizes: ["S (28-30)", "M (32-34)", "L (36-38)", "XL (40-42)"],
    details: ["Premium black leather", "Gold-tone buckle", "30mm width", "Adjustable fit"],
  },
  {
    id: 10,
    name: "Luxury Leather Keychain",
    price: 1999,
    image: keychainImage,
    images: [keychainImage],
    category: "Accessories",
    description: "A premium leather keychain with a gold clasp, perfect for keeping your keys organized in style. Compact yet durable.",
    sizes: ["One Size"],
    details: ["Genuine leather", "Gold-tone clasp", "Compact design", "Durable construction"],
  },
  {
    id: 11,
    name: "Silver Cufflinks Set",
    price: 4299,
    image: cufflinksImage,
    images: [cufflinksImage],
    category: "Jewelry",
    description: "Elegant silver cufflinks with a geometric design. Perfect for formal occasions and adding a touch of sophistication to any outfit.",
    sizes: ["One Size"],
    details: ["Sterling silver finish", "Geometric pattern", "Secure fastening", "Gift box included"],
  },
  {
    id: 12,
    name: "Leather Passport Holder",
    price: 3499,
    originalPrice: 4499,
    image: passportHolderImage,
    images: [passportHolderImage],
    category: "Accessories",
    description: "A stylish leather passport holder with card slots. Keep your travel documents organized and protected in premium style.",
    sizes: ["One Size"],
    details: ["Premium leather", "Multiple card slots", "Passport pocket", "Snap closure"],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const product = products.find((p) => p.id === Number(id));
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-2xl">Product not found</h1>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/")}>
            Back to Shop
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 1 && !selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      });
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
        </div>

        {/* Product Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={cn(
                        "w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                        selectedImage === index 
                          ? "border-primary" 
                          : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl lg:text-4xl font-semibold mt-2">
                  {product.name}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-primary">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes.length > 1 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-all",
                          selectedSize === size
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsLiked(!isLiked)}
                  className={cn(isLiked && "text-primary border-primary")}
                >
                  <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                </Button>
              </div>

              {/* Details */}
              <div className="border-t pt-6 mt-6 space-y-4">
                <h3 className="font-medium">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
