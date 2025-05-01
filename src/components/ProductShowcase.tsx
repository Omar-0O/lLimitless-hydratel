
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Berry Blast",
    color: "bg-pink-500",
    description: "Packed with antioxidants and natural berry flavor for a refreshing boost",
    image: "/lovable-uploads/0d67abdd-8a40-442f-95f7-ca8b38399aac.png",
  },
  {
    id: 2,
    name: "Citrus Surge",
    color: "bg-amber-500",
    description: "Energizing citrus blend with vitamin C and essential electrolytes",
    image: "/lovable-uploads/0d67abdd-8a40-442f-95f7-ca8b38399aac.png",
  },
  {
    id: 3,
    name: "Cool Blue",
    color: "bg-blue-500",
    description: "Refreshing blue raspberry flavor with hydration-boosting minerals",
    image: "/lovable-uploads/0d67abdd-8a40-442f-95f7-ca8b38399aac.png",
  },
  {
    id: 4,
    name: "Tropical Heat",
    color: "bg-red-500",
    description: "Exotic tropical blend with a spicy kick for maximum performance",
    image: "/lovable-uploads/0d67abdd-8a40-442f-95f7-ca8b38399aac.png",
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
              <div className="text-white text-2xl font-bold mb-6">HYDRATE</div>
              <Button className="bg-white text-gray-800 hover:bg-white/90 rounded-md w-full">
                Shop Now
              </Button>
            </div>
            
            <div className="absolute -right-6 top-1/4 opacity-20">
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
          See Hydrate in its natural environment and follow other hydration enthusiasts on social media. Tag us in your posts!
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={`bg-green-100 rounded-lg aspect-square flex items-center justify-center ${item % 2 === 0 ? 'bg-pink-100' : 'bg-green-100'}`}>
              <div className={`w-3/4 h-3/4 ${item % 2 === 0 ? 'bg-pink-500' : 'bg-green-500'} rounded-lg flex items-center justify-center text-white font-bold`}>
                HYDRATE
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
