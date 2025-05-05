
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQContent from "@/components/FAQContent";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E9F6FE]">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Got Questions?</h1>
          <h2 className="text-2xl font-medium text-center mb-12">We've Got Answers</h2>
          
          <FAQContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
