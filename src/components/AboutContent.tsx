
import { Card, CardContent } from "@/components/ui/card";

const AboutContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Who we are?</h2>
          <p className="text-gray-700 mb-6">
            At Limitless Naturals, we innovate health and wellness with science-backed supplements. 
            Limitless Hydrate restores essential electrolytes for optimal hydration, keeping you 
            energized and at your best.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="public/lovable-uploads/212fbb28-1362-41f3-b246-c35835b00ed7.png" 
            alt="Limitless Hydrate Product" 
            className="max-h-96 object-contain"
          />
        </div>
      </div>
      
      <Card className="mb-12 shadow-lg border-blue-100">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Philosophy</h2>
          <p className="text-gray-700 mb-4">
            Hydration is essential for energy, focus, and overall well-being. Dehydration can impact 
            performance, mood, and recovery, which is why we created Limitless Hydrate—a scientifically 
            formulated solution to replenish electrolytes and keep you at your best.
          </p>
          <p className="text-gray-700">
            Designed for those who push their limits, it ensures optimal hydration, whether you're working out, 
            recovering, or powering through your day. At Limitless Naturals, we believe in providing clean, 
            effective hydration to help you perform and feel your best.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-blue-50 shadow-lg border-blue-100">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Sustainability & Quality Assurance</h2>
          <p className="text-gray-700 mb-4">
            Limitless Hydrate is crafted with the highest standards in mind, powered by OFT and 
            formulated based on WHO-advised guidelines for optimal hydration.
          </p>
          <p className="text-gray-700 mb-4">
            We prioritize premium sourcing, ensuring clean, high-quality ingredients for maximum 
            effectiveness. Committed to sustainability, we follow eco-friendly practices in production 
            and packaging, delivering a product that's both effective and responsible.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutContent;
