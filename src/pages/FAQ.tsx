import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ui/particle-background";
import CTASection from "@/components/sections/CTASection";
import SEO from "@/components/SEO";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Frequently Asked Questions | WPVelocity.pro"
        description="Find answers to common questions about WPVelocity, including features, pricing, support, and more. Get the details you need to optimize your WordPress site with ease."
      />
      <Header />
      <main className="flex-grow pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <ParticleBackground />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
            
            <Accordion type="single" collapsible className="mb-12">
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes your hosting service different?</AccordionTrigger>
                <AccordionContent>
                  Unlike traditional hosting providers, we combine premium WordPress hosting with expert SEO, UX, and CRO consulting services. This integrated approach ensures your website not only performs well but also effectively converts visitors into customers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How do you handle website migrations?</AccordionTrigger>
                <AccordionContent>
                  We handle the entire migration process for you, ensuring zero downtime. Our team will transfer your WordPress site, configure all settings, and verify everything is working correctly before going live.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What security measures do you provide?</AccordionTrigger>
                <AccordionContent>
                  Our hosting includes daily backups, SSL certificates, malware scanning, and firewall protection. We also regularly update WordPress core and plugins to maintain security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer staging environments?</AccordionTrigger>
                <AccordionContent>
                  Yes, all hosting plans include staging environments where you can test changes before pushing them to production. This ensures a smooth and risk-free development process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What's included in your SEO consulting?</AccordionTrigger>
                <AccordionContent>
                  Our SEO consulting includes keyword research, technical audits, on-page optimization recommendations, content strategy guidance, and regular performance tracking to improve your search engine rankings.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How do you improve user experience?</AccordionTrigger>
                <AccordionContent>
                  We take a comprehensive approach to UX improvement by analyzing user behavior, conducting usability testing, and implementing data-driven design changes. Our process includes heatmap analysis, user journey optimization, and regular performance monitoring to ensure your website provides the best possible experience for your visitors.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
