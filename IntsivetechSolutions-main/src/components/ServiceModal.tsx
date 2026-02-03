import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetails {
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
  process: string[];
}

interface ServiceModalProps {
  service: ServiceDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceModal = ({ service, open, onOpenChange }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-foreground">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-8">
          {/* Hero Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />

          {/* What We Offer */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">What We Offer</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Technologies We Use</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-muted rounded-full text-sm text-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Our Process</h3>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
