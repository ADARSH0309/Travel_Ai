import { Link } from "react-router-dom";
import { MapPin, Facebook, Twitter, Instagram, Mail, Phone, MapPinIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth-800 text-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-ocean-500 p-2 rounded-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Wanderlust</span>
            </div>
            <p className="text-earth-200 text-sm leading-relaxed">
              Your trusted companion for unforgettable travel experiences. We help you discover, plan, and connect with fellow travelers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-300 hover:text-ocean-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-300 hover:text-ocean-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-300 hover:text-ocean-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/plan-trip" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link to="/travel-buddy" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Find Travel Buddy
                </Link>
              </li>
              <li>
                <Link to="/galleries" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Photo Galleries
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Reviews & Ratings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-earth-200 hover:text-ocean-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-ocean-400" />
                <span className="text-earth-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-ocean-400" />
                <span className="text-earth-200 text-sm">hello@wanderlust.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-4 w-4 text-ocean-400 mt-0.5" />
                <span className="text-earth-200 text-sm">
                  123 Adventure Street<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-700 mt-8 pt-8 text-center">
          <p className="text-earth-300 text-sm">
            © 2024 Wanderlust. All rights reserved. Made with ❤️ for travelers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
