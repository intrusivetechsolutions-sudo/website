import { useState } from "react";
import mobileImg from "@/assets/service-mobile.jpg";
import blockchainImg from "@/assets/service-blockchain.jpg";
import aiImg from "@/assets/service-ai.jpg";
import iotImg from "@/assets/service-iot.jpg";
import fullstackImg from "@/assets/service-fullstack.jpg";
import softwareImg from "@/assets/service-software.jpg";
import ServiceModal from "./ServiceModal";

interface ServiceDetails {
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  process: string[];
}

const services: ServiceDetails[] = [
  {
    title: "Mobile App Creation",
    description:
      "Custom mobile apps for iOS and Android with seamless UX and high performance.",
    image: mobileImg,
    features: [
      "Native iOS & Android development for optimal performance",
      "Cross-platform solutions using React Native & Flutter",
      "UI/UX design focused on user engagement",
      "App Store & Play Store deployment assistance",
      "Push notifications & real-time updates",
      "Offline functionality & data sync",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "REST APIs"],
    process: [
      "Requirement analysis and project scoping",
      "UI/UX wireframing and prototyping",
      "Agile development with regular updates",
      "Quality assurance and testing",
      "Deployment and post-launch support",
    ],
  },
  {
    title: "Blockchain-Based Services",
    description:
      "Secure decentralized solutions including smart contracts and blockchain integration.",
    image: blockchainImg,
    features: [
      "Smart contract development & auditing",
      "Decentralized application (dApp) development",
      "Token creation & ICO/IDO support",
      "NFT marketplace development",
      "Supply chain blockchain solutions",
      "Crypto wallet integration",
    ],
    technologies: ["Solidity", "Ethereum", "Web3.js", "Hardhat", "IPFS", "Polygon"],
    process: [
      "Blockchain strategy consultation",
      "Architecture design and smart contract development",
      "Security audits and testing",
      "Mainnet deployment",
      "Ongoing maintenance and upgrades",
    ],
  },
  {
    title: "AI Services",
    description:
      "Machine learning, analytics, and automation to optimize business decisions.",
    image: aiImg,
    features: [
      "Custom machine learning model development",
      "Natural language processing (NLP) solutions",
      "Computer vision & image recognition",
      "Predictive analytics & forecasting",
      "Chatbot & virtual assistant development",
      "AI-powered automation workflows",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "LangChain"],
    process: [
      "Data assessment and requirement gathering",
      "Model selection and training",
      "Integration with existing systems",
      "Performance optimization",
      "Deployment and monitoring",
    ],
  },
  {
    title: "IoT Services",
    description:
      "Smart IoT solutions for homes, industries, and real-time monitoring.",
    image: iotImg,
    features: [
      "Custom IoT device development",
      "Sensor integration & data collection",
      "Real-time monitoring dashboards",
      "Industrial automation solutions",
      "Smart home & building systems",
      "Edge computing implementation",
    ],
    technologies: ["Arduino", "Raspberry Pi", "MQTT", "AWS IoT", "Node-RED", "LoRaWAN"],
    process: [
      "Hardware and software requirement analysis",
      "Prototype development and testing",
      "Sensor calibration and integration",
      "Cloud infrastructure setup",
      "Deployment and remote monitoring setup",
    ],
  },
  {
    title: "Full Stack Website Development",
    description:
      "End-to-end web development using modern frontend and backend technologies.",
    image: fullstackImg,
    features: [
      "Responsive & modern web design",
      "Progressive Web Apps (PWA)",
      "E-commerce solutions",
      "CMS development & integration",
      "API development & integration",
      "Database design & optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "TypeScript"],
    process: [
      "Discovery and planning phase",
      "Design mockups and approval",
      "Frontend and backend development",
      "Testing and quality assurance",
      "Deployment and SEO optimization",
    ],
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions including desktop, web, and enterprise applications.",
    image: softwareImg,
    features: [
      "Custom enterprise software development",
      "Legacy system modernization",
      "Cloud-native application development",
      "API & microservices architecture",
      "DevOps & CI/CD implementation",
      "Software maintenance & support",
    ],
    technologies: ["Java", "Python", ".NET", "Docker", "Kubernetes", "AWS/Azure"],
    process: [
      "Business analysis and requirements",
      "System architecture design",
      "Iterative development sprints",
      "Integration and testing",
      "Deployment and training",
    ],
  },
  {
    title: "Software Solutions & Consulting",
    description:
      "Expert consulting to resolve software issues, optimize performance, and provide technical guidance.",
    image: softwareImg,
    features: [
      "Technical troubleshooting & debugging",
      "Performance optimization & code review",
      "Architecture assessment & recommendations",
      "Mobile & web app error resolution",
      "Database optimization & migration",
      "Security vulnerability assessment",
    ],
    technologies: ["All Major Platforms", "Cloud Services", "Debugging Tools", "Monitoring Systems"],
    process: [
      "Initial consultation and problem assessment",
      "Root cause analysis and diagnosis",
      "Solution proposal and cost estimation",
      "Implementation and resolution",
      "Documentation and knowledge transfer",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: ServiceDetails) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primary">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Click on any service to learn more about what we offer
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleServiceClick(service)}
              className="bg-card rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 text-left group cursor-pointer border border-transparent hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {service.description}
                </p>
                <span className="inline-block mt-4 text-primary text-sm font-medium">
                  Learn More →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default Services;
