
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HydrateFeatures from "@/components/HydrateFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import ConnectHydrateSection from "@/components/ConnectHydrateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <HeroSection />
        <HydrateFeatures />
        <ProductShowcase />
      </div>
      <ConnectHydrateSection />
      <Footer />
    </div>
  );
};

export default Index;
