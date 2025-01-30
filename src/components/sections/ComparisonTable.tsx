import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComparisonTable = () => {
  const features = [
    {
      category: "Hosting & Infrastructure",
      items: [
        {
          name: "Premium WordPress hosting on WP Engine",
          wpVelocity: true,
          wpVelocityPro: true,
        },
        {
          name: "Global CDN distribution",
          wpVelocity: true,
          wpVelocityPro: true,
        },
        {
          name: "Daily backups",
          wpVelocity: true,
          wpVelocityPro: true,
        },
        {
          name: "Advanced security monitoring",
          wpVelocity: true,
          wpVelocityPro: true,
        },
      ],
    },
    {
      category: "Expert Consulting",
      items: [
        {
          name: "Monthly consulting with SEO expert",
          wpVelocity: "1 hour",
          wpVelocityPro: "5 hours",
          highlight: true,
        },
        {
          name: "Website performance optimization",
          wpVelocity: "Basic",
          wpVelocityPro: "Advanced",
        },
        {
          name: "SEO strategy & implementation",
          wpVelocity: "Basic",
          wpVelocityPro: "Advanced",
        },
        {
          name: "UX optimization consulting",
          wpVelocity: false,
          wpVelocityPro: true,
        },
      ],
    },
    {
      category: "Growth & Analytics",
      items: [
        {
          name: "Monthly SEO & UX analysis report",
          wpVelocity: "Basic",
          wpVelocityPro: "Comprehensive",
        },
        {
          name: "Conversion rate optimization",
          wpVelocity: false,
          wpVelocityPro: true,
        },
        {
          name: "Competitor analysis & tracking",
          wpVelocity: false,
          wpVelocityPro: true,
        },
        {
          name: "Custom development & integrations",
          wpVelocity: false,
          wpVelocityPro: true,
        },
      ],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container px-4">
        <SectionHeader>Compare Our Solutions</SectionHeader>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Choose the plan that best fits your needs. Both plans include expert consulting 
          from a seasoned professional with 20+ years of experience in WordPress, SEO, and UX optimization.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 min-w-[200px]">Features</th>
                <th className="p-4 text-center">
                  <div className="mb-2">WPVelocity</div>
                  <div className="text-2xl font-bold text-primary">$59/mo</div>
                </th>
                <th className="p-4 text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                  <div className="mb-2">WPVelocity Pro</div>
                  <div className="text-2xl font-bold text-primary">$249/mo</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr className="border-b border-white/10 bg-white/5">
                    <td colSpan={3} className="p-4 font-semibold">
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-b border-white/10 hover:bg-white/5"
                    >
                      <td className="p-4">
                        <div className={feature.highlight ? "text-primary font-medium" : ""}>
                          {feature.name}
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.wpVelocity === "boolean" ? (
                          feature.wpVelocity ? (
                            <Check className="mx-auto text-green-500" />
                          ) : (
                            <X className="mx-auto text-gray-500" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.wpVelocity}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof feature.wpVelocityPro === "boolean" ? (
                          feature.wpVelocityPro ? (
                            <Check className="mx-auto text-green-500" />
                          ) : (
                            <X className="mx-auto text-gray-500" />
                          )
                        ) : (
                          <span className="text-gray-300">{feature.wpVelocityPro}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center gap-8 mt-12">
          <Link to="/contact">
            <Button size="lg" variant="outline">
              Get WPVelocity
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Get WPVelocity Pro
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;