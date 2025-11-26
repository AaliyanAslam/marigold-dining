import { Button } from "@/components/ui/button";
import heroImage from "@/assets/herobg2.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-golden/20"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center slide-up">
        <h1 className="text-5xl md:text-7xl font-medium text-white mb-6" style={{fontFamily : "poppins"}}>
          Taste the Luxury of Fine Dining
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Experience culinary excellence where every dish is crafted with passion and served with elegance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="golden" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection("menu")}
          >
            View Menu
          </Button>
          <Button 
            variant="golden-outline" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection("reservation")}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
