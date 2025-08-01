import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Phone,
  Play,
  Star,
  Award,
  Users,
  Globe,
  Clock,
  CheckCircle,
  MessageCircle,
  Heart,
  ChevronRight,
  Zap,
  Shield,
  Headphones,
  Mic,
  Volume2,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Calendar,
  Camera,
  Trophy,
  Target,
  TrendingUp,
  Upload,
  Share2,
  Eye,
  ThumbsUp,
  Bookmark,
  Plus,
  Mountain,
  Waves,
  TreePine
} from "lucide-react";

export default function Index() {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Handle hash navigation from other pages
  React.useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, []);

  // Enhanced Intersection Observer for scroll animations
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Add various animation classes based on element type
          if (element.classList.contains('scroll-fade-in')) {
            element.classList.add('animate-fade-in-up');
            element.classList.remove('opacity-0', 'translate-y-8');
          }
          
          if (element.classList.contains('scroll-slide-left')) {
            element.classList.add('animate-slide-left');
            element.classList.remove('opacity-0', '-translate-x-8');
          }
          
          if (element.classList.contains('scroll-slide-right')) {
            element.classList.add('animate-slide-right');
            element.classList.remove('opacity-0', 'translate-x-8');
          }
          
          if (element.classList.contains('scroll-scale-in')) {
            element.classList.add('animate-scale-in');
            element.classList.remove('opacity-0', 'scale-90');
          }
          
          if (element.classList.contains('scroll-bounce-in')) {
            element.classList.add('animate-bounce');
            element.classList.remove('opacity-0', 'translate-y-4');
          }
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animationElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in, .scroll-bounce-in');
    animationElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Travel Image */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Travel Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        />
        
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/90 via-ocean-800/80 to-forest-900/90" />
        
        {/* Floating Voice Visualization */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute bg-gradient-to-r from-sunset-400/20 to-ocean-400/20 rounded-full animate-float`}
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="scroll-fade-in opacity-0 translate-y-8 transition-all duration-1000">
            {/* Voice Assistant Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 scroll-bounce-in opacity-0 translate-y-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">AI Voice Assistant Online</span>
              <Mic className="h-4 w-4 text-green-400" />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight scroll-fade-in opacity-0 translate-y-8 transition-all duration-1000">
              Just
              <span className="block bg-gradient-to-r from-sunset-300 via-ocean-300 to-forest-300 bg-clip-text text-transparent animate-gradient-text">
                Speak
              </span>
              Your Dreams
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed scroll-fade-in opacity-0 translate-y-8 transition-all duration-1000" style={{animationDelay: '300ms'}}>
              Meet <span className="font-bold text-sunset-300">Daffy</span>, your AI travel companion.
              Simply speak your travel desires and watch as personalized adventures unfold before your eyes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 scroll-scale-in opacity-0 scale-75 transition-all duration-800" style={{animationDelay: '600ms'}}>
              <Link to="/daffy">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sunset-500 to-orange-500 hover:from-sunset-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Volume2 className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Talk to Daffy Now
                  <Sparkles className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white hover:text-ocean-700 px-12 py-6 text-xl font-bold backdrop-blur-sm bg-white/5 shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('how-it-works')}
              >
                <Play className="mr-3 h-6 w-6" />
                See Demo
              </Button>
            </div>

            {/* Voice Command Examples */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-white/10 scroll-slide-left opacity-0 -translate-x-8 transition-all duration-1000" style={{animationDelay: '900ms'}}>
              <h3 className="text-lg font-semibold mb-6 text-sunset-300">Try saying:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {[
                  "I want to go somewhere tropical for 7 days under $2000",
                  "Plan a romantic getaway to Europe this summer",
                  "Find me an adventure trip with hiking and photography"
                ].map((example, index) => (
                  <div key={index} className={`bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 scroll-fade-in opacity-0 translate-y-4`} style={{animationDelay: `${1200 + index * 200}ms`}}>
                    <div className="flex items-start space-x-3">
                      <Headphones className="h-5 w-5 text-ocean-300 mt-1 flex-shrink-0" />
                      <p className="text-white/90 text-sm italic">"{example}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              How It
              <span className="text-ocean-600"> Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI-powered voice assistant makes travel planning as easy as having a conversation with a friend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: Mic,
                title: "Speak Your Dreams",
                description: "Tell Daffy about your ideal trip - destination, budget, interests, or just say 'surprise me!'",
                color: "from-sunset-500 to-orange-500"
              },
              {
                step: "02", 
                icon: Zap,
                title: "AI Magic Happens",
                description: "Our AI processes your preferences and searches thousands of destinations and experiences.",
                color: "from-ocean-500 to-blue-500"
              },
              {
                step: "03",
                icon: MapPin,
                title: "Get Your Adventure",
                description: "Receive a personalized itinerary with flights, hotels, activities, and local recommendations.",
                color: "from-forest-500 to-green-500"
              }
            ].map((step, index) => (
              <Card key={index} className={`group text-center border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 scroll-fade-in opacity-0 translate-y-8`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white border-4 border-background w-12 h-12 rounded-full flex items-center justify-center font-bold text-muted-foreground text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ocean-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Voice Interaction Demo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative scroll-slide-left opacity-0 -translate-x-8">
              <div className="bg-gradient-to-br from-ocean-500 to-forest-600 rounded-3xl p-8 text-white relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Live Conversation</h3>
                
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-2xl p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center">
                        <Mic className="h-4 w-4" />
                      </div>
                      <span className="font-medium">You</span>
                    </div>
                    <p className="text-white/90">"I want to visit Japan during cherry blossom season with a $3000 budget"</p>
                  </div>
                  
                  <div className="bg-sunset-500/30 rounded-2xl p-4 transform hover:scale-105 transition-transform">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 bg-sunset-500 rounded-full flex items-center justify-center">
                        <Volume2 className="h-4 w-4" />
                      </div>
                      <span className="font-medium">Daffy</span>
                    </div>
                    <p className="text-white/90">"Perfect! I've found amazing cherry blossom spots in Kyoto and Tokyo. Here's a 10-day itinerary with traditional ryokans, temple visits, and the best viewing locations within your budget."</p>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center">
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-8 bg-sunset-300 rounded-full animate-pulse`} style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 scroll-slide-right opacity-0 translate-x-8">
              {[
                {
                  icon: Target,
                  title: "Instant Understanding",
                  description: "Daffy processes your speech in real-time and understands context, preferences, and travel nuances.",
                  color: "from-sunset-500 to-orange-500"
                },
                {
                  icon: Shield,
                  title: "Personalized Results", 
                  description: "Every suggestion is tailored to your budget, dates, interests, and travel style preferences.",
                  color: "from-ocean-500 to-blue-500"
                },
                {
                  icon: Clock,
                  title: "Smart & Secure",
                  description: "Your conversations are encrypted and private. Daffy learns your preferences without storing personal data.",
                  color: "from-forest-500 to-green-500"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 group transform hover:scale-105 transition-transform duration-300">
                  <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-ocean-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 bg-gradient-to-br from-earth-50 to-sunset-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Inspiring Travel
              <span className="text-earth-600"> Moments</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get inspired by stunning photography from our community of travelers around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: "https://images.pexels.com/photos/33134433/pexels-photo-33134433.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Swiss Alpine Paradise",
                location: "Swiss Alps, Switzerland",
                photographer: "Elena Rodriguez",
                likes: "2.1K",
                category: "Nature"
              },
              {
                image: "https://images.pexels.com/photos/33108409/pexels-photo-33108409.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Tropical Escape",
                location: "Maldives",
                photographer: "James Chen",
                likes: "3.4K",
                category: "Beach"
              },
              {
                image: "https://images.pexels.com/photos/33113196/pexels-photo-33113196.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Aurora Magic",
                location: "Lapland, Finland",
                photographer: "Andreas Berg",
                likes: "4.2K",
                category: "Nature"
              }
            ].map((photo, index) => (
              <Card key={index} className="group overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-700 transform perspective-1000">
                <div className={`relative aspect-[4/3] overflow-hidden transform transition-all duration-700 ${
                  index === 0 ? 'scroll-slide-left opacity-0 -translate-x-16' :
                  index === 1 ? 'scroll-fade-in opacity-0 translate-y-16 scale-75' :
                  'scroll-slide-right opacity-0 translate-x-16'
                } group-hover:scale-105`} style={{animationDelay: `${index * 300}ms`}}>
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-120 transition-transform duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:backdrop-blur-sm">
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">{photo.title}</h3>
                      <p className="text-white/90 text-sm flex items-center drop-shadow-md">
                        <MapPin className="h-3 w-3 mr-1" />
                        {photo.location}
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-red-500 transition-all duration-300 hover:scale-110">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="absolute top-4 left-4 bg-gradient-to-r from-earth-500 to-sunset-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg transform hover:scale-110 transition-transform">
                    {photo.category}
                  </div>

                  {/* Sparkle effect on hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>

                <CardContent className="p-4 transform group-hover:bg-gradient-to-r group-hover:from-earth-50 group-hover:to-sunset-50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-earth-500 to-sunset-500 rounded-full flex items-center justify-center text-white text-xs font-bold transform group-hover:scale-110 transition-transform duration-300">
                        {photo.photographer.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{photo.photographer}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground group-hover:text-green-600 transition-colors">
                      <ThumbsUp className="h-3 w-3 group-hover:animate-bounce" />
                      <span className="font-medium">{photo.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center scroll-bounce-in opacity-0 translate-y-4">
            <Link to="/galleries">
              <Button size="lg" className="bg-gradient-to-r from-earth-500 to-sunset-500 hover:from-earth-600 hover:to-sunset-600 px-8 py-4 text-lg font-bold">
                <Camera className="mr-2 h-5 w-5" />
                Explore All Galleries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Share Your Adventure */}
      <section className="py-24 bg-gradient-to-br from-ocean-500 to-forest-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className={"bg-[url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"2\"/%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] w-full h-full animate-pulse"}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-slide-left opacity-0 -translate-x-8">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Share Your
                <span className="block bg-gradient-to-r from-sunset-300 to-forest-300 bg-clip-text text-transparent">
                  Adventure
                </span>
              </h2>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Captured something amazing on your travels? Share your photos, stories, and experiences with our global community of adventurers.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Upload, title: "Upload Photos", description: "Share your best travel moments with high-quality photos" },
                  { icon: Users, title: "Connect with Travelers", description: "Build a following and inspire other adventurers" },
                  { icon: Trophy, title: "Get Featured", description: "Stand a chance to be featured in our curated collections" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-white/20 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/galleries">
                  <Button size="lg" className="bg-sunset-500 hover:bg-sunset-600 text-white px-8 py-4 font-bold shadow-xl hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105">
                    <Plus className="mr-2 h-5 w-5" />
                    Upload Your Photos
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-600 px-8 py-4 font-bold backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Story
                </Button>
              </div>
            </div>

            <div className="relative scroll-slide-right opacity-0 translate-x-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <img src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Adventure" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <img src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Beach" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <img src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mountain" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                    <img src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400" alt="City" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating Camera Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sunset-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
                <Camera className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Success
              <span className="text-sunset-600"> Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real travelers, real conversations, real adventures created by Daffy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                location: "Seattle, USA",
                trip: "2-week European Adventure",
                story: "I just said 'plan my dream Europe trip' and Daffy created an incredible 14-day journey through 6 countries. Every detail was perfect!",
                savings: "$800",
                rating: 5,
                avatar: "SM",
                duration: "5 min conversation"
              },
              {
                name: "Carlos Rodriguez",
                location: "Mexico City, Mexico",
                trip: "Solo Backpacking Asia",
                story: "Daffy understood I wanted budget travel with cultural immersion. The 3-month itinerary was exactly what I dreamed of.",
                savings: "$1,200",
                rating: 5,
                avatar: "CR",
                duration: "8 min conversation"
              },
              {
                name: "Emma Thompson",
                location: "London, UK",
                trip: "Romantic Anniversary Trip",
                story: "For our 10th anniversary, Daffy planned the most romantic getaway to Santorini. Every moment was magical!",
                savings: "$600",
                rating: 5,
                avatar: "ET",
                duration: "3 min conversation"
              }
            ].map((story, index) => (
              <Card key={index} className={`group border-0 bg-background hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-fade-in opacity-0 translate-y-8`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-sunset-500 to-ocean-500 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg group-hover:text-sunset-600 transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{story.location}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-sunset-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-sunset-100 text-sunset-800 px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                    {story.trip}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{story.story}"
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="text-green-600 font-semibold">
                        Saved {story.savings}
                      </div>
                      <div className="text-muted-foreground">
                        {story.duration}
                      </div>
                    </div>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 scroll-fade-in opacity-0 translate-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Travel
              <span className="text-ocean-600"> Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond voice planning, explore our full suite of travel tools and community features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Destinations",
                description: "Explore 1500+ handpicked destinations worldwide",
                link: "/destinations",
                color: "from-earth-500 to-earth-600",
                stats: "1.5K+ Places"
              },
              {
                icon: Users,
                title: "Travel Buddies",
                description: "Connect with verified travelers for shared adventures",
                link: "/travel-buddy",
                color: "from-forest-500 to-forest-600",
                stats: "25K+ Members"
              },
              {
                icon: Camera,
                title: "Galleries",
                description: "Stunning photography and travel inspiration",
                link: "/galleries",
                color: "from-sunset-500 to-sunset-600",
                stats: "500K+ Photos"
              }
            ].map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className={`group border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full scroll-fade-in opacity-0 translate-y-8`} style={{animationDelay: `${index * 200}ms`}}>
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-ocean-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>
                    <div className="bg-muted rounded-full px-4 py-2 text-sm font-medium text-muted-foreground group-hover:bg-ocean-100 group-hover:text-ocean-700 transition-colors">
                      {feature.stats}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-slide-left opacity-0 -translate-x-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                The Future of
                <span className="text-ocean-600"> Travel Planning</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Wanderlust was born from a simple idea: travel planning should be as exciting as the journey itself. 
                Our AI-powered voice assistant represents the next evolution in personalized travel experiences.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: "AI Innovation Leader", description: "Leading the industry in voice-powered travel technology" },
                  { icon: Users, title: "Growing Community", description: "50,000+ travelers trust our platform for their adventures" },
                  { icon: Globe, title: "Global Reach", description: "Serving travelers in 180+ countries worldwide" },
                  { icon: TrendingUp, title: "Proven Results", description: "98% customer satisfaction with AI recommendations" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-ocean-500 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative scroll-slide-right opacity-0 translate-x-8">
              <div className="bg-gradient-to-br from-ocean-500 to-forest-600 rounded-3xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-8">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-sunset-300 animate-float" />
                  <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
                  <p className="text-ocean-100">Transforming how the world travels</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center transform hover:scale-110 transition-transform">
                    <div className="text-4xl font-bold mb-2">50K+</div>
                    <div className="text-ocean-200">Happy Travelers</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform">
                    <div className="text-4xl font-bold mb-2">500K+</div>
                    <div className="text-ocean-200">Voice Interactions</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform">
                    <div className="text-4xl font-bold mb-2">180+</div>
                    <div className="text-ocean-200">Countries</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform">
                    <div className="text-4xl font-bold mb-2">4.9★</div>
                    <div className="text-ocean-200">AI Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in opacity-0 translate-y-8 transition-all duration-800">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 scroll-slide-left opacity-0 -translate-x-8 transition-all duration-800" style={{animationDelay: '200ms'}}>
              Get in
              <span className="text-ocean-600"> Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto scroll-fade-in opacity-0 translate-y-4 transition-all duration-800" style={{animationDelay: '400ms'}}>
              Have questions about Daffy or need help with your travel plans? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Talk to Us",
                description: "Speak directly with our travel experts",
                info: "+1 (555) 123-4567",
                color: "from-ocean-50 to-ocean-100",
                iconBg: "bg-ocean-500"
              },
              {
                icon: Mail,
                title: "Email Us", 
                description: "Get detailed responses to your queries",
                info: "hello@wanderlust.com",
                color: "from-forest-50 to-forest-100",
                iconBg: "bg-forest-500"
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant support for urgent questions",
                info: "Start Chat",
                color: "from-sunset-50 to-sunset-100",
                iconBg: "bg-sunset-500"
              }
            ].map((contact, index) => (
              <Card key={index} className={`text-center p-8 border-0 bg-gradient-to-br ${contact.color} hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 scroll-scale-in opacity-0 scale-75`} style={{animationDelay: `${600 + index * 200}ms`}}>
                <div className={`${contact.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-all duration-300`}>
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 transform hover:scale-105 transition-transform duration-300">{contact.title}</h3>
                <p className="text-muted-foreground mb-4">{contact.description}</p>
                {contact.title === "Live Chat" ? (
                  <Button className="bg-sunset-500 hover:bg-sunset-600 transform hover:scale-105 transition-all duration-300">{contact.info}</Button>
                ) : (
                  <p className="font-semibold text-foreground">{contact.info}</p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-ocean-600 via-ocean-500 to-forest-600 text-white relative overflow-hidden">
        <div className={"absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-fade-in opacity-0 translate-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Your Next Adventure is
            <span className="block bg-gradient-to-r from-sunset-300 to-sunset-400 bg-clip-text text-transparent">
              One Conversation Away
            </span>
          </h2>
          <p className="text-xl mb-12 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join thousands of travelers who've discovered their perfect destinations through voice conversations with Daffy. 
            Start planning your dream trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/daffy">
              <Button
                size="lg"
                className="bg-sunset-500 hover:bg-sunset-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-sunset-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Volume2 className="mr-3 h-6 w-6" />
                Start Voice Chat
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-ocean-600 px-12 py-6 text-xl font-bold backdrop-blur-sm bg-white/10 shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('how-it-works')}
            >
              <Play className="mr-3 h-6 w-6" />
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
