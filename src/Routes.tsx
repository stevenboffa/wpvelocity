import { Routes as RouterRoutes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Purchase from "@/pages/Purchase";
import NotFound from "@/pages/NotFound";

const Routes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <RouterRoutes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </main>
      <Footer />
    </div>
  );
};

export default Routes;