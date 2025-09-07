import { Button } from "./ui/button";
import heroImage from "../assets/hero-workspace.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern workspace with laptop, journal, and cactus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-accent animate-float inline-block">
                Hiruni Kawmadhi
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              A passionate{" "}
              <span className="text-accent font-semibold">
                Information Systems
              </span>{" "}
              undergraduate with expertise in{" "}
              <span className="text-accent font-semibold">Java development</span>{" "}
              and full-stack solutions.
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl">
              Focused on backend development, API integration, and creating
              impactful software solutions. Ready to contribute to innovative
              projects and grow as a software engineer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-accent px-8 py-3 text-lg font-medium"
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;