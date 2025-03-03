
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SectionHeader } from "@/components/ui/section-header";

const Book = () => {
  useEffect(() => {
    // Clean up any previous script instances
    const cleanup = () => {
      const existingScript = document.getElementById("cal-embed-script");
      if (existingScript) {
        existingScript.remove();
      }
    };

    cleanup();

    // Initialize Cal.com embed after component mount
    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "intro-call", {origin:"https://cal.com"});
      
      Cal.ns["intro-call"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "wpvelocity/intro-call",
      });
      
      Cal.ns["intro-call"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return cleanup;
  }, []);

  return (
    <>
      <SEO 
        title="Book a Call with WPVelocity | WordPress Performance Experts" 
        description="Schedule a consultation with WPVelocity's WordPress performance experts. Get personalized advice on optimizing your website speed, security, and SEO."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-24">
          <SectionHeader>Book a Call</SectionHeader>
          
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
            <p className="text-center text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our WordPress performance experts. We'll discuss your website needs and how we can help optimize your site for speed, security, and better user experience.
            </p>
            
            <div className="w-full h-[700px] bg-white/5 rounded-lg overflow-hidden" id="calendar-container">
              <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline"></div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Book;
