import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  MapPin,
  Star,
  Search,
  Filter,
  Globe,
  Mountain,
  Waves,
  TreePine,
  UtensilsCrossed,
  Camera,
  Heart,
  Bookmark,
  Users,
  Clock,
  DollarSign,
  Thermometer,
  Plane,
  Calendar
} from "lucide-react";

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: Globe, count: "1500+" },
    { name: "Mountains", icon: Mountain, count: "400+" },
    { name: "Beaches", icon: Waves, count: "350+" },
    { name: "Forests", icon: TreePine, count: "200+" },
    { name: "Cities", icon: Globe, count: "450+" },
    { name: "Food Tours", icon: UtensilsCrossed, count: "100+" }
  ];

  const destinations = [
    {
      id: 1,
      name: "Swiss Alps",
      country: "Switzerland",
      category: "Mountains",
      image: "https://images.pexels.com/photos/33134433/pexels-photo-33134433.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 2847,
      price: 180,
      duration: "5-7 days",
      bestTime: "Jun-Sep",
      description: "Breathtaking mountain peaks, crystal-clear lakes, and charming alpine villages.",
      highlights: ["Matterhorn", "Jungfraujoch", "Lake Geneva", "Alpine Villages"],
      difficulty: "Moderate",
      weather: "15-25°C"
    },
    {
      id: 2,
      name: "Maldives",
      country: "Maldives",
      category: "Beaches",
      image: "https://images.pexels.com/photos/33108409/pexels-photo-33108409.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 1923,
      price: 320,
      duration: "4-6 days",
      bestTime: "Nov-Apr",
      description: "Pristine white sand beaches and turquoise waters in tropical paradise.",
      highlights: ["Over-water Bungalows", "Coral Reefs", "Sunset Cruises", "Spa Resorts"],
      difficulty: "Easy",
      weather: "26-30°C"
    },
    {
      id: 3,
      name: "Prague",
      country: "Czech Republic",
      category: "Cities",
      image: "https://images.pexels.com/photos/33090358/pexels-photo-33090358.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 3421,
      price: 95,
      duration: "3-4 days",
      bestTime: "Apr-Oct",
      description: "Historic architecture, vibrant culture, and medieval charm in Central Europe.",
      highlights: ["Prague Castle", "Charles Bridge", "Old Town Square", "Czech Beer"],
      difficulty: "Easy",
      weather: "10-22°C"
    },
    {
      id: 4,
      name: "Amazon Rainforest",
      country: "Brazil",
      category: "Forests",
      image: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 1654,
      price: 250,
      duration: "6-8 days",
      bestTime: "May-Sep",
      description: "World's largest tropical rainforest with incredible biodiversity and wildlife.",
      highlights: ["Wildlife Spotting", "River Cruises", "Indigenous Villages", "Canopy Walks"],
      difficulty: "Challenging",
      weather: "24-30°C"
    },
    {
      id: 5,
      name: "Angkor Wat",
      country: "Cambodia",
      category: "Cities",
      image: "https://images.pexels.com/photos/33089444/pexels-photo-33089444.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 2156,
      price: 120,
      duration: "3-5 days",
      bestTime: "Nov-Mar",
      description: "Ancient temple complex showcasing magnificent Khmer architecture.",
      highlights: ["Angkor Wat Temple", "Bayon Temple", "Ta Prohm", "Sunrise Views"],
      difficulty: "Moderate",
      weather: "22-28°C"
    },
    {
      id: 6,
      name: "Bali",
      country: "Indonesia",
      category: "Beaches",
      image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 4325,
      price: 140,
      duration: "5-7 days",
      bestTime: "Apr-Oct",
      description: "Tropical paradise with stunning beaches, rich culture, and spiritual temples.",
      highlights: ["Uluwatu Temple", "Rice Terraces", "Beach Clubs", "Yoga Retreats"],
      difficulty: "Easy",
      weather: "24-30°C"
    }
  ];

  const filteredDestinations = destinations.filter(dest => {
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-ocean-600 via-ocean-500 to-forest-600 text-white overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Discover Amazing
              <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore handpicked destinations from around the world. From mountain peaks to pristine beaches, find your next adventure.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search destinations, countries..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-sunset-400 focus:border-transparent"
                  />
                </div>
                <Button className="bg-sunset-500 hover:bg-sunset-600 px-8 py-4 font-bold">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Globe, label: "Countries", value: "180+" },
              { icon: MapPin, label: "Destinations", value: "1,500+" },
              { icon: Users, label: "Happy Travelers", value: "50K+" },
              { icon: Star, label: "Average Rating", value: "4.8" }
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

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-ocean-500 to-forest-500 text-white shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {selectedCategory === "All" ? "All Destinations" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <Card key={destination.id} className="group overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {destination.highlights.slice(0, 2).map((highlight, i) => (
                          <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{destination.description}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-sunset-500 to-earth-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    ${destination.price}/day
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-ocean-600 transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {destination.country}
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-sunset-400 fill-current" />
                      <span className="text-sm font-medium text-foreground">{destination.rating}</span>
                      <span className="text-xs text-muted-foreground">({destination.reviews})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-2" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-2" />
                      {destination.bestTime}
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="h-3 w-3 mr-2" />
                      {destination.weather}
                    </div>
                    <div className="flex items-center">
                      <Mountain className="h-3 w-3 mr-2" />
                      {destination.difficulty}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-ocean-500 to-forest-500 hover:from-ocean-600 hover:to-forest-600 group-hover:scale-105 transition-all">
                      <Camera className="h-4 w-4 mr-2" />
                      Explore
                    </Button>
                    <Button size="sm" variant="outline" className="px-3">
                      <Plane className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-ocean-500 hover:bg-ocean-600 px-8 py-4">
              Load More Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-forest-600 via-ocean-600 to-sunset-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Never Miss a
            <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
              New Destination
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Subscribe to get notified about new destinations, special offers, and travel tips.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-foreground bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-sunset-400 font-medium"
              />
              <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
