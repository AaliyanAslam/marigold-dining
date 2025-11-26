import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request received! We'll contact you shortly.");
    setFormData({ name: "", phone: "", guests: "", date: "", time: "" });
  };

  return (
    <section id="reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Book a <span className="text-golden">Table</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 border-2 border-golden/20 slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="border-golden/30 focus:border-golden"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 123-4567"
                className="border-golden/30 focus:border-golden"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-2">
                  Number of Guests
                </label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="20"
                  required
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  placeholder="2"
                  className="border-golden/30 focus:border-golden"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Date
                </label>
                <Input
                  id="date"
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="border-golden/30 focus:border-golden"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Time
                </label>
                <Input
                  id="time"
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="border-golden/30 focus:border-golden"
                />
              </div>
            </div>

            <Button type="submit" variant="golden" size="lg" className="w-full">
              Reserve Table
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Reservation;
