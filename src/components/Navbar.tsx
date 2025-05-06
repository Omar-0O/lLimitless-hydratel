
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-[#E9F6FE]">
      <div className="hidden md:flex space-x-8">
        <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-gray-900">Products</Link>
        <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About us</Link>
        <Link to="/community" className="text-sm font-medium text-gray-700 hover:text-gray-900">Community</Link>
      </div>
      
      <Link to="/" className="flex items-center justify-center">
        <img 
          src="public/lovable-uploads/22eacf3d-996e-4992-98b1-67c910172485.png" 
          alt="Limitless Hydrate Logo" 
          className="h-8" 
        />
      </Link>
      
      <div>
        <Button className="bg-black hover:bg-black/90 text-white rounded-md text-sm px-5 py-2 font-medium">Buy Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
