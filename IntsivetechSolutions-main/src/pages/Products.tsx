import { ExternalLink, FileText, Github, ImagePlus, Activity, Brain, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

interface Product {
  name: string;
  description: string;
  status: "deployed" | "in-progress";
  icon: React.ReactNode;
  liveUrl?: string;
  docsUrl?: string;
  githubUrl?: string;
  tags: string[];
  features: string[];
  hasGallery?: boolean;
  galleryImages?: string[];
}

const products: Product[] = [
  {
    name: "Brain Waves Tracker",
    description:
      "An innovative IoT product designed to track and monitor brain waves in real time. It captures EEG signals and provides insightful analytics to help users understand their cognitive patterns, stress levels, and mental focus.",
    status: "in-progress",
    icon: "brain",
    tags: ["IoT", "EEG", "Brain Monitoring", "Hardware"],
    features: [
      "Real-time brain wave monitoring",
      "EEG signal capture & processing",
      "Cognitive pattern analytics",
      "Stress & focus level tracking",
    ],
  },
  {
    name: "Heart Sink",
    description:
      "A wearable wrist watch-type device engineered to accurately measure pulse rate. Heart Sink provides continuous heart rate monitoring with a sleek, comfortable design perfect for everyday use and fitness tracking.",
    status: "in-progress",
    icon: "watch",
    tags: ["Wearable", "Health Tech", "Pulse Monitoring", "Hardware"],
    features: [
      "Continuous pulse rate measurement",
      "Wrist watch form factor",
      "Real-time heart rate display",
      "Fitness & health tracking",
    ],
  },
  {
    name: "Schumann Radiation Monitor",
    description:
      "A deployed mobile application that collects Schumann resonance radiation data from different devices across the globe and calculates a worldwide average. It aggregates readings from users everywhere to provide a comprehensive view of Earth's electromagnetic environment.",
    status: "deployed",
    icon: "activity",
    liveUrl: "#",
    tags: ["Mobile App", "Schumann Resonance", "Global Data", "Analytics"],
    features: [
      "Collects Schumann radiation from multiple devices",
      "Global average calculation",
      "Real-time data aggregation worldwide",
      "Cross-device compatibility",
    ],
    hasGallery: true,
    galleryImages: [],
  },
];

const statusColors = {
  deployed: "bg-green-500/20 text-green-400 border-green-500/30",
  "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

const statusLabels = {
  deployed: "Deployed",
  "in-progress": "In Progress",
};

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} className="text-primary" />,
  watch: <Watch size={28} className="text-primary" />,
  activity: <Activity size={28} className="text-primary" />,
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of innovative solutions. Each project represents our commitment to excellence and cutting-edge technology.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      {iconMap[product.icon as string]}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border whitespace-nowrap ${statusColors[product.status]}`}
                  >
                    {statusLabels[product.status]}
                  </span>
                </div>

                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* App Screenshot Gallery for deployed app */}
                {product.hasGallery && (
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">App Screenshots</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {product.galleryImages && product.galleryImages.length > 0 ? (
                        product.galleryImages.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="relative aspect-[9/16] rounded-lg overflow-hidden border border-border bg-muted"
                          >
                            <img
                              src={img}
                              alt={`${product.name} screenshot ${imgIdx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))
                      ) : (
                        /* Placeholder slots for adding photos */
                        Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="relative aspect-[9/16] rounded-lg overflow-hidden border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors cursor-pointer"
                          >
                            <ImagePlus size={24} className="text-muted-foreground/50" />
                            <span className="text-xs text-muted-foreground/50">Add Photo</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {product.liveUrl && (
                    <Button asChild size="sm" className="gap-2">
                      <a href={product.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    </Button>
                  )}
                  {product.docsUrl && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={product.docsUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={16} />
                        Documentation
                      </a>
                    </Button>
                  )}
                  {product.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a href={product.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card rounded-xl p-8 md:p-12 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're always looking for exciting new challenges. Let's discuss how we can bring your vision to life.
            </p>
            <Button asChild size="lg">
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
