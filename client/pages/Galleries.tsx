import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Camera,
  Search,
  Filter,
  Grid3X3,
  List,
  MapPin,
  Star,
  Heart,
  Bookmark,
  Share2,
  Download,
  Eye,
  ThumbsUp,
  User,
  Globe,
  Mountain,
  Waves,
  TreePine,
  UtensilsCrossed,
  Award,
  Calendar,
  Clock,
  Plus,
  Zap,
  Trophy,
  Users
} from "lucide-react";

export default function Galleries() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: Grid3X3, count: "25K+" },
    { name: "Nature", icon: TreePine, count: "8.5K+" },
    { name: "Cities", icon: Globe, count: "6.2K+" },
    { name: "Adventure", icon: Mountain, count: "4.8K+" },
    { name: "Culture", icon: Award, count: "3.1K+" },
    { name: "Beaches", icon: Waves, count: "2.4K+" },
    { name: "Food", icon: UtensilsCrossed, count: "1.9K+" }
  ];

  const galleries = [
    {
      id: 1,
      title: "Serene Alpine Lakes",
      location: "Swiss Alps, Switzerland",
      photographer: "Elena Rodriguez",
      avatar: "ER",
      image: "https://images.pexels.com/photos/33134433/pexels-photo-33134433.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Nature",
      views: "12.5K",
      likes: "2.1K",
      bookmarks: "847",
      rating: 4.9,
      reviewCount: 156,
      description: "Crystal clear mountain lakes reflecting towering peaks in perfect harmony with nature's symphony.",
      tags: ["Mountain Lakes", "Reflection", "Peaceful", "Hiking"],
      uploadDate: "3 days ago",
      featured: true,
      photographerRating: 4.8,
      photographerTrips: 23
    },
    {
      id: 2,
      title: "Tropical Paradise Unveiled",
      location: "Maldives",
      photographer: "James Chen",
      avatar: "JC",
      image: "https://images.pexels.com/photos/33108409/pexels-photo-33108409.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Beaches",
      views: "18.2K",
      likes: "3.4K",
      bookmarks: "1.2K",
      rating: 5.0,
      reviewCount: 203,
      description: "Untouched white sand beaches meet turquoise waters in this slice of heaven on earth.",
      tags: ["Tropical", "White Sand", "Turquoise", "Paradise"],
      uploadDate: "1 week ago",
      featured: true,
      photographerRating: 4.9,
      photographerTrips: 31
    },
    {
      id: 3,
      title: "Historic Prague at Dusk",
      location: "Prague, Czech Republic",
      photographer: "Marco Silva",
      avatar: "MS",
      image: "https://images.pexels.com/photos/33090358/pexels-photo-33090358.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Cities",
      views: "9.8K",
      likes: "1.7K",
      bookmarks: "623",
      rating: 4.8,
      reviewCount: 127,
      description: "Medieval bridges illuminated against the backdrop of a modern city skyline at golden hour.",
      tags: ["Architecture", "Golden Hour", "Historic", "Bridges"],
      uploadDate: "5 days ago",
      featured: false,
      photographerRating: 4.7,
      photographerTrips: 18
    },
    {
      id: 4,
      title: "Ancient Khmer Heritage",
      location: "Angkor Wat, Cambodia",
      photographer: "Priya Sharma",
      avatar: "PS",
      image: "https://images.pexels.com/photos/33089444/pexels-photo-33089444.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      views: "15.3K",
      likes: "2.8K",
      bookmarks: "956",
      rating: 4.9,
      reviewCount: 184,
      description: "Centuries-old temple complex showcasing the magnificent architectural craftsmanship of the Khmer Empire.",
      tags: ["Ancient", "Temple", "Heritage", "Architecture"],
      uploadDate: "2 weeks ago",
      featured: true,
      photographerRating: 4.8,
      photographerTrips: 15
    },
    {
      id: 5,
      title: "Aurora Borealis Magic",
      location: "Lapland, Finland",
      photographer: "Andreas Berg",
      avatar: "AB",
      image: "https://images.pexels.com/photos/33113196/pexels-photo-33113196.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Nature",
      views: "22.1K",
      likes: "4.2K",
      bookmarks: "1.8K",
      rating: 5.0,
      reviewCount: 267,
      description: "Northern lights dancing across the winter sky in spectacular waves of green and blue.",
      tags: ["Aurora", "Winter", "Northern Lights", "Phenomenon"],
      uploadDate: "4 days ago",
      featured: true,
      photographerRating: 4.9,
      photographerTrips: 28
    },
    {
      id: 6,
      title: "Sahara Desert Dunes",
      location: "Sahara Desert, Morocco",
      photographer: "Ahmed Hassan",
      avatar: "AH",
      image: "https://images.pexels.com/photos/2150076/pexels-photo-2150076.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Adventure",
      views: "14.7K",
      likes: "2.5K",
      bookmarks: "891",
      rating: 4.7,
      reviewCount: 143,
      description: "Endless golden sand dunes shaped by wind and time into perfect curves and patterns.",
      tags: ["Desert", "Sand Dunes", "Golden", "Patterns"],
      uploadDate: "1 week ago",
      featured: false,
      photographerRating: 4.6,
      photographerTrips: 22
    },
    {
      id: 7,
      title: "Japanese Cherry Blossoms",
      location: "Kyoto, Japan",
      photographer: "Yuki Tanaka",
      avatar: "YT",
      image: "https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Culture",
      views: "19.6K",
      likes: "3.7K",
      bookmarks: "1.4K",
      rating: 4.9,
      reviewCount: 221,
      description: "Delicate sakura petals create a pink canopy over traditional Japanese temples and gardens.",
      tags: ["Sakura", "Traditional", "Spring", "Pink"],
      uploadDate: "3 weeks ago",
      featured: true,
      photographerRating: 4.8,
      photographerTrips: 19
    },
    {
      id: 8,
      title: "Himalayan Summit Views",
      location: "Nepal Himalayas",
      photographer: "Raj Patel",
      avatar: "RP",
      image: "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Adventure",
      views: "16.4K",
      likes: "3.1K",
      bookmarks: "1.1K",
      rating: 4.8,
      reviewCount: 189,
      description: "Breathtaking panoramic views from the world's highest peaks shrouded in morning mist.",
      tags: ["Mountains", "Summit", "Panoramic", "Mist"],
      uploadDate: "6 days ago",
      featured: false,
      photographerRating: 4.7,
      photographerTrips: 25
    }
  ];

  const featuredPhotographers = [
    {
      name: "Elena Rodriguez",
      avatar: "ER",
      location: "Barcelona, Spain",
      specialties: ["Landscape", "Nature"],
      followers: "8.2K",
      galleries: 45,
      rating: 4.8,
      totalLikes: "156K"
    },
    {
      name: "James Chen",
      avatar: "JC",
      location: "Sydney, Australia",
      specialties: ["Travel", "Architecture"],
      followers: "12.1K",
      galleries: 62,
      rating: 4.9,
      totalLikes: "203K"
    },
    {
      name: "Andreas Berg",
      avatar: "AB",
      location: "Stockholm, Sweden",
      specialties: ["Aurora", "Wildlife"],
      followers: "15.7K",
      galleries: 38,
      rating: 4.9,
      totalLikes: "287K"
    }
  ];

  const filteredGalleries = galleries.filter(gallery => {
    const matchesCategory = selectedCategory === "All" || gallery.category === selectedCategory;
    const matchesSearch = gallery.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gallery.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         gallery.photographer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-earth-600 via-sunset-600 to-ocean-600 text-white overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Inspiring Photo
              <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
                Galleries
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore the world through the eyes of fellow travelers. Discover stunning photography, authentic stories, and hidden gems from every corner of the globe.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Search galleries, locations, photographers..."
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
              { icon: Camera, label: "Photos Shared", value: "500K+" },
              { icon: Users, label: "Contributors", value: "85K+" },
              { icon: Eye, label: "Total Views", value: "12M+" },
              { icon: Star, label: "Avg Rating", value: "4.8" }
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

      {/* Category Filter & View Toggle */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-earth-500 to-sunset-500 text-white shadow-lg'
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

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-muted rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid" ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <Grid3X3 className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list" ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid/List */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "All" ? "All Galleries" : selectedCategory} Photos
            </h2>
            <p className="text-muted-foreground">
              {filteredGalleries.length} {filteredGalleries.length !== 1 ? 'galleries' : 'gallery'} found
            </p>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGalleries.map((gallery, index) => (
                <Card key={gallery.id} className="group overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={gallery.image}
                      alt={gallery.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Featured Badge */}
                    {gallery.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-sunset-500 to-earth-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                        <Trophy className="h-3 w-3 mr-1" />
                        Featured
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {gallery.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{gallery.description}</p>
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
                      <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-earth-600 transition-colors line-clamp-1">
                          {gallery.title}
                        </h3>
                        <p className="text-muted-foreground text-sm flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {gallery.location}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-sunset-400 fill-current" />
                        <span className="text-sm font-medium text-foreground">{gallery.rating}</span>
                      </div>
                    </div>

                    {/* Photographer Info */}
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-muted/30 rounded-lg">
                      <div className="bg-gradient-to-r from-earth-500 to-sunset-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        {gallery.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm">{gallery.photographer}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{gallery.photographerTrips} trips</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-sunset-400 fill-current mr-1" />
                            {gallery.photographerRating}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{gallery.uploadDate}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {gallery.views}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {gallery.likes}
                        </span>
                        <span className="flex items-center">
                          <Bookmark className="h-3 w-3 mr-1" />
                          {gallery.bookmarks}
                        </span>
                      </div>
                      <span className="text-xs">{gallery.reviewCount} reviews</span>
                    </div>

                    <Button size="sm" className="w-full bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600 group-hover:scale-105 transition-all">
                      <Camera className="h-4 w-4 mr-2" />
                      View Gallery
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredGalleries.map((gallery, index) => (
                <Card key={gallery.id} className="group border-0 bg-background shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                      <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-lg">
                        <img
                          src={gallery.image}
                          alt={gallery.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {gallery.featured && (
                          <div className="absolute top-2 left-2 bg-sunset-500 text-white px-2 py-1 rounded-md text-xs font-bold">
                            Featured
                          </div>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-earth-600 transition-colors">
                          {gallery.title}
                        </h3>
                        <p className="text-muted-foreground text-sm flex items-center mb-3">
                          <MapPin className="h-3 w-3 mr-1" />
                          {gallery.location}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                          {gallery.description}
                        </p>
                        
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-gradient-to-r from-earth-500 to-sunset-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs">
                            {gallery.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{gallery.photographer}</p>
                            <p className="text-xs text-muted-foreground">{gallery.uploadDate}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {gallery.tags.slice(0, 3).map((tag, i) => (
                            <span key={i} className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end space-x-1 mb-2">
                          <Star className="h-4 w-4 text-sunset-400 fill-current" />
                          <span className="font-medium">{gallery.rating}</span>
                          <span className="text-sm text-muted-foreground">({gallery.reviewCount})</span>
                        </div>
                        
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center justify-center md:justify-end">
                            <Eye className="h-3 w-3 mr-1" />
                            {gallery.views} views
                          </div>
                          <div className="flex items-center justify-center md:justify-end">
                            <ThumbsUp className="h-3 w-3 mr-1" />
                            {gallery.likes} likes
                          </div>
                        </div>
                        
                        <Button size="sm" className="bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600">
                          View Gallery
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-earth-500 hover:bg-earth-600 px-8 py-4">
              Load More Galleries
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Photographers */}
      <section className="py-16 bg-gradient-to-br from-earth-50 to-sunset-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured
              <span className="text-earth-600"> Photographers</span>
            </h2>
            <p className="text-muted-foreground">
              Discover amazing photographers from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPhotographers.map((photographer, index) => (
              <Card key={index} className="text-center border-0 bg-background hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-earth-500 to-sunset-500 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {photographer.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{photographer.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{photographer.location}</p>
                  
                  <div className="flex justify-center space-x-1 mb-4">
                    {photographer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-earth-100 text-earth-700 px-3 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{photographer.followers}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{photographer.galleries}</div>
                      <div className="text-xs text-muted-foreground">Galleries</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-sunset-400 fill-current mr-1" />
                      {photographer.rating}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      {photographer.totalLikes}
                    </div>
                  </div>

                  <Button size="sm" className="bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section className="py-16 bg-gradient-to-r from-earth-600 via-sunset-600 to-ocean-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Share Your Travel
            <span className="block bg-gradient-to-r from-forest-300 to-sunset-300 bg-clip-text text-transparent">
              Photography
            </span>
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join our community of photographers and inspire others with your travel moments. Get featured and earn recognition for your amazing work.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 px-10 py-4 text-lg font-bold">
              <Plus className="mr-2 h-5 w-5" />
              Upload Photos
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/80 text-white hover:bg-white hover:text-earth-600 px-10 py-4 text-lg font-bold">
              <Camera className="mr-2 h-5 w-5" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
