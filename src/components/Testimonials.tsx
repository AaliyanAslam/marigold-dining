import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Critic",
    content: "An absolutely divine experience! The attention to detail and quality of ingredients is unmatched. Marigold sets the standard for fine dining.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Regular Guest",
    content: "I've hosted multiple corporate dinners here, and Marigold never disappoints. The ambiance is perfect, and the service is impeccable.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Celebrating Anniversary",
    content: "Our anniversary dinner was magical. From the moment we walked in, we felt special. The food was extraordinary, and the staff made our evening perfect.",
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
