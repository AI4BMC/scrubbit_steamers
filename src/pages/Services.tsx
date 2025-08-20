import React from "react";
import { Phone, Calendar, CheckCircle, Droplets, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beforeAfterImage from "@/assets/before-after-carpet.jpg";

const Navigation = () => (
  <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Scrubbit Steamers
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/services" className="text-primary font-medium">Services</a>
          <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="/marina-days" className="text-foreground hover:text-primary transition-colors">Marina Days</a>
          <a href="/service-area" className="text-foreground hover:text-primary transition-colors">Service Area</a>
          <a href="/booking" className="text-foreground hover:text-primary transition-colors">Book Now</a>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">(573) 555-0123</span>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
        Complete Cleaning Solutions
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Professional Cleaning Services
        <span className="block text-primary">for Lake of the Ozarks</span>
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
        From residential carpets to luxury boat interiors, we provide specialized cleaning services 
        tailored to the unique needs of lakefront living in Camden County.
      </p>
      <Button variant="hero" size="lg" className="text-lg px-8 py-4">
        <Calendar className="mr-2 h-5 w-5" />
        Schedule Your Service
      </Button>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, features, startingPrice, isPopular = false }) => (
  <Card className={`shadow-strong hover:shadow-glow transition-all duration-300 ${isPopular ? 'ring-2 ring-primary' : ''}`}>
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        {isPopular && <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>}
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-primary">{startingPrice}</span>
          <span className="text-muted-foreground text-sm ml-1">starting</span>
        </div>
        <Button variant="outline">Get Quote</Button>
      </div>
    </CardContent>
  </Card>
);

const ServicesGrid = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Cleaning Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Professional, reliable, and tailored to the unique challenges of Lake of the Ozarks properties.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon={Sparkles}
          title="Residential Carpet Cleaning"
          description="Deep steam cleaning for homes and condos with advanced stain removal."
          features={[
            "Hot water extraction cleaning",
            "Pet odor and stain removal",
            "High-traffic area treatment",
            "Moisture control for lake homes",
            "Eco-friendly cleaning solutions"
          ]}
          startingPrice="$99"
          isPopular={true}
        />
        <ServiceCard
          icon={Droplets}
          title="Upholstery Cleaning"
          description="Professional furniture and fabric cleaning for all types of upholstery."
          features={[
            "Sofa and chair deep cleaning",
            "Fabric protection treatment",
            "Stain and odor removal",
            "Quick-dry techniques",
            "Color restoration"
          ]}
          startingPrice="$75"
        />
        <ServiceCard
          icon={Shield}
          title="Marine & Boat Cleaning"
          description="Specialized cleaning for boats, yachts, and marine upholstery."
          features={[
            "Marine-grade cleaning products",
            "Boat carpet and vinyl cleaning",
            "Mold and mildew treatment",
            "Salt water damage restoration",
            "Weather protection application"
          ]}
          startingPrice="$150"
        />
      </div>
    </div>
  </section>
);

const BeforeAfterSection = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            See the Difference
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Our professional cleaning process delivers remarkable results that speak for themselves. 
            Using state-of-the-art equipment and lake-specific cleaning techniques.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Advanced steam cleaning technology</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Environmentally safe products</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>Fast drying times</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-3" />
              <span>100% satisfaction guarantee</span>
            </li>
          </ul>
          <Button variant="hero" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Get Free Estimate
          </Button>
        </div>
        <div className="relative">
          <img 
            src={beforeAfterImage} 
            alt="Before and after carpet cleaning comparison showing dramatic improvement"
            className="rounded-lg shadow-strong w-full"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-glow">
            <span className="font-bold text-lg">Amazing Results!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Cleaning Process
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A systematic approach that ensures deep cleaning and fast drying for Lake of the Ozarks properties.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { step: "1", title: "Inspection", description: "Thorough assessment of cleaning needs and stain identification" },
          { step: "2", title: "Pre-Treatment", description: "Targeted treatment of stains and high-traffic areas" },
          { step: "3", title: "Deep Cleaning", description: "Hot water extraction with professional-grade equipment" },
          { step: "4", title: "Final Inspection", description: "Quality assurance and customer satisfaction check" }
        ].map((process, index) => (
          <div key={index} className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {process.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
            <p className="text-muted-foreground">{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesGrid />
      <BeforeAfterSection />
      <ProcessSection />
    </div>
  );
};

export default Services;