
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const FAQContent = () => {
  const generalQuestions = [
    {
      question: "What are your hydration packets made of?",
      answer: "Our hydration packets contain a blend of essential electrolytes, vitamins, and minerals designed to replenish what your body loses through exercise, heat, or illness. Each packet includes sodium, potassium, magnesium, and calcium in optimal ratios for hydration, along with B vitamins and zinc."
    },
    {
      question: "What are the key benefits of Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original provides rapid hydration, electrolyte replenishment, improved physical performance, faster recovery, and enhanced mental clarity. Our formula is designed for maximum absorption at the cellular level without artificial ingredients."
    },
    {
      question: "What flavors are available?",
      answer: "We currently offer Blue Raspberry, Watermelon, Lemon-Lime, and Mixed Berry flavors. All our flavors use natural ingredients and contain no artificial colors or sweeteners."
    },
    {
      question: "How often should I consume Limitless Hydrate every day?",
      answer: "We recommend 1-3 servings daily, depending on your activity level, climate, and individual hydration needs. Athletes in training might benefit from multiple servings, while someone less active might need just one serving daily."
    },
    {
      question: "Is it suitable for people with dietary restrictions?",
      answer: "Yes, Limitless Hydrate is gluten-free, vegan, keto-friendly, non-GMO, and contains no artificial colors, flavors, or preservatives. However, always check the ingredient list if you have specific allergies."
    },
    {
      question: "Does it contain caffeine?",
      answer: "No, Limitless Hydrate Original is caffeine-free, making it suitable for use any time of day or night without affecting your sleep."
    },
    {
      question: "When can I use Limitless Hydrate?",
      answer: "You can use Limitless Hydrate before, during, or after workouts, when traveling, after a night out, when feeling under the weather, or anytime you need enhanced hydration throughout your day."
    }
  ];

  const ingredientQuestions = [
    {
      question: "What are the ingredients in your hydration packets?",
      answer: "Our hydration packets contain sodium citrate, potassium citrate, magnesium citrate, calcium citrate, vitamin C, zinc, B vitamins (B1, B3, B5, B6, B12), natural flavors, citric acid, malic acid, stevia leaf extract, and monk fruit extract. All ingredients are carefully sourced for quality and effectiveness."
    },
    {
      question: "Are your hydration packets natural?",
      answer: "Yes, we use only natural flavors, colors from fruit and vegetable juices, and natural sweeteners like stevia and monk fruit extract. Our products contain no artificial ingredients, preservatives, or synthetic colors."
    },
    {
      question: "Do your packets contain any allergens?",
      answer: "Our products are manufactured in a facility that processes common allergens like milk, eggs, wheat, soy, and tree nuts. While our formula itself doesn't contain these ingredients, those with severe allergies should be aware of potential cross-contamination risks."
    },
    {
      question: "What is monk fruit?",
      answer: "Monk fruit is a small round fruit native to southern China that has been used for centuries in traditional medicine. The extract is 100-250 times sweeter than sugar but contains zero calories and does not impact blood sugar levels, making it an excellent natural sweetener alternative."
    },
    {
      question: "How much sodium is in each packet?",
      answer: "Each packet contains 350mg of sodium, which is carefully calibrated to help replace what is lost through sweat without providing excessive amounts. This level is optimal for hydration without overloading on sodium."
    }
  ];

  const usageInstructions = [
    {
      question: "When should I use Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original is perfect for use before, during, or after physical activity, during travel, after a night out, when sick, or any time you need enhanced hydration. Many customers incorporate it into their daily routine."
    },
    {
      question: "How do I use the hydration packets?",
      answer: "Simply mix one packet with 12-16oz (350-470ml) of cold water. Shake or stir until completely dissolved. You can adjust the water amount to your taste preference—more water for a lighter flavor, less for a stronger taste."
    },
    {
      question: "Can I mix it with hot water?",
      answer: "We don't recommend mixing with hot water as it may affect the efficacy of some ingredients and alter the flavor profile. Room temperature or cold water works best for optimal taste and effectiveness."
    },
    {
      question: "Is it possible to use with dietary restrictions?",
      answer: "Yes, our product is compatible with many dietary restrictions as it's gluten-free, vegan, keto-friendly, non-GMO, and contains no artificial ingredients. It's designed to be accessible to as many people as possible."
    },
    {
      question: "Is overdosage possible?",
      answer: "While our product is safe when used as directed, consuming excessive amounts may cause digestive discomfort or electrolyte imbalances. We recommend following the suggested serving guidelines of 1-3 packets per day depending on your activity level and needs."
    }
  ];

  const availabilityQuestions = [
    {
      question: "Where can I purchase Limitless Hydrate?",
      answer: "Limitless Hydrate is available directly through our website, as well as select retail partners nationwide including specialty health stores, fitness centers, and online marketplaces. Check our website's store locator for a retailer near you."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we currently ship to over 30 countries. International shipping rates and delivery timeframes vary by location. You can find specific shipping information during checkout or on our shipping policy page."
    },
    {
      question: "What is the shelf life of Limitless Hydrate?",
      answer: "Limitless Hydrate packets have a shelf life of 24 months from the date of manufacture when stored in a cool, dry place. The expiration date is printed on each packet and outer packaging."
    },
    {
      question: "Do you offer subscription options?",
      answer: "Yes, we offer flexible subscription plans that save you 15% on every order. You can choose to receive your preferred products every 15, 30, 45, or 60 days, and you can pause, skip, or cancel your subscription anytime."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically ship within 1-2 business days and arrive within 3-5 business days with standard shipping. Expedited shipping options are available at checkout for faster delivery."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Find answers to common questions about our products, ingredients, usage, and availability.
        </p>
      </div>
      
      <Tabs defaultValue="general" className="w-full mb-16">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
          <TabsTrigger 
            value="general"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
          >
            General
          </TabsTrigger>
          <TabsTrigger 
            value="ingredients"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
          >
            Ingredients
          </TabsTrigger>
          <TabsTrigger 
            value="usage"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
          >
            Usage
          </TabsTrigger>
          <TabsTrigger 
            value="availability"
            className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
          >
            Availability
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Accordion type="single" collapsible className="w-full">
            {generalQuestions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t border-gray-200 last:border-b"
              >
                <AccordionTrigger className="py-5 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="ingredients">
          <Accordion type="single" collapsible className="w-full">
            {ingredientQuestions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t border-gray-200 last:border-b"
              >
                <AccordionTrigger className="py-5 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="usage">
          <Accordion type="single" collapsible className="w-full">
            {usageInstructions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t border-gray-200 last:border-b"
              >
                <AccordionTrigger className="py-5 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="availability">
          <Accordion type="single" collapsible className="w-full">
            {availabilityQuestions.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-t border-gray-200 last:border-b"
              >
                <AccordionTrigger className="py-5 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
      
      <div className="rounded-xl overflow-hidden bg-white shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-full">
            <img 
              src="public/lovable-uploads/ae9b3a6e-d4af-4c12-a863-ccfee3f59990.png"
              alt="Limitless Hydrate Products" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Contact us</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium mb-1">First Name</label>
                  <input 
                    type="text" 
                    id="firstname" 
                    placeholder="First Name"
                    className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium mb-1">Last Name</label>
                  <input 
                    type="text" 
                    id="lastname" 
                    placeholder="Last Name"
                    className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="address@domain.com"
                    className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+00123456789"
                    className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={3}
                  placeholder="Write your message..."
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black resize-none"
                ></textarea>
              </div>
              <div>
                <Button type="submit" className="rounded-full bg-black hover:bg-black/90 text-white px-10">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
