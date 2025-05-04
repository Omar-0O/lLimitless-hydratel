
import { Button } from "@/components/ui/button";

const ProductsHero = () => {
  return (
    <div className="relative py-16 mb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Hydration Upgrade
        </h1>
        
        <div className="relative">
          <div className="relative z-10 mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
            <div className="relative">
              <div className="absolute -left-16 -top-16 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-40"></div>
              <img 
                src="public/lovable-uploads/28d22a49-2b99-4a31-9371-74c25068278f.png"
                alt="Limitless Hydrate Product" 
                className="relative z-10 h-80 object-contain" 
              />
              <div className="absolute -right-20 -bottom-10 w-48 h-48 bg-blue-500 rounded-full filter blur-2xl opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
