
import React from "react";
import { 
  Zap, 
  Droplet,
  WheatOff,
  Candy,
  Dna,
  FlaskRound 
} from "lucide-react";

const HydrateFeatures = () => {
  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-xl">
        {/* Top Left - Yellow Background */}
        <div className="bg-[#FEF7CD] p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">LIMITLESS HYDRATE</h2>
          <p className="text-gray-800 mb-8">
            Fuel your body with essential electrolytes, vitamins, and great taste. 
            Whether you're working out or on the go, Limitless Hydrate keeps you 
            refreshed, replenished, and energized.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-amber-500" />
              <span className="text-sm font-medium">Optimized Osmolarity</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Droplet className="h-6 w-6 text-blue-500" />
              <span className="text-sm font-medium">238mg Electrolytes</span>
            </div>
            
            <div className="flex items-center gap-2">
              <WheatOff className="h-6 w-6 text-amber-600" />
              <span className="text-sm font-medium">Gluten & Lactose Free</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Candy className="h-6 w-6 text-pink-500" />
              <span className="text-sm font-medium">With Xylitol</span>
            </div>
          </div>
        </div>
        
        {/* Top Right - Product Image */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img 
            src="public/lovable-uploads/3ed72755-87f4-4faa-b180-590cbc7ae80b.png" 
            alt="Limitless Hydrate Products" 
            className="max-h-80 object-contain"
          />
        </div>
        
        {/* Bottom Left - Person Using Product */}
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <img 
            src="public/lovable-uploads/99187b4f-56ab-4e3a-af8d-20a0f024bc96.png" 
            alt="Person using Limitless Hydrate" 
            className="max-h-80 object-contain"
          />
        </div>
        
        {/* Bottom Right - Dark Blue Background */}
        <div className="bg-[#1A1F2C] text-white p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay hydrated, feel elevated</h2>
          <p className="text-gray-300 mb-8">
            with a refreshing blend of electrolytes, vitamins, and great 
            taste—designed to keep you energized and balanced throughout your day.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Droplet className="h-6 w-6 text-blue-400" />
              <span className="text-sm font-medium">Hydration, Elevated</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Dna className="h-6 w-6 text-green-400" />
              <span className="text-sm font-medium">Tailored for Your Lifestyle</span>
            </div>
            
            <div className="flex items-center gap-2">
              <FlaskRound className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-medium">Infused with Electrolytes, Vitamins, and More</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 text-yellow-400 flex items-center justify-center">⭐</div>
              <span className="text-sm font-medium">Amazing Taste</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydrateFeatures;
