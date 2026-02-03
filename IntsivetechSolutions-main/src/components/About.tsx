import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          About Us
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto">
          We are a passionate team of developers and innovators dedicated to creating exceptional digital experiences.
        </p>

        {/* Main Description */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Intrusive Tech Solutions</span> is a dynamic IT company delivering innovative solutions in mobile apps, blockchain, AI, IoT, and custom software development. We bridge the gap between technology and business with reliable, scalable, and future-ready digital solutions.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Target className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Eye className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a globally recognized leader in innovative tech solutions, transforming how businesses operate and succeed.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-primary" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Our Values</h3>
            <p className="text-muted-foreground">
              Innovation, integrity, and excellence in every project. We believe in building lasting partnerships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
