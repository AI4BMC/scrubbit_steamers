import React from "react";
import { Phone, Calendar, MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import beforeAfterImage from "@/assets/before-after-carpet.jpg";
import boatCleaningImage from "@/assets/boat-cleaning.jpg";
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
          <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
          <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="/portfolio" className="text-primary font-medium">Portfolio</a>
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
  <section className="py-20 bg-gradient-hero text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Badge className="mb-6 bg-white/20 text-white border-white/30">
        Our Work Portfolio
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Proven Results
        <span className="block text-accent">Across Lake of the Ozarks</span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        See the transformation we've brought to hundreds of homes, condos, and boats 
        throughout Camden County and surrounding areas.
      </p>
    </div>
  </section>
);

const ProjectCard = ({ image, title, location, serviceType, description, results }) => (
  <Card className="shadow-strong hover:shadow-glow transition-all duration-300 overflow-hidden">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-4 left-4">
        <Badge className="bg-primary text-primary-foreground">{serviceType}</Badge>
      </div>
    </div>
    <CardContent className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        {results.map((result, index) => (
          <div key={index} className="flex items-center text-sm">
            <Star className="h-4 w-4 text-primary mr-2" />
            {result}
          </div>
        ))}
      </div>
      <Button variant="outline" className="w-full">
        View Details
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
);

const PortfolioGrid = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Recent Success Stories
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Every project tells a story of transformation and customer satisfaction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          image={beforeAfterImage}
          title="Lakefront Condo Restoration"
          location="Osage Beach"
          serviceType="Residential"
          description="Complete carpet restoration in a 3-bedroom lakefront condo affected by humidity and high traffic from summer guests."
          results={[
            "Removed 5+ years of stains",
            "Eliminated pet odors completely",
            "Restored original carpet color"
          ]}
        />
        <ProjectCard
          image={boatCleaningImage}
          title="Luxury Yacht Interior"
          location="Lake Ozark Marina"
          serviceType="Marine"
          description="Full interior cleaning of a 45-foot yacht including carpet, upholstery, and vinyl surfaces."
          results={[
            "Marine-grade stain removal",
            "Mold prevention treatment",
            "UV protection applied"
          ]}
        />
        <ProjectCard
          image={heroImage}
          title="Historic Lake Home"
          location="Camdenton"
          serviceType="Residential"
          description="Delicate restoration of vintage carpets in a 1950s lake home while preserving the original character."
          results={[
            "Preserved antique fibers",
            "Removed decades of stains",
            "Extended carpet lifespan"
          ]}
        />
        <ProjectCard
          image={beforeAfterImage}
          title="Marina Office Complex"
          location="Sunrise Beach"
          serviceType="Commercial"
          description="Monthly maintenance cleaning for a busy marina office with high foot traffic and outdoor exposure."
          results={[
            "Consistent professional appearance",
            "Extended carpet life by 3+ years",
            "Improved indoor air quality"
          ]}
        />
        <ProjectCard
          image={boatCleaningImage}
          title="Pontoon Fleet Cleaning"
          location="Various Marinas"
          serviceType="Marine"
          description="Regular maintenance program for a rental pontoon fleet, keeping boats guest-ready year-round."
          results={[
            "Increased rental bookings",
            "Reduced replacement costs",
            "Enhanced guest satisfaction"
          ]}
        />
        <ProjectCard
          image={heroImage}
          title="Vacation Rental Turnaround"
          location="Lake of the Ozarks"
          serviceType="Commercial"
          description="Emergency cleaning service for vacation rental properties between guest stays."
          results={[
            "24-hour turnaround time",
            "Maintained 5-star reviews",
            "Zero booking cancellations"
          ]}
        />
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-muted-foreground">
          Real feedback from real Lake of the Ozarks property owners.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Johnson",
            location: "Osage Beach Condo Owner",
            rating: 5,
            text: "Scrubbit Steamers saved our vacation rental! The carpets looked hopeless after a busy summer season, but they brought them back to life. Our booking reviews improved immediately."
          },
          {
            name: "Mike Rodriguez",
            location: "Boat Owner, Lake Ozark",
            rating: 5,
            text: "Finally found someone who understands marine cleaning! They got mold stains out of my boat's interior that three other companies couldn't touch. Highly recommend for boat owners."
          },
          {
            name: "Linda Patterson",
            location: "Camdenton Homeowner",
            rating: 5,
            text: "Professional, reliable, and honest pricing. They've been cleaning our lake home carpets for two years now. The difference in air quality and appearance is remarkable."
          }
        ].map((testimonial, index) => (
          <Card key={index} className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-hero text-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to See These Results in Your Space?
      </h2>
      <p className="text-xl text-white/90 mb-8">
        Join our growing list of satisfied customers throughout the Lake of the Ozarks area.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
          <Calendar className="mr-2 h-5 w-5" />
          Schedule Your Cleaning
        </Button>
        <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
          <Phone className="mr-2 h-5 w-5" />
          Call for Free Quote
        </Button>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioGrid />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Portfolio;