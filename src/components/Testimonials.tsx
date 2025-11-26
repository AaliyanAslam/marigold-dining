import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "ASMA QURESHI",
    role: "Food Critic",
    content: `
    Absolutely loved my experience at Marigold Restaurant in Karachi. 💛
The ambiance is warm and inviting, the service is attentive, and the food is just wow! Every dish was flavorful, beautifully presented, and felt crafted with care.

It’s rare to find a place that combines great taste, great vibes, and great service all in one — but Marigold definitely delivers. Love, love, love it! ✨
    
    `
    
    ,
    rating: 5,
  },
  {
    name: "Mohammed Khanani",
    role: "Regular Guest",
    content: `
    I went for breakfast and the food was very good. Had the sliders and truffle omelette. Both were great. French toast was ok. Prices a bit steep but the quality and ambiance justify them. Staff was friendly and service was fast.
    `,
    rating: 5,
  },
  {
    name: "Muhammad Azhar Shaikh",
    role: "Celebrating Anniversary",
    content: `
    We were a group of five. Over all food was good and quality and quality both were fine. But I didn't find it anything extraordinary. The bread under the salmon was bit dry and hard. Mango juice was average. Mushroom Omelette was good.
Over all it is a good place for once in a while visit for me.
    `,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-golden">Guests Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from our valued patrons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-2 border-golden/20 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-golden fill-golden w-5 h-5" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
