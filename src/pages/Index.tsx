import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularDishes from "@/components/PopularDishes";
import About from "@/components/About";
import SpecialMenu from "@/components/SpecialMenu";
import Reservation from "@/components/Reservation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MenuImage from "@/components/MenuCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PopularDishes />
      <About />
      <SpecialMenu />
      <MenuImage/>
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
