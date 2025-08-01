import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Users,
  Search,
  Filter,
  MapPin,
  Calendar,
  Star,
  MessageCircle,
  Heart,
  Shield,
  CheckCircle,
  User,
  Globe,
  Camera,
  Plane,
  Coffee,
  Mountain,
  Waves,
  TreePine,
  UtensilsCrossed,
  Music,
  BookOpen,
  Gamepad2,
  Award,
  Clock,
  Target,
  Zap
} from "lucide-react";

export default function TravelBuddy() {
  const [selectedFilters, setSelectedFilters] = useState({
    destination: '',
    travelStyle: '',
    ageRange: '',
    gender: 'any'
  });

  const [searchQuery, setSearchQuery] = useState("");

  const travelStyles = [
    { name: "Adventure Seeker", icon: Mountain, color: "from-earth-500 to-earth-600" },
    { name: "Beach Lover", icon: Waves, color: "from-ocean-500 to-ocean-600" },
    { name: "Culture Explorer", icon: Globe, color: "from-forest-500 to-forest-600" },
    { name: "Food Enthusiast", icon: UtensilsCrossed, color: "from-sunset-500 to-sunset-600" },
    { name: "Nature Lover", icon: TreePine, color: "from-forest-600 to-earth-600" },
    { name: "Photography", icon: Camera, color: "from-ocean-600 to-sunset-600" }
  ];

  const travelBuddies = [
    {
      id: 1,
      name: "Sarah Chen",
      age: 28,
      location: "San Francisco, USA",
      avatar: "SC",
      bio: "Digital nomad who loves exploring hidden gems and trying local street food. Looking for fellow adventurers to share amazing experiences!",
      nextTrip: "Southeast Asia",
      dates: "March 15-30, 2024",
      travelStyle: "Culture Explorer",
      interests: ["Photography", "Food", "History", "Hiking"],
      languages: ["English", "Mandarin", "Spanish"],
      verified: true,
      rating: 4.9,
      reviews: 24,
      trips: 12,
      joined: "2022",
      compatibility: 95
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      age: 32,
      location: "Barcelona, Spain",
      avatar: "MR",
      bio: "Adventure photographer and mountain climber. Love capturing breathtaking landscapes and sharing stories around campfires.",
      nextTrip: "Patagonia",
      dates: "April 10-25, 2024",
      travelStyle: "Adventure Seeker",
      interests: ["Photography", "Hiking", "Camping", "Wildlife"],
      languages: ["Spanish", "English", "Catalan"],
      verified: true,
      rating: 4.8,
      reviews: 31,
      trips: 18,
      joined: "2021",
      compatibility: 88
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: 26,
      location: "Mumbai, India",
      avatar: "PS",
      bio: "Art history student passionate about museums, architecture, and cultural exchanges. Always excited to learn about new cultures!",
      nextTrip: "European Art Tour",
      dates: "May 5-20, 2024",
      travelStyle: "Culture Explorer",
      interests: ["Art", "Museums", "Architecture", "History"],
      languages: ["Hindi", "English", "French"],
      verified: true,
      rating: 4.9,
      reviews: 19,
      trips: 8,
      joined: "2023",
      compatibility: 92
    },
    {
      id: 4,
      name: "James Wilson",
      age: 29,
      location: "Melbourne, Australia",
      avatar: "JW",
      bio: "Marine biologist and diving enthusiast. Love exploring coral reefs and underwater photography. Seeking diving buddies for tropical adventures!",
      nextTrip: "Great Barrier Reef",
      dates: "June 1-14, 2024",
      travelStyle: "Beach Lover",
      interests: ["Diving", "Marine Life", "Photography", "Conservation"],
      languages: ["English"],
      verified: true,
      rating: 4.7,
      reviews: 22,
      trips: 15,
      joined: "2022",
      compatibility: 85
    },
    {
      id: 5,
      name: "Elena Petrov",
      age: 31,
      location: "Prague, Czech Republic",
      avatar: "EP",
      bio: "Chef and culinary enthusiast on a mission to taste authentic cuisines worldwide. Let's discover the best local flavors together!",
      nextTrip: "Food Tour of Japan",
      dates: "April 20-May 5, 2024",
      travelStyle: "Food Enthusiast",
      interests: ["Cooking", "Food Tours", "Markets", "Culture"],
      languages: ["Czech", "English", "German"],
      verified: true,
      rating: 4.8,
      reviews: 27,
      trips: 14,
      joined: "2021",
      compatibility: 91
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      age: 27,
      location: "Dubai, UAE",
      avatar: "AH",
      bio: "Wildlife photographer and nature conservationist. Love safaris, bird watching, and documenting endangered species in their natural habitat.",
      nextTrip: "African Safari",
      dates: "July 8-22, 2024",
      travelStyle: "Nature Lover",
      interests: ["Wildlife", "Photography", "Conservation", "Camping"],
      languages: ["Arabic", "English", "French"],
      verified: true,
      rating: 4.9,
      reviews: 33,
      trips: 20,
      joined: "2020",
      compatibility: 89
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "All members undergo identity verification and background checks for your safety and peace of mind.",
      color: "from-forest-500 to-forest-600"
    },
    {
      icon: Target,
      title: "Smart Matching",
      description: "Our AI algorithm matches you with compatible travelers based on destinations, interests, and travel style.",
      color: "from-ocean-500 to-ocean-600"
    },
    {
      icon: MessageCircle,
      title: "Secure Messaging",
      description: "Connect safely through our in-app messaging system before meeting in person.",
      color: "from-sunset-500 to-sunset-600"
    }
  ];

  const safetyFeatures = [
    { icon: Shield, title: "ID Verification", description: "Government ID verification required" },
    { icon: CheckCircle, title: "Background Checks", description: "Optional enhanced screening available" },
    { icon: MessageCircle, title: "In-App Messaging", description: "Secure communication platform" },
    { icon: MapPin, title: "Public Meetups", description: "Suggested safe meeting locations" },
    { icon: Star, title: "Review System", description: "Rate and review your travel experiences" },
    { icon: Users, title: "Community Guidelines", description: "Strict policy enforcement" }
  ];

  const filteredBuddies = travelBuddies.filter(buddy => {
    const matchesSearch = buddy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buddy.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         buddy.nextTrip.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-forest-600 via-ocean-600 to-sunset-600 text-white overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Find Your Perfect
              <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
                Travel Buddy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Connect with verified travelers who share your passion for adventure. Make lifelong friends and create unforgettable memories together.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search by name, location, or destination..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-sunset-400 focus:border-transparent"
                  />
                </div>
                <Button className="bg-sunset-500 hover:bg-sunset-600 px-8 py-4 font-bold">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "Active Members", value: "25K+" },
              { icon: Globe, label: "Countries", value: "180+" },
              { icon: Plane, label: "Trips Organized", value: "15K+" },
              { icon: Star, label: "Safety Rating", value: "98%" }
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
              How Travel Buddy
              <span className="text-ocean-600"> Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our smart matching system connects you with compatible travelers for safe and amazing adventures.
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

      {/* Travel Styles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Your
              <span className="text-ocean-600"> Travel Style</span>
            </h2>
            <p className="text-muted-foreground">
              Connect with travelers who share your interests and travel preferences.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {travelStyles.map((style, index) => (
              <Card key={index} className="group text-center border-0 bg-background hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <CardContent className="p-6">
                  <div className={`bg-gradient-to-r ${style.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <style.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm group-hover:text-ocean-600 transition-colors">
                    {style.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Buddy Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Amazing
              <span className="text-ocean-600"> Travelers</span>
            </h2>
            <p className="text-muted-foreground">
              {filteredBuddies.length} travel {filteredBuddies.length !== 1 ? 'buddies' : 'buddy'} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBuddies.map((buddy, index) => (
              <Card key={buddy.id} className="group overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-ocean-500 to-forest-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {buddy.avatar}
                        </div>
                        {buddy.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-forest-500 w-6 h-6 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-ocean-600 transition-colors">
                          {buddy.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{buddy.age} • {buddy.location}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-sunset-400 fill-current" />
                          <span className="text-xs font-medium">{buddy.rating}</span>
                          <span className="text-xs text-muted-foreground">({buddy.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full text-xs font-medium mb-1">
                        {buddy.compatibility}% match
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {buddy.trips} trips • Since {buddy.joined}
                      </div>
                    </div>
                  </div>

                  {/* Travel Style Badge */}
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-forest-100 to-ocean-100 text-forest-700 px-3 py-1 rounded-full text-sm font-medium">
                      {buddy.travelStyle}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {buddy.bio}
                  </p>

                  {/* Next Trip */}
                  <div className="bg-muted/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-ocean-600" />
                      <span className="font-medium text-foreground">Next Trip:</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{buddy.nextTrip}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{buddy.dates}</span>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-foreground mb-2">Interests:</p>
                    <div className="flex flex-wrap gap-1">
                      {buddy.interests.slice(0, 4).map((interest, i) => (
                        <span key={i} className="bg-sunset-100 text-sunset-700 px-2 py-1 rounded-md text-xs">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-foreground mb-2">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {buddy.languages.map((language, i) => (
                        <span key={i} className="bg-earth-100 text-earth-700 px-2 py-1 rounded-md text-xs">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-ocean-500 to-forest-500 hover:from-ocean-600 hover:to-forest-600 group-hover:scale-105 transition-all">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-ocean-500 hover:bg-ocean-600 px-8 py-4">
              Load More Travel Buddies
            </Button>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gradient-to-br from-forest-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Safety is Our
              <span className="text-forest-600"> Priority</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've built comprehensive safety features to ensure you connect with genuine, trustworthy travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-background p-6 hover:shadow-lg transition-shadow">
                <div className="bg-forest-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Safety Stats */}
          <Card className="mt-16 border-0 bg-gradient-to-r from-forest-500 to-ocean-600 text-white p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Community Safety Stats</h3>
              <p className="text-forest-100">Our commitment to safe travel experiences</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-forest-200 text-sm">Safety Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25K+</div>
                <div className="text-forest-200 text-sm">Verified Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15K+</div>
                <div className="text-forest-200 text-sm">Safe Trips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-forest-200 text-sm">Support Available</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sunset-600 via-ocean-600 to-forest-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Find Your
            <span className="block bg-gradient-to-r from-forest-300 to-sunset-300 bg-clip-text text-transparent">
              Travel Buddy?
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join our community of verified travelers and start making connections for your next adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 px-10 py-4 text-lg font-bold">
              <Users className="mr-2 h-5 w-5" />
              Join Community
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-600 px-10 py-4 text-lg font-bold">
              <Shield className="mr-2 h-5 w-5" />
              Learn About Safety
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
