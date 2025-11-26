import { Card } from "@/components/ui/card";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const dishes = [
  {
    id: 1,
    name: "Premium Grilled Steak",
    description: "Prime beef steak with seasonal vegetables and signature sauce",
    price: "$45",
    image: dish1,
  },
  {
    id: 2,
    name: "Luxurious Seafood Platter",
    description: "Fresh lobster, prawns, and mussels with garlic butter",
    price: "$65",
    image: dish2,
  },
  {
    id: 3,
    name: "Truffle Pasta Delight",
    description: "Handmade pasta with black truffle and parmesan",
    price: "$38",
    image: dish3,
  },
  {
    id: 4,
    name: "Berry Tart Supreme",
    description: "Fresh berries on vanilla cream with gold leaf",
    price: "$18",
    image: dish4,
  },
  {
    id: 5,
    name: "Premium Sushi Selection",
    description: "Chef's choice of the finest fresh fish",
    price: "$55",
    image: dish5,
  },
  {
    id: 6,
    name: "Roasted Lamb Chops",
    description: "Herb-crusted lamb with roasted vegetables",
    price: "$52",
    image: dish6,
  },
];

const PopularDishes = () => {
  return (
    <section id="popular" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Most Popular <span className="text-golden">Dishes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our signature creations that keep our guests coming back
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="overflow-hidden border-2 border-golden/20 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-golden font-bold text-xl">{dish.price}</span>
                </div>
                <p className="text-muted-foreground">{dish.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
