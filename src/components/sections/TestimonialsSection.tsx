import { SectionHeader } from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Director",
    company: "Fashion Boutique",
    content: "The performance improvements we've seen since switching to this WordPress hosting solution have been remarkable. Our site loads faster than ever, and our conversion rates have improved significantly.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Tech Startup",
    content: "Their enterprise-grade infrastructure gives us peace of mind. We've experienced zero downtime and the support team is incredibly responsive. Couldn't be happier with our decision.",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Digital Agency",
    content: "The optimization recommendations and monthly insights have helped us make data-driven decisions. Our client websites are performing better than ever.",
    image: "/placeholder.svg"
  },
  {
    name: "David Wilson",
    role: "Owner",
    company: "Local Business",
    content: "As a small business owner, I needed a reliable hosting solution that wouldn't break the bank. This service provides enterprise-level features at a price point that makes sense for us.",
    image: "/placeholder.svg"
  },
  {
    name: "Lisa Thompson",
    role: "Digital Strategist",
    company: "Media Group",
    content: "The seamless integration of hosting and consulting services has transformed how we approach website optimization. It's like having an expert team on standby.",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <SectionHeader>What Our Clients Say</SectionHeader>
        <p className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
          Don't just take our word for it. Here's what our clients have to say about their experience.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <Card className="neo-blur border-white/10 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-10 w-10">
                        <img
                          alt={testimonial.name}
                          src={testimonial.image}
                          className="aspect-square h-full w-full"
                        />
                      </Avatar>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-xs text-gray-400">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;