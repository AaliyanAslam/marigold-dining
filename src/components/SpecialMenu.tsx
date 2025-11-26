import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const specialItems = [
  {
    name: "Chef's Signature Wellington",
    description: "Beef Wellington with foie gras, wrapped in puff pastry",
    price: "RS 2999",
  },
  {
    name: "Golden Marigold Risotto",
    description: "Saffron risotto with scallops and edible gold",
    price: "RS 1999",
  },
  {
    name: "Royal Lobster Thermidor",
    description: "Whole lobster in brandy cream sauce",
    price: "RS 6499",
  },
  {
    name: "Chocolate Symphony",
    description: "Dark chocolate soufflé with vanilla bean ice cream",
    price: "RS 999",
  },
];

const SpecialMenu = () => {
  return (
    <section id="menu" className="py-20 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <div className="flex justify-center mb-4">
            <Star className="text-golden fill-golden" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Chef's <span className="text-golden">Special</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Exclusive dishes crafted by our master chefs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {specialItems.map((item, index) => (
            <Card
              key={index}
              className="bg-secondary/50 border-golden/30 p-6 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-golden">{item.name}</h3>
                <span className="text-white font-bold text-xl">{item.price}</span>
              </div>
              <p className="text-white/70">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialMenu;
