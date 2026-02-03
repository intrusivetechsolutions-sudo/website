import { ExternalLink, FileText, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  description: string;
  status: "live" | "development" | "coming-soon";
  liveUrl?: string;
  docsUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const products: Product[] = [
  {
    name: "Project Alpha",
    description:
      "A comprehensive mobile application for inventory management with real-time tracking and analytics.",
    status: "live",
    liveUrl: "#",
    docsUrl: "#",
    tags: ["Mobile App", "React Native", "Firebase"],
  },
  {
    name: "SmartHome Hub",
    description:
      "IoT-based home automation system with voice control and energy monitoring capabilities.",
    status: "development",
    githubUrl: "#",
    docsUrl: "#",
    tags: ["IoT", "Python", "MQTT"],
  },
  {
    name: "ChainSecure",
    description:
      "Blockchain-powered document verification and digital signature platform for enterprises.",
    status: "coming-soon",
    tags: ["Blockchain", "Solidity", "Web3"],
  },
  {
    name: "AI Assistant Pro",
    description:
      "Intelligent chatbot solution for customer support with multi-language support and sentiment analysis.",
    status: "live",
    liveUrl: "#",
    docsUrl: "#",
    tags: ["AI/ML", "Python", "NLP"],
  },
];

const statusColors = {
  live: "bg-green-500/20 text-green-400 border-green-500/30",
  development: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "coming-soon": "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const statusLabels = {
  live: "Live",
  development: "In Development",
  "coming-soon": "Coming Soon",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 md:p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[product.status]}`}
                  >
                    {statusLabels[product.status]}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

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
