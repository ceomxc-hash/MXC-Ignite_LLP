import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, Users, Sparkles, MapPin } from "lucide-react";

const navItems = [
  { label: "The System", href: "#system" },
  { label: "Ecosystem", href: "#categories" },
  { label: "Glow Up Story", href: "/glow-up-story", isPage: true },
  { label: "Leadership Hub", href: "/leadership-hub", isPage: true },
  { label: "Our Journey", href: "#journey" },
  { label: "Feedback", href: "#feedback" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isPage?: boolean) => {
    setIsMobileMenuOpen(false);
    if (isPage) {
      window.location.href = href;
    } else if (location.pathname !== '/') {
      window.location.href = '/' + href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-premium-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="section-padding">
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img 
              src="/mxc-logo.png" 
              alt="MXC Ignite Logo" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.isPage ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-600 hover:text-navy-800 font-medium text-sm transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy-800 transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    if (location.pathname !== '/') {
                      e.preventDefault();
                      handleNavClick(item.href, false);
                    }
                  }}
                  className="text-slate-600 hover:text-navy-800 font-medium text-sm transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-navy-800 transition-all duration-300 group-hover:w-full" />
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="minimal" size="sm" asChild>
              <a href="/auth" className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </a>
            </Button>
            <Button variant="hero" size="default" asChild>
              <a href="/auth">Enter Ecosystem</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-700 hover:text-navy-800 font-medium py-2 transition-colors"
                  onClick={() => handleNavClick(item.href, item.isPage)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="hero-outline" className="w-full" asChild>
                  <a href="/auth">
                    <LogIn size={16} className="mr-2" />
                    Login / Sign Up
                  </a>
                </Button>
                <Button variant="hero" className="w-full" asChild>
                  <a href="/auth">Enter Ecosystem</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
