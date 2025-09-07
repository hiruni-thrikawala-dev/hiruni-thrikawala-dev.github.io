import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-xl gradient-primary bg-clip-text text-transparent">
          Hiruni Kawmadhi
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Portfolio", "Services", "Contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            )
          )}
        </div>

        <Button
          variant="outline"
          onClick={() => scrollToSection("contact")}
          className="hidden md:block border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Get In Touch
        </Button>
      </nav>
    </header>
  );
};

export default Header;