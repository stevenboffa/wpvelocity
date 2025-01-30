import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Rocket, Shield, Zap, BarChart, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-16 animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-6 text-gradient">About WPVelocity</h1>
                  <p className="text-xl text-muted-foreground mb-6">
                    Empowering businesses with lightning-fast WordPress hosting and expert consulting services to maximize their online potential.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden glass-morphism">
                    <img 
                      src="/lovable-uploads/5931b52c-c840-46e6-bde5-8dca2e6f9c2c.png"
                      alt="Steven - Founder of WPVelocity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Section */}
            <div className="mb-16 animate-fade-in-up delay-100">
              <Card className="neo-blur">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-4">Meet the Founder</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6">
                    With over 20 years of experience in SEO, UX, CRO, and Web Design, Steven brings a wealth of knowledge and expertise to every project. His passion for optimizing web performance and delivering exceptional user experiences has helped countless businesses achieve their online goals.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-8 text-gradient">Why Choose WPVelocity?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="gradient-border neo-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Rocket className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold mb-2">Expert Knowledge</h3>
                        <p className="text-muted-foreground">Years of experience in WordPress hosting, SEO, and conversion optimization.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-border neo-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold mb-2">Personalized Service</h3>
                        <p className="text-muted-foreground">Direct access to expertise and support when you need it.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-border neo-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Shield className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold mb-2">Integrated Solution</h3>
                        <p className="text-muted-foreground">Hosting, SEO, and CRO services working together for better results.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-border neo-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <BarChart className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="font-semibold mb-2">Results-Driven</h3>
                        <p className="text-muted-foreground">Focus on measurable improvements in performance and conversions.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center animate-fade-in-up delay-200">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Let's work together to optimize your WordPress website for success.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/services">
                  <Button variant="outline" className="glass-morphism">View Services</Button>
                </Link>
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary-dark">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;