import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/finalmarilogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#DDA83A] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-golden cursor-pointer" onClick={() => scrollToSection("home")}>
           <img src={logo} className="h-9  rounded-md" alt="" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-white hover:text-gray-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-white hover:text-gray-600 transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-gray-600 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection("popular")} className="text-white hover:text-gray-600 transition-colors">
              Popular Dishes
            </button>
            <button onClick={() => scrollToSection("reservation")} className="text-white hover:text-gray-600 transition-colors">
              Reservation
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-gray-600 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-white hover:text-golden transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("menu")} className="text-white hover:text-golden transition-colors text-left">
                Menu
              </button>
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-golden transition-colors text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection("popular")} className="text-white hover:text-golden transition-colors text-left">
                Popular Dishes
              </button>
              <button onClick={() => scrollToSection("reservation")} className="text-white hover:text-golden transition-colors text-left">
                Reservation
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-golden transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
