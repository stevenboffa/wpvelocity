import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">About WPVelocity</h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to WPVelocity, where we combine premium WordPress hosting with expert consulting services to help your website succeed.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground mb-6">
                    We're dedicated to providing more than just hosting. Our mission is to help businesses achieve their online goals through optimized hosting, strategic SEO, and conversion-focused design.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                  <p className="text-muted-foreground mb-6">
                    We take a holistic approach to web hosting, considering not just server performance but also how your website can better serve your business objectives.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">Expert Knowledge:</span>
                    <span className="text-muted-foreground">Years of experience in WordPress hosting, SEO, and conversion optimization.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">Personalized Service:</span>
                    <span className="text-muted-foreground">Direct access to expertise and support when you need it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">Integrated Solution:</span>
                    <span className="text-muted-foreground">Hosting, SEO, and CRO services working together for better results.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold">Results-Driven:</span>
                    <span className="text-muted-foreground">Focus on measurable improvements in performance and conversions.</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground mb-6">
                  Let's work together to optimize your WordPress website for success.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/services">
                    <Button variant="outline">View Services</Button>
                  </Link>
                  <Link to="/contact">
                    <Button>Contact Us</Button>
                  </Link>
                </div>
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