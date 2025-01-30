import { SectionHeader } from "@/components/ui/section-header";

const TrustedBusinesses = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <SectionHeader>Trusted by Growing Businesses</SectionHeader>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
          {/* Replace these with actual client logos */}
          {[1, 2, 3, 4, 5, 6, 8].map((_, index) => (
            <div
              key={index}
              className="w-32 h-16 rounded-lg bg-white/5 flex items-center justify-center group hover:bg-white/10 transition-all duration-300"
            >
              <span className="text-gray-500 group-hover:text-primary transition-colors">
                Client {index + 1}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us with their WordPress hosting and optimization needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBusinesses;