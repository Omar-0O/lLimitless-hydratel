
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/ProductsHero";
import ProductCards from "@/components/ProductCards";
import ComparisonTable from "@/components/ComparisonTable";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <ProductsHero />
        <ProductCards />
        <ComparisonTable />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
