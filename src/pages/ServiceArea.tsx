import React from "react";
import { Phone, Calendar, MapPin, Clock, Car, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <a href="/marina-days" className="text-foreground hover:text-primary transition-colors">Marina Days</a>
          <a href="/service-area" className="text-primary font-medium">Service Area</a>
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
  <section className="py-20 bg-gradient-hero text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge className="mb-6 bg-white/20 text-white border-white/30">
        <MapPin className="mr-2 h-4 w-4" />
        Local Service Coverage
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Serving the Entire
        <span className="block text-accent">Lake of the Ozarks Region</span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Professional carpet and boat cleaning services throughout Camden County and surrounding areas. 
        We bring our expertise directly to your doorstep or marina slip.
      </p>
      <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
        <Calendar className="mr-2 h-5 w-5" />
        Check Service Availability
      </Button>
    </div>
  </section>
);

const PrimaryServiceAreas = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Primary Service Areas
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We provide regular service to these Lake of the Ozarks communities with same-day or next-day availability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            city: "Camden County",
            description: "Our home base with same-day service available",
            areas: ["Camdenton", "Linn Creek", "Climax Springs", "Macks Creek"],
            responseTime: "Same Day",
            featured: true
          },
          {
            city: "Osage Beach",
            description: "Premium service for the heart of the lake community",
            areas: ["Four Seasons", "Tan-Tar-A", "Lakefront Properties"],
            responseTime: "Same Day"
          },
          {
            city: "Lake Ozark",
            description: "Comprehensive coverage for residential and marina properties",
            areas: ["Bagnell Dam", "Marina Areas", "Lakefront Condos"],
            responseTime: "Next Day"
          },
          {
            city: "Sunrise Beach",
            description: "Serving the eastern shore communities",
            areas: ["Village of Four Seasons", "Laurie", "Rocky Mount"],
            responseTime: "Next Day"
          },
          {
            city: "Eldon & Versailles",
            description: "Extended service to neighboring communities",
            areas: ["Eldon", "Versailles", "Surrounding Areas"],
            responseTime: "2-3 Days"
          },
          {
            city: "Jefferson City Area",
            description: "Limited service to the capital city region",
            areas: ["Jefferson City", "Wardsville", "Holts Summit"],
            responseTime: "By Appointment"
          }
        ].map((area, index) => (
          <Card key={index} className={`shadow-strong hover:shadow-glow transition-all duration-300 ${area.featured ? 'ring-2 ring-primary' : ''}`}>
            <CardHeader>
              {area.featured && <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Primary Service Area</Badge>}
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{area.city}</CardTitle>
                <div className="flex items-center text-primary">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{area.responseTime}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{area.description}</p>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-2">Coverage Areas:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {area.areas.map((location, i) => (
                  <li key={i} className="flex items-center">
                    <MapPin className="h-3 w-3 mr-2 text-primary" />
                    {location}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ServiceDetails = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Mobile Service Details
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We bring professional cleaning equipment directly to your location, whether it's your lakefront home, condo, or marina slip.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <Car className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Mobile Equipment</h3>
                <p className="text-muted-foreground">State-of-the-art truck-mounted cleaning systems bring professional results to your location.</p>
              </div>
            </div>
            <div className="flex items-start">
              <Home className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Residential Service</h3>
                <p className="text-muted-foreground">Complete carpet and upholstery cleaning for homes, condos, and vacation rentals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Marina Service</h3>
                <p className="text-muted-foreground">On-site boat cleaning at marinas throughout the Lake of the Ozarks.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Service Area Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-water rounded-lg p-8 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Lake of the Ozarks Region</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Primary:</strong> Camden County & Osage Beach</p>
                  <p><strong>Secondary:</strong> Lake Ozark & Sunrise Beach</p>
                  <p><strong>Extended:</strong> Miller & Morgan Counties</p>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    📍 Not sure if we serve your area? Call us! We're always expanding our service coverage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

const ResponseTimes = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Response Times & Scheduling
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We pride ourselves on reliable, prompt service throughout the Lake of the Ozarks region.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Same Day</h3>
            <p className="text-sm text-muted-foreground mb-4">Camden County & Camdenton</p>
            <Badge variant="secondary">Emergency Available</Badge>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">24 Hours</h3>
            <p className="text-sm text-muted-foreground mb-4">Osage Beach & Lake Ozark</p>
            <Badge variant="secondary">Most Popular</Badge>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">2-3 Days</h3>
            <p className="text-sm text-muted-foreground mb-4">Extended Service Areas</p>
            <Badge variant="secondary">Scheduled Service</Badge>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-6">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emergency</h3>
            <p className="text-sm text-muted-foreground mb-4">24/7 Water Damage Response</p>
            <Badge variant="secondary">All Areas</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const TravelPolicySection = () => (
  <section className="py-20 bg-gradient-hero text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Travel Policy & Pricing
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Transparent pricing with no hidden fees for our mobile service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Primary Zone</h3>
            <p className="text-3xl font-bold text-accent mb-2">$0</p>
            <p className="text-sm text-white/80">No travel charge</p>
            <p className="text-xs text-white/60 mt-2">Camden County & Camdenton</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Secondary Zone</h3>
            <p className="text-3xl font-bold text-accent mb-2">$25</p>
            <p className="text-sm text-white/80">Flat travel fee</p>
            <p className="text-xs text-white/60 mt-2">Osage Beach, Lake Ozark, Sunrise Beach</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 border-white/20 text-white">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Extended Zone</h3>
            <p className="text-3xl font-bold text-accent mb-2">$50</p>
            <p className="text-sm text-white/80">Travel surcharge</p>
            <p className="text-xs text-white/60 mt-2">Eldon, Versailles, Jefferson City</p>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8">
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
          <Phone className="mr-2 h-5 w-5" />
          Get Quote for Your Area
        </Button>
      </div>
    </div>
  </section>
);

const ServiceArea = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PrimaryServiceAreas />
      <ServiceDetails />
      <ResponseTimes />
      <TravelPolicySection />
    </div>
  );
};

export default ServiceArea;