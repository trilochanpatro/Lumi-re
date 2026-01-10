import { Heart, X, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const WishlistSidebar = () => {
  const { items, isOpen, setIsOpen, removeItem, clearWishlist } = useWishlist();
  const { addItem: addToCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleMoveToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    removeItem(item.id);
    toast({
      title: "Moved to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleViewProduct = (id: number) => {
    setIsOpen(false);
    navigate(`/product/${id}`);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            My Wishlist ({items.length})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Save items you love by clicking the heart icon
            </p>
            <Button onClick={() => setIsOpen(false)}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <button
                    onClick={() => handleViewProduct(item.id)}
                    className="h-20 w-20 rounded-md overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                  <div className="flex-1 min-w-0">
                    <button
                      onClick={() => handleViewProduct(item.id)}
                      className="text-left"
                    >
                      <h4 className="font-medium text-sm line-clamp-2 hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                    </button>
                    {item.category && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.category}
                      </p>
                    )}
                    <p className="font-semibold mt-1">${item.price}</p>
                    <div className="flex gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-xs flex-1"
                        onClick={() => handleMoveToCart(item)}
                      >
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeItem(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <Button
                variant="outline"
                className="w-full"
                onClick={clearWishlist}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Wishlist
              </Button>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSidebar;
