
import { Button } from "@/components/ui/button";

const ProductsHero = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="p-8 md:p-12 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Your<br />
              Hydration Upgrade
            </h1>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More
            </Button>
          </div>
          
          {/* Right side - Product image with splash */}
          <div className="md:w-1/2 relative">
            <img 
              src="/public/lovable-uploads/53212e36-e1ef-4cde-9575-17ab49a5db3d.png" 
              alt="Limitless Hydrate with Splash Effect" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
