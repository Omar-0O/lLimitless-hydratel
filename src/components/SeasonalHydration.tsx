
import { Sun, Snowflake, Leaf } from "lucide-react";

const SeasonalHydration = () => {
  return (
    <section className="py-14 bg-[#E9F6FE]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hydration Through the Seasons</h2>
        
        {/* Summer Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center mb-4">
              <Sun className="text-yellow-500 mr-2" size={24} />
              <h3 className="text-2xl font-bold">Summer Hydration</h3>
            </div>
            <h4 className="font-medium text-lg mb-4">Maintain optimal hydration in warmer months</h4>
            <p className="text-gray-700 mb-4">
              Summer dehydration happens quickly. Stay ahead with electrolyte-rich beverages and cooling foods like cucumber and watermelon. 
              Drinking enough water during hot days isn't just about comfort—it's essential for regulating body temperature and preventing heat-related illness.
            </p>
            <p className="text-gray-700">
              Consider integrating infused water recipes with mint, citrus, and seasonal berries to make hydration more enjoyable during the hottest days.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Summer Hydration"
              className="rounded-xl w-full h-72 object-cover"
            />
          </div>
        </div>
        
        {/* Winter Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
              alt="Winter Hydration"
              className="rounded-xl w-full h-72 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <Snowflake className="text-blue-500 mr-2" size={24} />
              <h3 className="text-2xl font-bold">Winter Hydration</h3>
            </div>
            <h4 className="font-medium text-lg mb-4">Maintain hydration in colder weather</h4>
            <p className="text-gray-700 mb-4">
              Cold weather often reduces our thirst signals, but our bodies still need the same hydration. Indoor heating creates drier air that increases fluid loss through respiration.
            </p>
            <p className="text-gray-700">
              Warm options like herbal teas, broths, and soups can help maintain hydration while providing comfort during the winter months. Indoor heating creates drier air that increases fluid loss through respiration.
            </p>
          </div>
        </div>
        
        {/* Spring Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex items-center mb-4">
              <Leaf className="text-green-500 mr-2" size={24} />
              <h3 className="text-2xl font-bold">Spring/Fall Hydration</h3>
            </div>
            <h4 className="font-medium text-lg mb-4">Transitional season hydration strategies</h4>
            <p className="text-gray-700 mb-4">
              Changing seasons bring changing hydration needs. As temperatures fluctuate, pay attention to how your body responds and adjust your water intake accordingly.
            </p>
            <p className="text-gray-700">
              Seasonal allergies can increase fluid needs as your body works to flush out allergens. Consider adding natural antihistamines like nettle tea or local honey to your hydration routine during high pollen seasons.
            </p>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
              alt="Spring Hydration"
              className="rounded-xl w-full h-72 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHydration;
