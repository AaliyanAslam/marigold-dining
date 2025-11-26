import React from 'react'
import menuimg from '../assets/bigmenu.png';

const MenuImage = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our <span className="text-golden">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-3 text-lg">
            A premium dining experience crafted with elegance.
          </p>
        </div>

        {/* BIG MENU IMAGE AREA */}
<div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-muted">
  <img
    src={menuimg}
    alt="Menu"
    className="w-full h-auto object-contain"
  />
</div>


      </div>
    </section>
  );
};

export default MenuImage;

