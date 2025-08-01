import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Clock,
  Star,
  CheckCircle,
  Plus,
  X,
  Plane,
  Hotel,
  UtensilsCrossed,
  Camera,
  Map,
  FileText,
  Download,
  Share2,
  Heart,
  Globe,
  ArrowRight,
  Zap,
  Target,
  Award
} from "lucide-react";

export default function PlanTrip() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: 1000,
    interests: []
  });

  const interests = [
    "Adventure", "Culture", "Food", "Photography", "Nature", "History",
    "Beach", "Mountains", "Cities", "Wildlife", "Art", "Nightlife"
  ];

  const steps = [
    { number: 1, title: "Destination", icon: MapPin },
    { number: 2, title: "Dates & Travelers", icon: Calendar },
    { number: 3, title: "Budget & Interests", icon: Target },
    { number: 4, title: "Review & Generate", icon: FileText }
  ];

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Planning",
      description: "Our advanced AI analyzes millions of travel data points to create the perfect itinerary for you.",
      color: "from-sunset-500 to-earth-500"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Get suggestions tailored to your interests, budget, and travel style for a unique experience.",
      color: "from-ocean-500 to-forest-500"
    },
    {
      icon: Clock,
      title: "Instant Itineraries",
      description: "Generate detailed day-by-day plans in minutes, not hours. More time to dream, less time planning.",
      color: "from-forest-500 to-sunset-500"
    }
  ];

  const sampleItinerary = {
    destination: "Paris, France",
    duration: "5 days",
    budget: "$1,200",
    days: [
      {
        day: 1,
        title: "Arrival & Classic Paris",
        activities: [
          { time: "09:00", title: "Arrive at Charles de Gaulle", type: "transport", icon: Plane },
          { time: "11:00", title: "Check-in at Hotel", type: "accommodation", icon: Hotel },
          { time: "14:00", title: "Lunch at Café de Flore", type: "dining", icon: UtensilsCrossed },
          { time: "16:00", title: "Visit Louvre Museum", type: "activity", icon: Camera },
          { time: "19:00", title: "Seine River Cruise", type: "activity", icon: Map }
        ]
      },
      {
        day: 2,
        title: "Montmartre & Art",
        activities: [
          { time: "09:00", title: "Breakfast at Hotel", type: "dining", icon: UtensilsCrossed },
          { time: "10:30", title: "Explore Montmartre", type: "activity", icon: Camera },
          { time: "12:00", title: "Visit Sacré-Cœur", type: "activity", icon: Map },
          { time: "15:00", title: "Artist Square & Shopping", type: "activity", icon: Heart },
          { time: "20:00", title: "Dinner in Le Marais", type: "dining", icon: UtensilsCrossed }
        ]
      }
    ]
  };

  const handleInterestToggle = (interest) => {
    setTripData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-600 via-forest-600 to-sunset-600 text-white overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Plan Your Perfect
              <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Create personalized travel itineraries in minutes with our AI-powered trip planner. Just tell us your preferences, and we'll handle the rest.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                "AI-Powered", "Instant Results", "Fully Customizable", "Expert Recommendations"
              ].map((feature, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, label: "Itineraries Created", value: "100K+" },
              { icon: Users, label: "Happy Travelers", value: "25K+" },
              { icon: Clock, label: "Avg. Planning Time", value: "5 min" },
              { icon: Star, label: "Satisfaction Rate", value: "98%" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              How It
              <span className="text-ocean-600"> Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered trip planner makes it easy to create the perfect itinerary in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group text-center border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ocean-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Planner Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Create Your
              <span className="text-ocean-600"> Itinerary</span>
            </h2>
            <p className="text-muted-foreground">
              Fill in your preferences and let our AI create the perfect trip for you.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className={`flex items-center space-x-3 ${
                    currentStep >= step.number ? 'text-ocean-600' : 'text-muted-foreground'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= step.number 
                        ? 'bg-ocean-500 text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    <span className="hidden sm:block font-medium">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Where do you want to go?</h3>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Enter destination (e.g., Paris, France)"
                      value={tripData.destination}
                      onChange={(e) => setTripData(prev => ({ ...prev, destination: e.target.value }))}
                      className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 text-lg"
                    />
                  </div>
                  
                  {/* Popular Destinations */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Popular destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {["Paris, France", "Tokyo, Japan", "New York, USA", "Bali, Indonesia", "Rome, Italy"].map((dest) => (
                        <button
                          key={dest}
                          onClick={() => setTripData(prev => ({ ...prev, destination: dest }))}
                          className="px-4 py-2 bg-muted hover:bg-ocean-100 hover:text-ocean-700 rounded-lg text-sm transition-colors"
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">When are you traveling?</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Start Date</label>
                      <input
                        type="date"
                        value={tripData.startDate}
                        onChange={(e) => setTripData(prev => ({ ...prev, startDate: e.target.value }))}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">End Date</label>
                      <input
                        type="date"
                        value={tripData.endDate}
                        onChange={(e) => setTripData(prev => ({ ...prev, endDate: e.target.value }))}
                        className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Number of Travelers</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setTripData(prev => ({ ...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold min-w-[3rem] text-center">{tripData.travelers}</span>
                      <button
                        onClick={() => setTripData(prev => ({ ...prev, travelers: prev.travelers + 1 }))}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Budget & Interests</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget per person: ${tripData.budget}
                    </label>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="100"
                      value={tripData.budget}
                      onChange={(e) => setTripData(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$200</span>
                      <span>$5000+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-4">What interests you?</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interests.map((interest) => (
                        <button
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-3 rounded-xl border transition-all ${
                            tripData.interests.includes(interest)
                              ? 'bg-ocean-500 text-white border-ocean-500'
                              : 'bg-background border-border hover:border-ocean-300'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Review Your Trip</h3>
                  
                  <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Destination:</span>
                      <span>{tripData.destination || 'Not selected'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Dates:</span>
                      <span>{tripData.startDate && tripData.endDate ? `${tripData.startDate} to ${tripData.endDate}` : 'Not selected'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Travelers:</span>
                      <span>{tripData.travelers} {tripData.travelers === 1 ? 'person' : 'people'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Budget:</span>
                      <span>${tripData.budget} per person</span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="font-medium">Interests:</span>
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {tripData.interests.map((interest) => (
                          <span key={interest} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-md text-xs">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="bg-gradient-to-r from-sunset-500 to-ocean-500 hover:from-sunset-600 hover:to-ocean-600 px-12 py-4 text-lg font-bold">
                      <Zap className="h-5 w-5 mr-2" />
                      Generate My Itinerary
                    </Button>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  disabled={currentStep === 4}
                  className="bg-ocean-500 hover:bg-ocean-600"
                >
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sample
              <span className="text-ocean-600"> Itinerary</span>
            </h2>
            <p className="text-muted-foreground">
              Here's what an AI-generated itinerary looks like
            </p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-ocean-500 to-forest-500 text-white p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{sampleItinerary.destination}</h3>
                  <p className="text-ocean-100">
                    {sampleItinerary.duration} • {sampleItinerary.budget} • 2 travelers
                  </p>
                </div>
                <div className="flex space-x-2 mt-4 md:mt-0">
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-ocean-600">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-ocean-600">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="space-y-8">
                {sampleItinerary.days.map((day, dayIndex) => (
                  <div key={dayIndex} className="border-l-4 border-ocean-500 pl-6">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Day {day.day}: {day.title}
                    </h4>
                    <div className="space-y-4">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                          <div className="bg-ocean-100 p-2 rounded-lg flex-shrink-0">
                            <activity.icon className="h-5 w-5 text-ocean-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-medium text-foreground">{activity.title}</h5>
                              <span className="text-sm text-muted-foreground">{activity.time}</span>
                            </div>
                            <span className="text-xs bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full capitalize">
                              {activity.type}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sunset-600 via-ocean-600 to-forest-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Plan Your
            <span className="block bg-gradient-to-r from-forest-300 to-sunset-300 bg-clip-text text-transparent">
              Next Adventure?
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join thousands of travelers who've created their perfect trips with our AI planner.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 px-10 py-4 text-lg font-bold">
              <Zap className="mr-2 h-5 w-5" />
              Start Planning Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-600 px-10 py-4 text-lg font-bold">
              <Award className="mr-2 h-5 w-5" />
              View Examples
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
