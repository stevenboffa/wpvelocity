
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  contactPreference: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Send email to site admin
    const adminEmailResponse = await resend.emails.send({
      from: "WPVelocity <onboarding@resend.dev>",
      to: ["hello@wpvelocity.pro"], // Replace with your admin email
      subject: `New Contact Form Submission: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Contact Preference:</strong> ${formData.contactPreference}</p>
        ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "WPVelocity <onboarding@resend.dev>",
      to: [formData.email],
      subject: "We've received your message!",
      html: `
        <h2>Thank you for contacting WPVelocity!</h2>
        <p>Dear ${formData.name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <br>
        <p>Best regards,</p>
        <p>The WPVelocity Team</p>
      `,
    });

    console.log("Emails sent successfully:", {
      adminEmail: adminEmailResponse,
      userEmail: userEmailResponse,
    });

    return new Response(
      JSON.stringify({ 
        message: "Emails sent successfully",
        adminEmail: adminEmailResponse,
        userEmail: userEmailResponse
      }),
      {
        status: 200,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: true,
        message: error.message || "Failed to send emails"
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        },
      }
    );
  }
};

serve(handler);
