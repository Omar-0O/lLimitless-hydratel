
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Original",
    color: "bg-blue-500",
    description: "Essential electrolyte drink mix with Blue Raspberry flavor",
    image: "public/lovable-uploads/28d22a49-2b99-4a31-9371-74c25068278f.png",
  },
  {
    id: 2,
    name: "Glow",
    color: "bg-pink-500",
    description: "For Hair, Skin & Nails Health with Mixed Berries flavor",
    image: "public/lovable-uploads/4f52415d-43c4-4182-8198-91373487c542.png",
  },
  {
    id: 3,
    name: "Charge",
    color: "bg-amber-500",
    description: "With 130mg Caffeine and B Vitamins in Coffee flavor",
    image: "public/lovable-uploads/e8e1ee08-6a21-486f-9eba-6637463575b1.png",
  },
  {
    id: 4,
    name: "Kids",
    color: "bg-green-500",
    description: "Flavor & Color Free formula for kids with Watermelon flavor",
    image: "public/lovable-uploads/2ccb83a5-04ca-4c0e-bdde-04171bd0c2ce.png",
  },
];

const ProductShowcase = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Choose Your Refreshment</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Something for every taste and need. Our range of hydration drinks are scientifically formulated to keep you at your best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`${product.color} rounded-lg p-6 flex flex-col justify-between min-h-[320px] relative overflow-hidden`}
          >
            <div className="mb-auto">
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-white/90 text-sm">{product.description}</p>
            </div>
            
            <div className="mt-4">
              <div className="text-white text-2xl font-bold mb-6">LIMITLESS HYDRATE</div>
              <Button className="bg-white text-gray-800 hover:bg-white/90 rounded-md w-full">
                Shop Now
              </Button>
            </div>
            
            <div className="absolute -right-6 top-1/4 opacity-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-32 h-32 object-contain transform rotate-12" 
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Connect & Hydrate</h2>
        <p className="text-gray-600 text-center max-w-md mx-auto mb-10">
          See Limitless Hydrate in its natural environment and follow other hydration enthusiasts on social media. Tag us in your posts!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-blue-100 rounded-lg aspect-square overflow-hidden">
            <img 
              src="public/lovable-uploads/90f4264d-21b3-4199-aa45-ccc95217ff4e.png" 
              alt="Limitless Hydrate" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="bg-pink-100 rounded-lg aspect-square overflow-hidden">
            <img 
              src="public/lovable-uploads/6ae64fe5-d240-4afa-ba2e-d120bc8e8b2b.png" 
              alt="Limitless Hydrate" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="bg-green-100 rounded-lg aspect-square overflow-hidden">
            <img 
              src="public/lovable-uploads/44b72049-0af7-451e-b550-8d28737adad1.png" 
              alt="Limitless Hydrate" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="bg-blue-100 rounded-lg aspect-square overflow-hidden">
            <img 
              src="public/lovable-uploads/ebb4b8d2-d692-49ce-9b63-faeebc3ce72a.png" 
              alt="Limitless Hydrate" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="bg-yellow-100 rounded-lg aspect-square overflow-hidden">
            <img 
              src="public/lovable-uploads/1a6a7d08-b757-444f-88f5-cb200aaa1263.png" 
              alt="Limitless Hydrate" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
