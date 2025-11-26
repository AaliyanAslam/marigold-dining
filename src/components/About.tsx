import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-restaurant.jpg";

const features = [
  "Fresh, locally sourced ingredients",
  "Luxury ambiance with elegant decor",
  "Professional award-winning chefs",
  "Perfect for family gatherings",
  "Ideal for corporate events",
  "Exceptional customer service",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <img
              src={aboutImage}
              alt="Marigold Restaurant Interior"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-golden">Marigold</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Marigold Restaurant, we believe that dining is an art. Our commitment to excellence has made us a premier destination for those seeking an unforgettable culinary experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From intimate dinners to grand celebrations, our elegant setting and impeccable service create the perfect atmosphere for any occasion.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-golden w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
