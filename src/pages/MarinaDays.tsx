import React from "react";
import { Phone, Calendar, Anchor, Droplets, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import boatCleaningImage from "@/assets/boat-cleaning.jpg";

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
          <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
          <a href="/marina-days" className="text-primary font-medium">Marina Days</a>
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
  <section className="relative py-20 bg-gradient-hero text-white overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-accent"></div>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge className="mb-6 bg-white/20 text-white border-white/30">
        <Anchor className="mr-2 h-4 w-4" />
        Specialized Marine Services
      </Badge>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Marina Days
        <span className="block text-accent">Boat & Yacht Cleaning</span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Professional marine cleaning services for the Lake of the Ozarks boating community. 
        We understand the unique challenges of boat maintenance and storage.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Marina Service
        </Button>
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
          <Phone className="mr-2 h-5 w-5" />
          Marina Direct Line
        </Button>
      </div>
    </div>
  </section>
);

const MarineServicesSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Complete Marine Cleaning Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From pontoons to luxury yachts, we provide specialized cleaning services 
          designed for the marine environment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="shadow-strong hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Droplets className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Interior Deep Clean</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Carpet and upholstery steam cleaning</li>
              <li>• Vinyl and leather restoration</li>
              <li>• Stain and odor removal</li>
              <li>• Marine-safe cleaning products</li>
              <li>• Quick-dry techniques</li>
            </ul>
            <div className="mt-6 pt-4 border-t">
              <span className="text-2xl font-bold text-primary">$150+</span>
              <span className="text-muted-foreground ml-2">depending on size</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-strong hover:shadow-glow transition-all duration-300 ring-2 ring-primary">
          <CardHeader>
            <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Full Boat Detail</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Complete interior cleaning</li>
              <li>• Mold and mildew treatment</li>
              <li>• UV protection application</li>
              <li>• Storage preparation</li>
              <li>• Season opening/closing service</li>
            </ul>
            <div className="mt-6 pt-4 border-t">
              <span className="text-2xl font-bold text-primary">$250+</span>
              <span className="text-muted-foreground ml-2">comprehensive package</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-strong hover:shadow-glow transition-all duration-300">
          <CardHeader>
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Emergency Response</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Water damage restoration</li>
              <li>• Storm cleanup service</li>
              <li>• Same-day response available</li>
              <li>• Insurance claim assistance</li>
              <li>• 24/7 emergency hotline</li>
            </ul>
            <div className="mt-6 pt-4 border-t">
              <span className="text-2xl font-bold text-primary">Call</span>
              <span className="text-muted-foreground ml-2">for emergency pricing</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Marine Cleaning Process
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We've developed specialized techniques for cleaning boats and marine vessels, 
            understanding the unique challenges of the marine environment.
          </p>
          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Marina Assessment",
                description: "On-site evaluation of your vessel's cleaning needs and access requirements."
              },
              {
                step: "2", 
                title: "Marine-Safe Preparation",
                description: "Use of eco-friendly, marine-approved cleaning products to protect water quality."
              },
              {
                step: "3",
                title: "Deep Cleaning",
                description: "Specialized equipment and techniques for boat interiors and marine fabrics."
              },
              {
                step: "4",
                title: "Protection & Finishing",
                description: "UV protection, mold prevention, and weatherproofing treatments."
              }
            ].map((process, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img 
            src={boatCleaningImage} 
            alt="Professional boat interior cleaning at Lake of the Ozarks marina"
            className="rounded-lg shadow-strong w-full"
          />
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-glow">
            <div className="text-center">
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Boats Cleaned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MarinasSection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Serving Lake of the Ozarks Marinas
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We work directly with marinas and boat owners throughout the Lake of the Ozarks.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "Port Arrowhead", location: "Lake Ozark" },
          { name: "Tan-Tar-A Marina", location: "Osage Beach" },
          { name: "Lazy Gators", location: "Osage Beach" },
          { name: "Dog Days Marina", location: "Lake Ozark" },
          { name: "Benne's Marina", location: "Sunrise Beach" },
          { name: "Captain Ron's", location: "Sunrise Beach" },
          { name: "Public Beach Marina", location: "Lake Ozark" },
          { name: "Yacht Club Marina", location: "Camdenton" }
        ].map((marina, index) => (
          <Card key={index} className="text-center shadow-soft hover:shadow-strong transition-all">
            <CardContent className="p-6">
              <Anchor className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-1">{marina.name}</h3>
              <p className="text-sm text-muted-foreground">{marina.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const PackagesSection = () => (
  <section className="py-20 bg-gradient-hero text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Seasonal Packages Available
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Save money with our seasonal boat cleaning packages designed for Lake of the Ozarks boaters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Spring Opening</CardTitle>
            <p className="text-white/80">Get your boat ready for the season</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-4 text-accent">$199</div>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li>Deep interior cleaning</li>
              <li>Mold and mildew removal</li>
              <li>UV protection application</li>
              <li>Storage odor elimination</li>
            </ul>
            <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-primary">
              Book Spring Package
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/20 border-white/30 text-white ring-2 ring-accent">
          <CardHeader className="text-center">
            <Badge className="mx-auto mb-4 bg-accent text-primary">Best Value</Badge>
            <CardTitle className="text-2xl">Summer Maintenance</CardTitle>
            <p className="text-white/80">Monthly cleaning throughout the season</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-4 text-accent">$149</div>
            <p className="text-sm text-white/90 mb-4">per month (4-month package)</p>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li>Monthly deep cleaning</li>
              <li>Stain prevention treatment</li>
              <li>Priority scheduling</li>
              <li>Emergency response included</li>
            </ul>
            <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-primary">
              Start Maintenance Plan
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/10 border-white/20 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Winter Storage</CardTitle>
            <p className="text-white/80">Protect your investment during storage</p>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-4 text-accent">$249</div>
            <ul className="space-y-2 text-sm text-white/90 mb-6">
              <li>Complete winterization cleaning</li>
              <li>Mold prevention treatment</li>
              <li>Fabric protection application</li>
              <li>Spring ready preparation</li>
            </ul>
            <Button variant="outline" className="w-full text-white border-white hover:bg-white hover:text-primary">
              Book Storage Prep
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const MarinaDays = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MarineServicesSection />
      <ProcessSection />
      <MarinasSection />
      <PackagesSection />
    </div>
  );
};

export default MarinaDays;