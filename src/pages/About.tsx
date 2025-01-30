import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We are a dedicated team of professionals committed to providing the best WordPress hosting and consulting services. Our mission is to help businesses grow online with tailored solutions that meet their unique needs.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            With years of experience in the industry, we understand the challenges businesses face in the digital landscape. Our team is here to provide expert guidance and support every step of the way.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you are looking for premium hosting, SEO optimization, or UX consulting, we have the expertise to help you succeed. Join us on this journey to elevate your online presence.
          </p>
        </div>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default About;