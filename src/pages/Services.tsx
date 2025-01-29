import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">Our Services</h1>
          <p className="text-gray-600">Content coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;