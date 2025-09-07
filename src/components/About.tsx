import { Card, CardContent } from "./ui/card";

const About = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "API Development", level: 85 },
    { name: "Ballerina", level: 75 },
    { name: "Microsoft Office", level: 95 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Full-Stack Development", level: 80 },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning ideas into working software that makes a
            real impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm an undergraduate student at{" "}
                <span className="text-accent font-semibold">
                  Sabaragamuwa University of Sri Lanka
                </span>
                , pursuing a BSc Hons. in Information Systems. My passion lies
                in backend development, API integration, and full-stack
                application design.
              </p>
              <p>
                Though I'm at the beginning of my professional journey, I'm
                fluent in Java and continuously improving my skills in modern
                frameworks and cloud-based solutions. I believe in the power of
                problem-solving, teamwork, and creating software that makes a
                difference.
              </p>
              <p>
                Currently seeking opportunities to contribute to innovative
                projects, gain industry exposure, and grow as a software
                engineer while making meaningful contributions to technology.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Goals */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-elegant animate-fade-in">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Education
              </h4>
              <div className="space-y-2">
                <p className="font-medium">
                  BSc Hons. Information Systems
                </p>
                <p className="text-muted-foreground">
                  Sabaragamuwa University of Sri Lanka
                </p>
                <p className="text-sm text-muted-foreground">
                  Current Undergraduate
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant animate-fade-in">
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">
                Career Goals
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Backend Development Excellence</li>
                <li>• Full-Stack Application Design</li>
                <li>• Cloud-Based Solutions</li>
                <li>• Innovative Software Development</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;