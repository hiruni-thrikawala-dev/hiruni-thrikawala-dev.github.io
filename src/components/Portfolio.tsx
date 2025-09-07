import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Coffee Shop Website",
      description:
        "A modern, responsive website for a coffee shop featuring an intuitive user interface, menu display, and contact information. Built with clean design principles and smooth user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Frontend Development",
      features: [
        "Responsive Design",
        "Interactive Menu",
        "Contact Forms",
        "Modern UI/UX",
      ],
    },
    {
      title: "Library Management System",
      description:
        "A comprehensive desktop application for managing library operations including book inventory, member management, borrowing/returning processes, and reporting features.",
      technologies: ["Java", "Swing", "Database"],
      category: "Desktop Application",
      features: [
        "Book Management",
        "Member Registration",
        "Borrowing System",
        "Report Generation",
      ],
    },
    {
      title: "Point of Sale Application",
      description:
        "A full-stack POS system for retail businesses featuring inventory management, sales tracking, customer management, and real-time reporting with a modern web interface.",
      technologies: ["Spring Boot", "React", "REST API", "Database"],
      category: "Full-Stack Development",
      features: [
        "Inventory Management",
        "Sales Processing",
        "Customer Management",
        "Real-time Reports",
      ],
    },
    {
      title: "RoomSync - Roommate Organizer",
      description:
        "An innovative application designed to help roommates organize shared responsibilities, expenses, and schedules. Features task management, expense splitting, and communication tools.",
      technologies: ["Ballerina", "API Integration", "Database"],
      category: "Backend Development",
      features: [
        "Task Management",
        "Expense Tracking",
        "Schedule Coordination",
        "Notification System",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            My Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects demonstrating my skills in full-stack
            development, backend systems, and software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="shadow-elegant hover:shadow-accent transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
                <CardTitle className="text-xl text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-accent text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue my learning journey
          </p>
          <Badge className="bg-accent text-accent-foreground">
            Open to Collaboration
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;