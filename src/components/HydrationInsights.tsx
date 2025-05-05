
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Book, Lightbulb, Beaker, Heart } from "lucide-react";

const HydrationInsights = () => {
  const insightCards = [
    {
      id: 1,
      title: "Emerging research on cellular hydration",
      category: "Science",
      icon: <Book className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      id: 2,
      title: "The science behind electrolytes and performance",
      category: "Research",
      icon: <Lightbulb className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
    },
    {
      id: 3,
      title: "Hydrating properly for cognitive function",
      category: "Science",
      icon: <Beaker className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 4,
      title: "Liposomal hydration in wellness",
      category: "Wellness",
      icon: <Heart className="h-5 w-5" />,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    }
  ];

  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Hydration Science & Wellness Insights</h2>
        <p className="text-gray-600 text-center mb-10">Stay updated with the latest hydration research</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insightCards.map((card) => (
            <Card key={card.id} className="overflow-hidden border rounded-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-2.5 py-1 flex items-center">
                    {card.icon}
                    <span className="ml-1">{card.category}</span>
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button variant="outline" className="w-full rounded-md">Read Article</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HydrationInsights;
