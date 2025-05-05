
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/ProductsHero";
import ProductCards from "@/components/ProductCards";
import ProductShowcase from "@/components/ProductShowcase";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E9F6FE]">
      <Navbar />
      <div className="flex-grow">
        <ProductsHero />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
          <ProductCards />
          <div className="text-center mb-12">
            <Link to="/product/original" className="text-blue-600 hover:text-blue-800 font-medium">
              View Limitless Hydrate Original in detail →
            </Link>
          </div>
          <ProductShowcase />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
