import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Code,
  Database,
  Smartphone,
  Palette,
  FileText,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description:
        "Building robust server-side applications using Java, Spring Boot, and modern frameworks with focus on scalability and performance.",
      skills: ["Java", "Spring Boot", "REST APIs", "Microservices"],
    },
    {
      icon: Database,
      title: "API Integration",
      description:
        "Designing and implementing RESTful APIs and integrating third-party services to create seamless data flow between systems.",
      skills: ["REST APIs", "API Design", "Database Integration", "JSON"],
    },
    {
      icon: Smartphone,
      title: "Full-Stack Development",
      description:
        "Creating complete web applications from frontend interfaces to backend systems using modern technologies and best practices.",
      skills: ["React", "Spring Boot", "Database Design", "Web Development"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting intuitive user interfaces and experiences with attention to usability, accessibility, and modern design principles.",
      skills: ["Adobe Photoshop", "Web Design", "User Experience", "Prototyping"],
    },
    {
      icon: FileText,
      title: "Documentation & Analysis",
      description:
        "Creating comprehensive technical documentation, system analysis, and project management using professional tools and methodologies.",
      skills: ["Microsoft Office", "Technical Writing", "System Analysis", "Project Planning"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Working effectively in team environments, contributing to collaborative projects, and communicating technical concepts clearly.",
      skills: ["Teamwork", "Communication", "Problem Solving", "Agile Methodology"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Services & Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What I can offer to help bring your ideas to life through
            technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="shadow-elegant hover:shadow-accent transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="pt-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {service.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-gradient-primary p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm actively seeking opportunities to contribute to innovative
              projects and grow as a software engineer. Let's work together to
              bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                📧 Available for opportunities
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                💼 Open to collaboration
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-lg">
                🚀 Ready to learn & grow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;