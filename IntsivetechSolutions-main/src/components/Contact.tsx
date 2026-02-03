import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          Contact Us
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Ready to start your project? Get in touch with us today.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                <a 
                  href="intrusivetechsolutions@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  intrusivetechsolutions@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">+91 8000089949</p>
                <p className="text-muted-foreground text-sm">+91 8619049530</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm">
                  51 Tetrdi, Udaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
