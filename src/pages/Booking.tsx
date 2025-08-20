import React, { useState } from "react";
import { Phone, Calendar, MapPin, Clock, User, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
          <a href="/service-area" className="text-foreground hover:text-primary transition-colors">Service Area</a>
          <a href="/booking" className="text-primary font-medium">Book Now</a>
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
        <Calendar className="mr-2 h-4 w-4" />
        Easy Online Booking
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Schedule Your
        <span className="block text-accent">Cleaning Service</span>
      </h1>
      <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
        Book your carpet, upholstery, or boat cleaning service online. Same-day and next-day appointments available throughout the Lake of the Ozarks.
      </p>
    </div>
  </section>
);

const BookingForm = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    location: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    details: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Booking submitted:', formData);
    alert('Thank you! Your booking request has been submitted. We\'ll contact you within 2 hours to confirm your appointment.');
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-strong">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl mb-4">Book Your Service</CardTitle>
            <p className="text-muted-foreground">Fill out the form below and we'll contact you within 2 hours to confirm your appointment.</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type *</Label>
                  <Select name="serviceType" onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="carpet">Residential Carpet Cleaning</SelectItem>
                      <SelectItem value="upholstery">Upholstery Cleaning</SelectItem>
                      <SelectItem value="boat">Boat/Marine Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Service Area *</Label>
                  <Select name="location" onValueChange={(value) => setFormData({...formData, location: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="camdenton">Camdenton / Camden County</SelectItem>
                      <SelectItem value="osage-beach">Osage Beach</SelectItem>
                      <SelectItem value="lake-ozark">Lake Ozark</SelectItem>
                      <SelectItem value="sunrise-beach">Sunrise Beach</SelectItem>
                      <SelectItem value="eldon">Eldon</SelectItem>
                      <SelectItem value="versailles">Versailles</SelectItem>
                      <SelectItem value="other">Other (please specify in details)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input 
                    id="date" 
                    name="date" 
                    type="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time *</Label>
                  <Select name="time" onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8am">8:00 AM - 10:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM - 12:00 PM</SelectItem>
                      <SelectItem value="1pm">1:00 PM - 3:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM - 5:00 PM</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Smith" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(573) 555-0123" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Service Address *</Label>
                <Input 
                  id="address" 
                  name="address" 
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Lakefront Drive, Osage Beach, MO 65065" 
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <Textarea 
                  id="details" 
                  name="details" 
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Please describe the areas to be cleaned, any specific stains or concerns, number of rooms, boat size, etc."
                  rows={4}
                />
              </div>

              <div className="text-center pt-6">
                <Button type="submit" variant="hero" size="lg" className="text-lg px-12 py-4">
                  <Calendar className="mr-2 h-5 w-5" />
                  Request Appointment
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 2 hours to confirm your appointment and provide a quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const SampleAppointments = () => (
  <section className="py-20 bg-gradient-water">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Current Schedule
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          See our upcoming appointments and available time slots. We update this daily to show real availability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            date: "Today, Dec 15",
            time: "2:00 PM - 4:00 PM",
            service: "Residential Carpet",
            location: "Osage Beach Condo",
            status: "Confirmed",
            available: "6:00 PM slot available"
          },
          {
            date: "Tomorrow, Dec 16",
            time: "9:00 AM - 11:00 AM",
            service: "Boat Cleaning",
            location: "Tan-Tar-A Marina",
            status: "Confirmed",
            available: "1:00 PM slot available"
          },
          {
            date: "Dec 17",
            time: "Morning Slots",
            service: "Available",
            location: "Camden County Area",
            status: "Open",
            available: "Multiple slots available"
          }
        ].map((appointment, index) => (
          <Card key={index} className="shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant={appointment.status === 'Open' ? 'secondary' : 'default'}>
                  {appointment.status}
                </Badge>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{appointment.date}</h3>
              <p className="text-sm text-muted-foreground mb-1">{appointment.time}</p>
              <p className="text-sm font-medium mb-1">{appointment.service}</p>
              <p className="text-sm text-muted-foreground mb-3">{appointment.location}</p>
              <div className="pt-3 border-t">
                <p className="text-sm text-primary font-medium">{appointment.available}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const ContactOptions = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Prefer to Call?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're here to help! Contact us directly for immediate assistance or custom scheduling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-8">
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Direct</h3>
            <p className="text-2xl font-bold text-primary mb-2">(573) 555-0123</p>
            <p className="text-sm text-muted-foreground mb-4">Mon-Sat: 7:00 AM - 7:00 PM</p>
            <Button variant="outline">Call Now</Button>
          </CardContent>
        </Card>

        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-8">
            <User className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Text Message</h3>
            <p className="text-2xl font-bold text-primary mb-2">(573) 555-0123</p>
            <p className="text-sm text-muted-foreground mb-4">Quick quotes & scheduling</p>
            <Button variant="outline">Send Text</Button>
          </CardContent>
        </Card>

        <Card className="text-center shadow-soft hover:shadow-strong transition-all">
          <CardContent className="p-8">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emergency Line</h3>
            <p className="text-2xl font-bold text-primary mb-2">(573) 555-9999</p>
            <p className="text-sm text-muted-foreground mb-4">24/7 water damage response</p>
            <Button variant="destructive">Emergency Call</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Booking = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BookingForm />
      <SampleAppointments />
      <ContactOptions />
    </div>
  );
};

export default Booking;