import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Plane,
  DollarSign,
  Star,
  Clock,
  Users,
  Camera,
  Utensils,
  Mountain,
  Building,
  Waves,
  Check,
  Sparkles,
  Globe,
  Heart,
  Phone,
  Coffee,
  TreePine,
  Music,
  Home
} from "lucide-react";

interface TripDetails {
  origin: string;
  destination: string;
  arrivalDate: string;
  departureDate: string;
  travelStyle: string;
  interests: string[];
  groupSize: number;
  budgetTier: string;
  luxuryExperience: string;
  specialRequests: string;
}

interface DayActivity {
  time: string;
  title: string;
  description: string;
}

interface TripPlan {
  route: string;
  duration: string;
  groupSize: string;
  budgetTier: string;
  experienceLevel: string;
  interests: string;
  tripDates: string;
  days: { [key: string]: DayActivity[] };
}

// Error Boundary for ElevenLabs Widget
const WidgetErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.target && (event.target as any).src?.includes('elevenlabs')) {
        setHasError(true);
        console.error('ElevenLabs widget failed to load:', event);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-gray-600 text-sm">Voice assistant temporarily unavailable</p>
      </div>
    );
  }

  return <>{children}</>;
};

// Custom hook for ElevenLabs widget
const useElevenLabsWidget = (agentId: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]');
    if (existingScript) {
      // Check if the custom element is already defined
      if (customElements.get('elevenlabs-convai')) {
        setIsLoaded(true);
      } else {
        // Wait a bit for the custom element to be defined
        timeoutId = setTimeout(() => {
          if (customElements.get('elevenlabs-convai')) {
            setIsLoaded(true);
          } else {
            setError('Widget custom element not defined');
          }
        }, 2000);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';

    const handleLoad = () => {
      console.log('ElevenLabs script loaded');
      // Wait for custom element to be defined
      timeoutId = setTimeout(() => {
        if (customElements.get('elevenlabs-convai')) {
          setIsLoaded(true);
        } else {
          setError('Widget custom element not defined after script load');
        }
      }, 1000);
    };

    const handleError = (e: Event) => {
      console.error('ElevenLabs script failed to load:', e);
      setError('Failed to load widget script');
    };

    script.addEventListener('load', handleLoad);
    script.addEventListener('error', handleError);

    // Add timeout fallback
    const loadTimeout = setTimeout(() => {
      if (!isLoaded) {
        setError('Widget loading timeout');
      }
    }, 10000);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
      clearTimeout(timeoutId);
      clearTimeout(loadTimeout);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isLoaded]);

  return { isLoaded, error };
};

// ElevenLabs Widget Component
const ElevenLabsWidget = () => {
  const { isLoaded, error } = useElevenLabsWidget('agent_4701k1bd2b35egcrr23n1s81yqh9');
  const widgetRef = useRef<HTMLDivElement>(null);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    if (isLoaded && widgetRef.current && !widgetRef.current.hasChildNodes()) {
      try {
        // Create custom element directly instead of using dangerouslySetInnerHTML
        const widget = document.createElement('elevenlabs-convai');
        widget.setAttribute('agent-id', 'agent_4701k1bd2b35egcrr23n1s81yqh9');

        // Add error listener to the widget itself
        widget.addEventListener('error', () => {
          console.warn('ElevenLabs widget reported an error');
          setWidgetError(true);
        });

        widgetRef.current.appendChild(widget);
        console.log('ElevenLabs widget created successfully');
      } catch (err) {
        console.error('Error creating ElevenLabs widget:', err);
        setWidgetError(true);
      }
    }
  }, [isLoaded]);

  if (error || widgetError) {
    return (
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg text-center">
        <p className="text-yellow-700 text-sm mb-2">Voice assistant temporarily unavailable</p>
        <p className="text-yellow-600 text-xs">You can still use the form below to plan your trip</p>
      </div>
    );
  }

  return (
    <WidgetErrorBoundary>
      <div className="mt-6" ref={widgetRef}>
        {!isLoaded && (
          <div className="p-4 bg-blue-50 rounded-lg text-center">
            <div className="animate-pulse flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-blue-600 text-sm mt-2">Loading voice assistant...</p>
          </div>
        )}
      </div>
    </WidgetErrorBoundary>
  );
};

// Function to parse the trip plan from your output format
const parseTripPlan = (outputText: string): TripPlan | null => {
  try {
    // If the input is already a parsed object, return it directly
    if (typeof outputText === 'object') {
      return outputText as TripPlan;
    }

    // Normalize line breaks and remove code block markers if present
    const normalizedText = outputText
      .replace(/```/g, '')
      .replace(/---/g, '')
      .replace(/\*\*/g, '') // Remove markdown bold markers
      .trim();

    // Extract key information using improved regex patterns
    const routeMatch = normalizedText.match(/(?:Route|route):?\s*(.+?)(?:\n|$)/i);
    const durationMatch = normalizedText.match(/(?:Duration|duration):?\s*(.+?)(?:\n|$)/i);
    const groupSizeMatch = normalizedText.match(/(?:Group Size|group size):?\s*(.+?)(?:\n|$)/i);
    const budgetMatch = normalizedText.match(/(?:Budget Tier|budget tier):?\s*(.+?)(?:\n|$)/i);
    const experienceMatch = normalizedText.match(/(?:Experience Level|experience level):?\s*(.+?)(?:\n|$)/i);
    const interestsMatch = normalizedText.match(/(?:Interests|interests):?\s*(.+?)(?:\n|$)/i);
    const datesMatch = normalizedText.match(/(?:Trip Dates|Dates):?\s*(.+?)(?:\n|$)/i);

    // Parse days and activities with improved regex
    const days: { [key: string]: DayActivity[] } = {};

    // Split by day sections with better pattern matching
    const daySections = normalizedText.split(/(?:\*\*)?(?:Day \d+|DAY \d+)(?:\*\*)?/i);

    // Remove the first empty section
    daySections.shift();

    daySections.forEach((daySection, index) => {
      const dayNum = `Day ${index + 1}`;
      const activities: DayActivity[] = [];

      // Extract activities using improved patterns
      // Match patterns like: * Morning (9:00 AM): Activity Title
      // or: * **Morning (9:00 AM)**: Activity Title
      const lines = daySection.split('\n').filter(line => line.trim());

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('*') || line.startsWith('-')) {
          // Extract time and title from the activity line
          const activityMatch = line.match(/(?:\*|\-)\s*(?:\*\*)?([^:*]+?)(?:\*\*)?:\s*(.+)/);
          if (activityMatch) {
            let timeAndPrefix = activityMatch[1].trim();
            let title = activityMatch[2].trim();

            // Extract time from parentheses if present (e.g., "Morning (9:00 AM)" -> time: "9:00 AM", prefix: "Morning")
            const timeMatch = timeAndPrefix.match(/^(.+?)\s*\(([^)]+)\)$/);
            let time = '';

            if (timeMatch) {
              time = timeMatch[2].trim(); // Extract the time from parentheses
              const prefix = timeMatch[1].trim(); // Extract the prefix (Morning, Afternoon, etc.)
              // Don't include the prefix in the title if it's already there
              if (!title.toLowerCase().includes(prefix.toLowerCase())) {
                title = `${prefix}: ${title}`;
              }
            } else {
              time = timeAndPrefix;
            }

            // Look for description in the next line(s)
            let description = '';
            let j = i + 1;
            while (j < lines.length && !lines[j].trim().startsWith('*') && !lines[j].trim().startsWith('-')) {
              const descLine = lines[j].trim();
              if (descLine && !descLine.startsWith('*')) {
                description += (description ? ' ' : '') + descLine.replace(/^\*/, '').trim();
              }
              j++;
            }

            activities.push({
              time,
              title,
              description
            });
          }
        }
      }

      if (activities.length > 0) {
        days[dayNum] = activities;
      }
    });

    return {
      route: routeMatch ? routeMatch[1].trim() : '',
      duration: durationMatch ? durationMatch[1].trim() : '',
      groupSize: groupSizeMatch ? groupSizeMatch[1].trim() : '',
      budgetTier: budgetMatch ? budgetMatch[1].trim() : '',
      experienceLevel: experienceMatch ? experienceMatch[1].trim() : '',
      interests: interestsMatch ? interestsMatch[1].trim() : '',
      tripDates: datesMatch ? datesMatch[1].trim() : '',
      days
    };
  } catch (error) {
    console.error('Error parsing trip plan:', error);
    return null;
  }
};

// Sample trip plan data from your output
const sampleTripOutput = `---

#### Trip Overview

* **Route**: Delhi (DEL) → Bagdogra (IXB)
* **Duration**: 4 days
* **Group Size**: Not specified
* **Budget Tier**: Economical
* **Experience Level**: Not specified
* **Interests**: Nature, Culture, Relaxation

**Trip Dates: July 29, 2025 – August 1, 2025**

---

### Day-by-Day Itinerary

**Day 1**

* **Morning (9:00 AM)**: Arrival and Check-in
  *Welcome to Bagdogra! Check-in at your chosen resort, unwind, and enjoy a complimentary breakfast.*
* **Afternoon (2:00 PM)**: Explore Bagdogra
  *Discover local markets and get your first taste of the region's unique culture and cuisine.*
* **Evening (7:00 PM)**: Dinner at Local Restaurant
  *Enjoy a local culinary experience in Bagdogra with traditional dishes.*

**Day 2**

* **Morning (9:00 AM)**: Sikkim Introduction
  *Start with an engaging presentation about Sikkim and its unique geographical and cultural attributes.*
* **Afternoon (2:00 PM)**: Scenic Drive to Sikkim
  *Enjoy a scenic drive through the lush landscapes leading to the bordering region of Sikkim.*
* **Evening (7:00 PM)**: Relax at Resort
  *Return to the resort, experience the amenities, and relax under the Himalayan stars.*

**Day 3**

* **Morning (9:00 AM)**: Nature Walk
  *Begin your day with a peaceful nature walk exploring the local biodiversity.*
* **Afternoon (2:00 PM)**: Cultural Tour
  *Immerse yourself in the local culture with visits to cultural sites and community interactions.*
* **Evening (7:00 PM)**: Traditional Dance Performance
  *End your day with a vibrant traditional dance performance that captures the spirit of the region.*

**Day 4**

* **Morning (9:00 AM)**: Farewell Brunch
  *Enjoy a farewell brunch as you reminisce your wonderful journey.*
* **Afternoon (2:00 PM)**: Departure Preparation
  *Prepare for your departure with a relaxed afternoon at the resort.*
* **Evening (7:00 PM)**: Fly Back to Delhi
  *Conclude your memorable trip to Sikkim and Bagdogra.*

---`;

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('TripPlanner Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">We're sorry, but there was an error loading the trip planner.</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function TripPlannerMain() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    origin: "",
    destination: "",
    arrivalDate: "",
    departureDate: "",
    travelStyle: "",
    interests: [],
    groupSize: 1,
    budgetTier: "",
    luxuryExperience: "",
    specialRequests: ""
  });
  const [showPlan, setShowPlan] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<TripPlan | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);

  // Add global error handler with better debugging
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.log('Global script error details:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
        stack: event.error?.stack
      });

      // Only prevent default for external script errors, not our own code errors
      if (event.filename && (event.filename.includes('elevenlabs') || event.filename.includes('unpkg.com'))) {
        console.warn('External script error prevented from crashing app:', event.message);
        event.preventDefault();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.warn('Unhandled promise rejection:', event.reason);
      // Only prevent default for network/external errors
      if (event.reason && typeof event.reason === 'string' &&
          (event.reason.includes('elevenlabs') || event.reason.includes('network') || event.reason.includes('fetch'))) {
        event.preventDefault();
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const updateField = (field: keyof TripDetails, value: any) => {
    setTripDetails(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (interest: string) => {
    const current = tripDetails.interests;
    updateField(
      "interests",
      current.includes(interest)
        ? current.filter(i => i !== interest)
        : [...current, interest]
    );
  };

  const nextStep = () => currentStep < 3 && setCurrentStep(cur => cur + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(cur => cur - 1);

  const generatePlan = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch("https://adarskr03.app.n8n.cloud/webhook/travel-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tripDetails)
      });

      if (!res.ok) throw new Error("Failed to generate plan");

      // First check if response is JSON
      let data;
      try {
        data = await res.json();
        console.log("API Response:", data); // Debug log

        // Handle different response structures
        if (data && data.output) {
          // If response has direct 'output' field
          const parsed = parseTripPlan(data.output);
          setGeneratedPlan(parsed);
        } else if (data && Array.isArray(data) && data[0]?.output) {
          // If response is array with output
          const parsed = parseTripPlan(data[0].output);
          setGeneratedPlan(parsed);
        } else if (typeof data === 'string') {
          // If response is plain text
          const parsed = parseTripPlan(data);
          setGeneratedPlan(parsed);
        } else {
          throw new Error("Unexpected response format");
        }
      } catch (parseError) {
        console.error("JSON parse error, trying as text:", parseError);
        const text = await res.text();
        console.log("Raw text response:", text);
        const parsed = parseTripPlan(text);
        setGeneratedPlan(parsed);
      }

      setApiResponse(data);

    } catch (err) {
      console.error("Error generating plan:", err);
      alert("Error generating trip plan. Please try again.");
      // Use sample data as fallback
      const parsed = parseTripPlan(sampleTripOutput);
      setGeneratedPlan(parsed);
    }

    setIsGenerating(false);
    setShowPlan(true);
  };

  const formatDateRange = () => {
    const a = new Date(tripDetails.arrivalDate);
    const d = new Date(tripDetails.departureDate);
    if (isNaN(a.getTime()) || isNaN(d.getTime())) return "";
    return `${a.toLocaleDateString()} - ${d.toLocaleDateString()}`;
  };

  const getActivityIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('breakfast') || lowerTitle.includes('brunch') || lowerTitle.includes('dinner')) return Utensils;
    if (lowerTitle.includes('nature') || lowerTitle.includes('walk')) return TreePine;
    if (lowerTitle.includes('cultural') || lowerTitle.includes('dance')) return Music;
    if (lowerTitle.includes('check-in') || lowerTitle.includes('resort') || lowerTitle.includes('relax')) return Home;
    if (lowerTitle.includes('drive') || lowerTitle.includes('departure')) return Plane;
    if (lowerTitle.includes('explore') || lowerTitle.includes('market')) return MapPin;
    return Clock;
  };

  if (showPlan && generatedPlan) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <section className="flex-1 py-12 bg-gradient-to-br from-ocean-50 to-forest-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
                <Sparkles className="h-4 w-4" />
                <span>Your Trip Plan is Ready!</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                {generatedPlan.route.split(' → ')[0]} to
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {generatedPlan.route.split(' → ')[1]}
                </span>
              </h1>
              <p className="text-xl text-gray-600">{generatedPlan.tripDates}</p>
            </div>

            {/* Trip Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-ocean-500 to-forest-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Duration</h3>
                      <p className="text-gray-600">{generatedPlan.duration}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Budget Tier</span>
                      <span className="font-semibold text-gray-900">{generatedPlan.budgetTier}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Group Size</span>
                      <span className="font-semibold text-gray-900">{generatedPlan.groupSize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Interests</h3>
                      <p className="text-gray-600">Your preferences</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedPlan.interests.split(', ').map((interest, index) => (
                      <span key={index} className="bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {interest}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Route</h3>
                      <p className="text-gray-600">Your journey</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Plane className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{generatedPlan.route}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Day by Day Itinerary */}
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Day-by-Day Itinerary</h2>
                <p className="text-gray-600">Your personalized travel schedule</p>
              </div>

              {Object.entries(generatedPlan.days).map(([day, activities], dayIndex) => (
                <Card key={day} className="border-0 bg-white shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6">
                      <h3 className="text-2xl font-bold">{day}</h3>
                    </div>
                    <div className="p-8">
                      <div className="space-y-6">
                        {activities.map((activity, actIndex) => {
                          const IconComponent = getActivityIcon(activity.title);
                          return (
                            <div key={actIndex} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                              <div className="flex-shrink-0">
                                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                                  <IconComponent className="h-6 w-6 text-white" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Clock className="h-4 w-4 text-gray-400" />
                                  <span className="text-sm font-semibold text-blue-600">{activity.time}</span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4">
                <Heart className="mr-2 h-5 w-5" /> Save This Plan
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4">
                <Globe className="mr-2 h-5 w-5" /> Share
              </Button>
              <Button size="lg" variant="outline" onClick={() => setShowPlan(false)} className="px-8 py-4">
                <ChevronLeft className="mr-2 h-5 w-5" /> Create New Plan
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <section className="flex-1 py-12 bg-gradient-to-br from-ocean-50 to-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce">
              <Sparkles className="h-4 w-4" />
              <span>AI Trip Planner</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Plan Your Perfect
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Adventure</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your dream trip and we'll create a personalized itinerary just for you.
            </p>
          </div>

          {/* Call with Daffy Interface */}
          <div className="max-w-lg mx-auto mb-12">
            <Card className="border-0 bg-gradient-to-br from-sunset-50 via-earth-50 to-forest-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-12 h-12 rounded-full flex items-center justify-center animate-pulse">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Need a Human Touch?</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      Talk to a certified travel expert for personalized planning and booking assistance.
                    </p>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                      onClick={() => console.log("Voice agent widget triggered")}
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Travel Expert</span>
                    </Button>
                  </div>
                </div>
                <ElevenLabsWidget />
              </CardContent>
            </Card>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {currentStep > step ? <Check className="h-6 w-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 transition-colors duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-blue-500 to-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <Card className="border-0 bg-white shadow-2xl">
            <CardContent className="p-8 md:p-12">
              {/* Step 1: Basic Details */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Where are you going?</h2>
                    <p className="text-gray-600">Let's start with the basics of your trip</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">From</label>
                      <div className="relative">
                        <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Origin city"
                          value={tripDetails.origin}
                          onChange={(e) => updateField('origin', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">To</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Destination city"
                          value={tripDetails.destination}
                          onChange={(e) => updateField('destination', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Arrival Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={tripDetails.arrivalDate}
                          onChange={(e) => updateField('arrivalDate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">Departure Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="date"
                          value={tripDetails.departureDate}
                          onChange={(e) => updateField('departureDate', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Preferences */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">What's your travel style?</h2>
                    <p className="text-gray-600">Help us personalize your experience</p>
                  </div>

                  {/* Travel Style */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Travel Style</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'adventure', label: 'Adventure', icon: Mountain, desc: 'Thrilling experiences' },
                        { value: 'relaxation', label: 'Relaxation', icon: Waves, desc: 'Peace and tranquility' },
                        { value: 'cultural', label: 'Cultural', icon: Building, desc: 'History and culture' }
                      ].map((style) => (
                        <button
                          key={style.value}
                          onClick={() => updateField('travelStyle', style.value)}
                          className={`p-6 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-lg ${
                            tripDetails.travelStyle === style.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <style.icon className="h-8 w-8 mx-auto mb-3" />
                          <h3 className="font-bold mb-2">{style.label}</h3>
                          <p className="text-sm text-gray-600">{style.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">What interests you? (Select all that apply)</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { value: 'food', label: 'Food & Drink', icon: Utensils },
                        { value: 'photography', label: 'Photography', icon: Camera },
                        { value: 'nature', label: 'Nature', icon: Mountain },
                        { value: 'history', label: 'History', icon: Building },
                        { value: 'beaches', label: 'Beaches', icon: Waves },
                        { value: 'nightlife', label: 'Nightlife', icon: Star },
                        { value: 'shopping', label: 'Shopping', icon: Building },
                        { value: 'wellness', label: 'Wellness', icon: Heart }
                      ].map((interest) => (
                        <button
                          key={interest.value}
                          onClick={() => toggleInterest(interest.value)}
                          className={`p-4 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-md ${
                            tripDetails.interests.includes(interest.value)
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-green-300'
                          }`}
                        >
                          <interest.icon className="h-6 w-6 mx-auto mb-2" />
                          <span className="text-sm font-medium">{interest.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Group Size</label>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => updateField('groupSize', Math.max(1, tripDetails.groupSize - 1))}
                        className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        -
                      </button>
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="text-2xl font-bold text-gray-900">{tripDetails.groupSize}</span>
                        <span className="text-gray-600">{tripDetails.groupSize === 1 ? 'person' : 'people'}</span>
                      </div>
                      <button
                        onClick={() => updateField('groupSize', Math.min(20, tripDetails.groupSize + 1))}
                        className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Experience */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Budget & Experience Level</h2>
                    <p className="text-gray-600">Let's match your budget and luxury preferences</p>
                  </div>

                  {/* Budget Tier */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Budget Tier</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { value: 'budget', label: 'Budget', range: '$50-100/day', desc: 'Great value experiences' },
                        { value: 'mid-range', label: 'Mid-Range', range: '$100-250/day', desc: 'Comfort and quality' },
                        { value: 'luxury', label: 'Luxury', range: '$250+/day', desc: 'Premium experiences' }
                      ].map((tier) => (
                        <button
                          key={tier.value}
                          onClick={() => updateField('budgetTier', tier.value)}
                          className={`p-6 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-lg ${
                            tripDetails.budgetTier === tier.value
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-gray-200 hover:border-orange-300'
                          }`}
                        >
                          <DollarSign className="h-8 w-8 mx-auto mb-3" />
                          <h3 className="font-bold mb-1">{tier.label}</h3>
                          <p className="text-sm text-gray-600 mb-2">{tier.range}</p>
                          <p className="text-xs text-gray-500">{tier.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Luxury Experience */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-4">Luxury Experience Level</label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {[
                        { value: 'basic', label: 'Basic', stars: 1 },
                        { value: 'comfort', label: 'Comfort', stars: 2 },
                        { value: 'premium', label: 'Premium', stars: 3 },
                        { value: 'ultra-luxury', label: 'Ultra Luxury', stars: 4 }
                      ].map((level) => (
                        <button
                          key={level.value}
                          onClick={() => updateField('luxuryExperience', level.value)}
                          className={`p-4 border-2 rounded-xl transition-all duration-300 text-center hover:shadow-md ${
                            tripDetails.luxuryExperience === level.value
                              ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                              : 'border-gray-200 hover:border-yellow-300'
                          }`}
                        >
                          <div className="flex justify-center mb-2">
                            {Array.from({ length: level.stars }, (_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{level.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Special Requests (Optional)</label>
                    <textarea
                      placeholder="Any dietary restrictions, accessibility needs, special occasions, or other preferences..."
                      value={tripDetails.specialRequests}
                      onChange={(e) => updateField('specialRequests', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Step {currentStep} of 3
                  </p>
                </div>

                {currentStep < 3 ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={generatePlan}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 flex items-center space-x-2 px-8"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        <span>Generate Plan</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function TripPlanner() {
  return (
    <ErrorBoundary>
      <TripPlannerMain />
    </ErrorBoundary>
  );
}
