import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export default function PlaceholderPage({ title, description, icon: Icon = Construction }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-gradient-to-br from-ocean-500 to-forest-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">{description}</p>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This page is coming soon! Continue exploring our platform or help us build this feature.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => window.history.back()} variant="outline">
                Go Back
              </Button>
              <Button className="bg-ocean-500 hover:bg-ocean-600">
                Explore Homepage
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
