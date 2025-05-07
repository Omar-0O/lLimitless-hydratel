
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = [
  {
    id: 1,
    name: "Original",
    color: "bg-blue-500",
    description: "Essential electrolyte drink mix with Blue Raspberry flavor",
    image: "public/lovable-uploads/28d22a49-2b99-4a31-9371-74c25068278f.png",
    path: "/product/original"
  },
  {
    id: 2,
    name: "Glow",
    color: "bg-pink-500",
    description: "For Hair, Skin & Nails Health with Mixed Berries flavor",
    image: "public/lovable-uploads/4f52415d-43c4-4182-8198-91373487c542.png",
    path: "/product/glow"
  },
  {
    id: 3,
    name: "Charge",
    color: "bg-amber-500",
    description: "With 130mg Caffeine and B Vitamins in Coffee flavor",
    image: "public/lovable-uploads/e8e1ee08-6a21-486f-9eba-6637463575b1.png",
    path: "/product/charge"
  },
  {
    id: 4,
    name: "Kids",
    color: "bg-green-500",
    description: "Flavor & Color Free formula for kids with Watermelon flavor",
    image: "public/lovable-uploads/2ccb83a5-04ca-4c0e-bdde-04171bd0c2ce.png",
    path: "/product/kids"
  },
];

const ProductShowcase = () => {
  return (
    <div className="py-16">
      {/* Product Tabs Section */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Scientifically formulated hydration for every need. Choose your perfect match from our range of specialized formulas.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="original">Original</TabsTrigger>
            <TabsTrigger value="glow">Glow</TabsTrigger>
            <TabsTrigger value="charge">Charge</TabsTrigger>
            <TabsTrigger value="kids">Kids</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden border-0 shadow-md">
                  <div className={`${product.color} h-40 flex items-center justify-center relative`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="h-36 object-contain" 
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    <Link to={product.path}>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {products.map((product) => (
            <TabsContent key={product.id} value={product.name.toLowerCase()} className="space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-6 shadow-md">
                <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-64 object-contain" 
                  />
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to={product.path}>
                    <Button className={`${product.color} text-white hover:opacity-90`}>
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Removed the "What Our Customers Say" testimonials section */}
    </div>
  );
};

export default ProductShowcase;

