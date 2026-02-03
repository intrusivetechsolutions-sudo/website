import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroIot from "@/assets/hero-iot.jpg";
import heroDeveloper from "@/assets/hero-developer.jpg";
import heroCode from "@/assets/hero-code.jpg";

const Hero = () => {
  const carouselImages = [
    { src: heroIot, alt: "IoT Services" },
    { src: heroDeveloper, alt: "Skilled Developer" },
    { src: heroCode, alt: "Code of Life" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-32 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-6">
              🚀 Building the Future of Technology
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient block sm:inline">
                Intrusive Tech Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              Transforming ideas into powerful digital solutions. We build innovative software, mobile apps, and AI-powered systems that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto font-semibold gap-2"
              >
                <a href="#services">
                  Explore Services
                  <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-semibold"
              >
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image absolute inset-0 w-full h-full object-cover"
                />
              ))}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
