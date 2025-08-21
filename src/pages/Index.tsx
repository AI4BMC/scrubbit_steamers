import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-carpet-cleaning.jpg";

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
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/marina-days" className="text-foreground hover:text-primary transition-colors">Marina Days</Link>
          <Link to="/service-area" className="text-foreground hover:text-primary transition-colors">Service Area</Link>
          <Link to="/booking" className="text-foreground hover:text-primary transition-colors">Book Now</Link>
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
  <section className="relative min-h-screen flex items-center">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge className="mb-6 bg-primary-glow/20 text-primary border-primary/30">
        Serving Lake of the Ozarks Since 2020
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        Lake Community
        <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
          Carpet Specialists
        </span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Professional carpet, upholstery, and boat cleaning services for Camden County homes, condos, and marina properties. We understand the unique needs of lakefront living.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="text-lg px-8 py-4">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Service
        </Button>
        <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
          <Phone className="mr-2 h-5 w-5" />
          Call (573) 555-0123
        </Button>
      </div>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Complete Cleaning Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From lakefront homes to luxury yachts, we provide specialized cleaning services that understand the unique challenges of living by the water.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="shadow-strong hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Residential Carpet</h3>
            <p className="text-muted-foreground mb-4">
              Deep steam cleaning for homes and condos. Perfect for high-traffic areas and lakefront properties with unique moisture challenges.
            </p>
            <Badge variant="secondary">Starting at $99</Badge>
          </CardContent>
        </Card>
        <Card className="shadow-strong hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marine Upholstery</h3>
            <p className="text-muted-foreground mb-4">
              Specialized boat and yacht cleaning. We understand marine fabrics and the challenges of waterfront storage.
            </p>
            <Badge variant="secondary">Marina Pricing</Badge>
          </CardContent>
        </Card>
        <Card className="shadow-strong hover:shadow-glow transition-all duration-300">
          <CardContent className="p-6">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Emergency Response</h3>
            <p className="text-muted-foreground mb-4">
              24/7 water damage and stain emergency services. Quick response for lake property disasters and spills.
            </p>
            <Badge variant="secondary">24/7 Available</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-hero">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready for Professional Cleaning?
      </h2>
      <p className="text-xl text-white/90 mb-8">
        Join hundreds of satisfied Lake of the Ozarks property owners who trust Scrubbit Steamers for their cleaning needs.
      </p>
      <Button variant="hero" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
        <Calendar className="mr-2 h-5 w-5" />
        Book Your Service Today
      </Button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-primary-glow">Scrubbit Steamers</h3>
          <p className="text-background/80">
            Professional carpet and upholstery cleaning services for the Lake of the Ozarks community.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-background/80">
            <li>Carpet Cleaning</li>
            <li>Upholstery Cleaning</li>
            <li>Boat & Marine Cleaning</li>
            <li>Tile & Grout Cleaning</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Service Area</h4>
          <ul className="space-y-2 text-background/80">
            <li>Camden County</li>
            <li>Osage Beach</li>
            <li>Lake Ozark</li>
            <li>Camdenton</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-background/80">
            <p>(573) 555-0123</p>
            <p>info@scrubbitsteamers.com</p>
            <p>Lake of the Ozarks, MO</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
        <p>&copy; 2024 Scrubbit Steamers. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
