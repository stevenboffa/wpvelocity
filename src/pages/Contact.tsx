import { Mail, MapPin } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  contactPreference: z.enum(["email", "phone"], {
    required_error: "Please select a contact preference",
  }),
  phone: z.string().optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      contactPreference: "email",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log('Sending form data:', values); // Debug log

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        method: 'POST',
        body: values, // supabase.functions.invoke will handle JSON stringification
      });

      if (error) {
        console.error('Edge function error:', error);
        throw error;
      }

      console.log('Response from edge function:', data);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | WPVelocity.pro"
        description="Get in touch with WPVelocity for expert WordPress support, custom solutions, and optimization. Let’s build, grow, and elevate your website together!"
      />
      <Header />
      <main className="flex-grow pb-24">
        <section className="py-20 pt-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  backgroundColor: i % 2 === 0 ? 'rgba(155, 135, 245, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${Math.random() * 6 + 2}s`,
                  filter: `blur(${Math.random() * 2}px)`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 relative">
            <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
              <SectionHeader>Get in Touch</SectionHeader>
              <p className="text-lg text-gray-300 leading-relaxed">
                We typically respond within 24 hours. Your success is our priority.
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </section>

        <div className="container mx-auto px-6 -mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass-morphism p-8 rounded-lg space-y-8 animate-fade-in-up">
                  <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">hello@wpvelocity.pro</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Toronto, Canada</p>
                    </div>
                  </div>
                </div>

                {/* Response Time Expectations */}
                <div className="glass-morphism p-8 rounded-lg animate-fade-in-up">
                  <h3 className="font-semibold mb-4">Our Commitment to You</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">Initial response within 24 hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">Dedicated support team for your inquiries</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">Priority handling for urgent matters</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p className="text-muted-foreground">Follow-up communications to ensure satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="neo-blur p-8 rounded-lg animate-fade-in-up">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contactPreference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select contact preference" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">Email</SelectItem>
                              <SelectItem value="phone">Phone</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("contactPreference") === "phone" && (
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your needs..."
                              className="min-h-[120px] resize-none"
                              maxLength={500}
                              {...field}
                            />
                          </FormControl>
                          <div className="flex justify-end">
                            <span className="text-sm text-muted-foreground">
                              {field.value.length}/500 characters
                            </span>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-24 glass-morphism p-8 rounded-lg animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">What are your typical response times?</h3>
                    <p className="text-muted-foreground">We aim to respond to all inquiries within 24 hours during business days.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer emergency support?</h3>
                    <p className="text-muted-foreground">Yes, premium support plans include 24/7 emergency assistance.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
                    <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Can I schedule a consultation?</h3>
                    <p className="text-muted-foreground">Yes, you can schedule a free 30-minute consultation through our calendar system.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
