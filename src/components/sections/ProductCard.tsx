import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const navigate = useNavigate();

  const isLiked = isInWishlist(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id, name, price, image });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem({ id, name, price, image, category });
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary mb-4">
        <img
          src={image}
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
              New
            </span>
          )}
          {isSale && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              Sale
            </span>
          )}
        </div>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className={cn(
            "absolute top-3 right-3 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300",
            "hover:bg-background hover:scale-110",
            isLiked && "text-primary"
          )}
        >
          <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
        </button>

        {/* Action Buttons on Hover */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 space-y-2",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button className="w-full" variant="default" onClick={handleAddToCart}>
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Bag
          </Button>
          <Button className="w-full" variant="secondary" onClick={handleViewDetails}>
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <span className="text-xs text-muted-foreground uppercase tracking-wider block">
          {category}
        </span>
        <h3 className="font-medium text-foreground text-base group-hover:text-primary transition-colors duration-200 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2 pt-1">
          <span className="font-bold text-lg text-foreground">₹{price.toLocaleString('en-IN')}</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ₹{originalPrice.toLocaleString('en-IN')}
            </span>
          )}
          {originalPrice && (
            <span className="text-xs text-primary font-medium">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
