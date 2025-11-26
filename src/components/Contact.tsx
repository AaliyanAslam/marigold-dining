import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Visit <span className="text-golden">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're located in the heart of the city, ready to serve you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 slide-up">
            <Card className="p-6 border-2 border-golden/20">
              <div className="flex items-start gap-4">
                <MapPin className="text-golden w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-muted-foreground">
                   C-19-C, Kh, 6, Phase Nishat Commercial Area <br /> Phase 6 Defence Housing Authority, <br /> Karachi, 75500
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-golden/20">
              <div className="flex items-start gap-4">
                <Phone className="text-golden w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">+92 306 2763123</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-golden/20">
              <div className="flex items-start gap-4">
                <Mail className="text-golden w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">reservations@marigold.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-golden/20">
              <div className="flex items-start gap-4">
                <Clock className="text-golden w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Saturday - Friday: 9:00 AM - 12:00 AM</p>
                    <p>Monday - <span className="text-red-700">Closed</span></p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="slide-up">
            <Card className="h-full min-h-[500px] border-2 border-golden/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8653701792696!2d67.05565737482459!3d24.800063147672756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d1b7f4defa5%3A0xef5bf9d3c963c56!2sMarigold!5e0!3m2!1sen!2s!4v1764181580291!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marigold Restaurant Location"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
