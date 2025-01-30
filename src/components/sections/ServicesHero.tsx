import { SectionHeader } from "@/components/ui/section-header";

const ServicesHero = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-black opacity-90" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-primary-light bg-clip-text text-transparent">
            Enterprise WordPress Solutions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Experience WordPress hosting with a difference. We combine technical excellence with strategic consulting to help your business grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;