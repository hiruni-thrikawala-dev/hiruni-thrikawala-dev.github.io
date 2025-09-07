import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on
            projects, or simply connect with fellow developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8">
                I'm currently seeking opportunities to contribute to innovative
                projects and grow as a software engineer. Feel free to reach out
                if you'd like to discuss potential collaborations or just want
                to connect!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">
                    kawmadhithrikawala@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+94 76 928 7046</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-foreground mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant animate-slide-up">
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:opacity-90 shadow-accent"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-secondary/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm passionate about learning, growing, and contributing to
              meaningful projects. Whether you have an opportunity, a project
              idea, or just want to connect, I'd love to hear from you!
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground shadow-accent"
              onClick={() =>
                (window.location.href = "mailto:kawmadhithrikawala@gmail.com")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;