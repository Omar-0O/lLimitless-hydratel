
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const CommunityHero = () => {
  return (
    <div className="bg-white py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Card */}
          <Card className={cn("h-80 md:h-96 col-span-1 md:col-span-2 relative overflow-hidden rounded-xl border-none")}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-400/90 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
              alt="Join Our Community" 
              className="absolute inset-0 object-cover w-full h-full"
            />
            <CardContent className="relative z-20 h-full flex flex-col justify-end p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Join Our Community</h2>
              <p className="text-white/90 mb-4 max-w-md">Connect with fellow hydration enthusiasts and share your journey to better health.</p>
              <Link to="#" className="inline-flex bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors w-fit">
                Join Now
              </Link>
            </CardContent>
          </Card>
          
          {/* Smaller Cards */}
          <div className="col-span-1 grid grid-cols-1 gap-4 h-full">
            {/* Habits Card */}
            <Card className="h-[11rem] md:h-[11.5rem] relative overflow-hidden rounded-xl border-none">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-400/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                alt="Daily Habits" 
                className="absolute inset-0 object-cover w-full h-full"
              />
              <CardContent className="relative z-20 h-full flex flex-col justify-center p-6">
                <h3 className="text-xl font-bold text-white mb-1">Better Daily Habits</h3>
                <p className="text-white/90 text-sm">Learn expert tips</p>
              </CardContent>
            </Card>
            
            {/* Testimonials Card */}
            <Card className="h-[11rem] md:h-[11.5rem] relative overflow-hidden rounded-xl border-none">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-yellow-400/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Member Stories" 
                className="absolute inset-0 object-cover w-full h-full"
              />
              <CardContent className="relative z-20 h-full flex flex-col justify-center p-6">
                <h3 className="text-xl font-bold text-white mb-1">Member Stories</h3>
                <p className="text-white/90 text-sm">See transformation journeys</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero;
