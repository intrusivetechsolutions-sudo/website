import {
  Target,
  Eye,
  Lightbulb,
  Calendar,
  Users,
  Rocket,
  Globe,
  CheckCircle,
  Cpu,
  ShieldCheck,
  Handshake,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description:
      "Intrusive Tech Solutions was established with a vision to deliver innovative, future-ready technology solutions.",
  },
  {
    year: "2025",
    title: "First IoT Products Launched",
    description:
      "Began development on Brain Waves Tracker and Heart Sink — our flagship IoT and wearable devices.",
  },
  {
    year: "2025",
    title: "Schumann Radiation Monitor Deployed",
    description:
      "Successfully deployed our first mobile application that aggregates Schumann resonance data globally.",
  },
  {
    year: "2026",
    title: "Expanding Horizons",
    description:
      "Scaling operations with new clients, building a growing team, and pushing into AI, blockchain, and custom software development.",
  },
];

const stats = [
  { icon: <Calendar size={28} />, value: "Est. 2025", label: "Founded" },
  { icon: <Rocket size={28} />, value: "3+", label: "Products Built" },
  { icon: <Users size={28} />, value: "Growing", label: "Team" },
  { icon: <Globe size={28} />, value: "Global", label: "Reach" },
];

const coreValues = [
  {
    icon: <Lightbulb size={24} />,
    title: "Innovation",
    description:
      "We constantly explore emerging technologies to deliver solutions that are ahead of the curve.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Integrity",
    description:
      "Transparency, honesty, and ethical practices are at the heart of everything we do.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards of quality in every product and service we deliver.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Partnership",
    description:
      "We believe in building long-term relationships, working alongside our clients as true partners.",
  },
  {
    icon: <Cpu size={24} />,
    title: "Technology-First",
    description:
      "We leverage cutting-edge tools and frameworks to build scalable, reliable solutions.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Growth Mindset",
    description:
      "We embrace continuous learning and improvement, both for our team and our clients.",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Intrusive Tech Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established in <span className="text-foreground font-semibold">2025</span>, we are a passionate and driven technology company on a mission to transform ideas into powerful digital products.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-5 md:p-6 border border-border text-center hover:border-primary/40 transition-all duration-300"
              >
                <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <div className="bg-card rounded-xl p-6 md:p-10 border border-border space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                <span className="text-foreground font-semibold">Intrusive Tech Solutions</span> was founded in 2025 with a clear purpose — to bridge the gap between cutting-edge technology and real-world business needs. What began as a small team of passionate developers and innovators has quickly grown into a company delivering impactful products across IoT, wearable tech, mobile applications, and beyond.
              </p>
              <p>
                From day one, we set out to build products that matter. Our journey started with the development of <span className="text-foreground font-medium">Brain Waves Tracker</span>, an IoT device for monitoring brain activity, and <span className="text-foreground font-medium">Heart Sink</span>, a wearable wrist device for pulse rate measurement. These projects showcase our commitment to health-tech innovation.
              </p>
              <p>
                We also successfully deployed the <span className="text-foreground font-medium">Schumann Radiation Monitor</span> — a mobile application that collects Schumann resonance data from devices worldwide and calculates a global average. This was a milestone that demonstrated our ability to deliver production-ready software from concept to deployment.
              </p>
              <p>
                As a young company, we are driven by ambition, fueled by innovation, and committed to excellence. We continue to explore new domains including AI/ML, blockchain, and custom enterprise software — always keeping our clients' success at the center of everything we do.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values Trio */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Mission, Vision & <span className="text-primary">Purpose</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses and individuals with cutting-edge technology solutions that drive growth, efficiency, and meaningful innovation in everyday life.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a globally recognized leader in innovative tech solutions — transforming how businesses operate and how people interact with technology.
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Our Purpose</h3>
                <p className="text-muted-foreground">
                  To make advanced technology accessible and impactful — building products that solve real problems for real people, from healthcare IoT to global data platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline / Milestones */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our <span className="text-primary">Journey</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-primary/30 ml-4 md:ml-0 md:mx-auto pl-8 md:pl-10 space-y-10">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[2.55rem] md:-left-[2.8rem] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-2">
                      {milestone.year}
                    </span>
                    <h4 className="text-lg font-bold text-foreground mb-1">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              What We <span className="text-primary">Do</span>
            </h2>
            <div className="bg-card rounded-xl p-6 md:p-10 border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-base text-muted-foreground">
                {[
                  "IoT Product Development",
                  "Wearable Health Tech Devices",
                  "Mobile Application Development",
                  "AI & Machine Learning Solutions",
                  "Blockchain & Web3 Development",
                  "Custom Software Development",
                  "Cloud Infrastructure & DevOps",
                  "UI/UX Design & Prototyping",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-card rounded-xl p-8 md:p-12 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you have an idea to build or a problem to solve, we'd love to hear from you. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg">
                <a href="/#contact">Get In Touch</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/products">View Our Products</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
