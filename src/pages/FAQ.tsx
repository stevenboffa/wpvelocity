import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/sections/CTASection";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">What is WordPress hosting?</h2>
              <p className="text-gray-300">
                WordPress hosting is a type of web hosting specifically optimized for WordPress websites. It includes features like one-click installations, automatic updates, and enhanced security.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">How do I migrate my existing website to your hosting?</h2>
              <p className="text-gray-300">
                We offer a free migration service to help you transfer your existing website to our hosting platform. Our team will guide you through the process to ensure a smooth transition.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">What kind of support do you offer?</h2>
              <p className="text-gray-300">
                Our support team is available 24/7 to assist you with any issues or questions you may have. You can reach us via live chat, email, or phone.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Can I upgrade my plan later?</h2>
              <p className="text-gray-300">
                Yes, you can easily upgrade your plan at any time. Simply contact our support team, and they will assist you with the upgrade process.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Do you offer a money-back guarantee?</h2>
              <p className="text-gray-300">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our services, you can request a full refund within the first 30 days of your subscription.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
};

export default FAQ;
