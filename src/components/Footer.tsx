import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-bg text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-golden mb-4">Marigold Restaurant</h3>
            <p className="text-white/70">
              Experience the finest in culinary excellence and hospitality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
            <div className="space-y-2">
              <button onClick={() => scrollToSection("home")} className="block text-white/70 hover:text-golden transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("menu")} className="block text-white/70 hover:text-golden transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection("about")} className="block text-white/70 hover:text-golden transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection("reservation")} className="block text-white/70 hover:text-golden transition-colors">
                Reservation
              </button>
              <button onClick={() => scrollToSection("contact")} className="block text-white/70 hover:text-golden transition-colors">
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-golden transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-golden transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/70 hover:text-golden transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            © 2025 Marigold Restaurant. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
