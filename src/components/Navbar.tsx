
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-white">
      <div className="hidden md:flex space-x-6">
        <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">Products</Link>
        <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About us</Link>
      </div>
      
      <Link to="/" className="flex items-center justify-center">
        <img 
          src="public/lovable-uploads/22eacf3d-996e-4992-98b1-67c910172485.png" 
          alt="Limitless Hydrate Logo" 
          className="h-8" 
        />
      </Link>
      
      <div className="flex items-center space-x-6">
        <Link to="/community" className="hidden md:inline-block text-sm font-medium text-gray-600 hover:text-gray-900">Community</Link>
        <Button className="bg-black hover:bg-black/90 text-white rounded-md text-sm px-5">Buy Now</Button>
      </div>
    </nav>
  );
};

export default Navbar;
