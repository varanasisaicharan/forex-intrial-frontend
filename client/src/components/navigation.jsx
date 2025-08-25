import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CreditCard, Menu, X } from "lucide-react";

export default function Navigation({ isLoggedIn, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
                  <CreditCard className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-bold text-gray-900">Forex accounting</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <span className="text-gray-900 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  About Us
                </span>
              </Link>
              <Link href="/services">
                <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="/features">
                <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Features
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                  Contact Us
                </span>
              </Link>

              {isLoggedIn && (
                <>
                  <Link href="/dashboard">
                    <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer">
                      Dashboard
                    </span>
                  </Link>
                  <Link href="/transactions">
                    <span className="text-gray-500 hover:text-teal-600 px-3 py-2 text-sm font-medium cursor-pointer">
                      Transactions
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Link href="/login">
                  <Button 
                    variant="ghost"
                    className="text-gray-500 hover:text-teal-600 px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                  >
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <Button 
                onClick={onLogout} 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/">
                <span className="text-gray-900 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                  About Us
                </span>
              </Link>
              <Link href="/services">
                <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                  Services
                </span>
              </Link>
              <Link href="/features">
                <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                  Features
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                  Contact Us
                </span>
              </Link>

              {isLoggedIn ? (
                <>
                  <Link href="/dashboard">
                    <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                      Dashboard
                    </span>
                  </Link>
                  <Link href="/transactions">
                    <span className="text-gray-500 hover:text-teal-600 block px-3 py-2 text-base font-medium cursor-pointer">
                      Transactions
                    </span>
                  </Link>
                  <Button
                    onClick={onLogout}
                    className="bg-red-500 hover:bg-red-600 text-white w-full cursor-pointer mt-2"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="pt-2 space-y-2">
                  <Link href="/login">
                    <Button 
                      variant="outline" 
                      className="w-full text-gray-700 border-gray-300 hover:bg-gray-50 cursor-pointer"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white w-full cursor-pointer">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}