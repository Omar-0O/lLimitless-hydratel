
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {/* Top Banner */}
      <div className="relative col-span-1 md:col-span-2 h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Water+</h2>
          <p className="text-sm md:text-base max-w-md mb-6">
            Hydration elevated to a new level. Our scientifically formulated drinks 
            replenish electrolytes and boost your energy throughout the day.
          </p>
          <div>
            <Button className="bg-cyan-500 hover:bg-cyan-600 rounded-md text-white px-6">Learn More</Button>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 z-20">
          <div className="bg-cyan-500 text-white p-2 rounded-lg inline-flex items-center">
            <span className="text-xs font-semibold">NEW</span>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 z-10 w-1/3 flex items-center justify-center">
          <img 
            src="/lovable-uploads/0d67abdd-8a40-442f-95f7-ca8b38399aac.png" 
            alt="Hydrate Product" 
            className="h-4/5 object-contain" 
          />
        </div>
      </div>

      {/* Yellow Box */}
      <div className="bg-yellow-400 rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wider mb-4">LIMITLESS HYDRATE</h2>
          <p className="text-sm text-white max-w-md mb-6">
            Fuel your day with zero sugar, natural flavors, and essential 
            nutrients. Our premium hydration solution works as hard as you do.
          </p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">☀️</span>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🍊</span>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🌱</span>
          </div>
        </div>
      </div>

      {/* Blue Box */}
      <div className="bg-blue-600 rounded-lg p-8 flex flex-col justify-between min-h-[300px]">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay hydrated, feel elevated</h2>
          <p className="text-sm text-white/90 mb-8">
            Experience optimal performance with our specially formulated hydration blends
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-xl">⚡</span>
            </div>
            <span className="text-white text-xs">Energy Boost</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-xl">💧</span>
            </div>
            <span className="text-white text-xs">Rapid Hydration</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-xl">🔄</span>
            </div>
            <span className="text-white text-xs">Recovery Support</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
              <span className="text-white text-xl">🧠</span>
            </div>
            <span className="text-white text-xs">Mental Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
