
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-white">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-lg font-bold text-blue-600">
          <img 
            src="public/lovable-uploads/22eacf3d-996e-4992-98b1-67c910172485.png" 
            alt="Limitless Hydrate Logo" 
            className="h-8" 
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/products" className="text-sm font-medium text-gray-600 hover:text-gray-900">Products</Link>
          <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">About us</Link>
          <Link to="/community" className="text-sm font-medium text-gray-600 hover:text-gray-900">Community</Link>
        </div>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm px-5">Buy Now</Button>
    </nav>
  );
};

export default Navbar;
