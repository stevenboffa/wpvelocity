
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
    // Log the raw request body for debugging
    const rawBody = await req.text();
    console.log("Raw request body:", rawBody);

    let formData: ContactFormData;
    try {
      formData = JSON.parse(rawBody);
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      return new Response(
        JSON.stringify({
          error: true,
          message: "Invalid JSON data received",
          details: parseError.message,
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    console.log("Parsed form data:", formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(
        JSON.stringify({
          error: true,
          message: "Missing required fields",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    try {
      // Send email to site admin
      const adminEmailResponse = await resend.emails.send({
        from: "WPVelocity <hello@wpvelocity.pro>",
        to: ["hello@wpvelocity.pro"],
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

      console.log("Admin email sent:", adminEmailResponse);

      // Send confirmation email to user
      const userEmailResponse = await resend.emails.send({
        from: "WPVelocity <hello@wpvelocity.pro>",
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

      console.log("User confirmation email sent:", userEmailResponse);

      return new Response(
        JSON.stringify({
          success: true,
          message: "Emails sent successfully",
          adminEmail: adminEmailResponse,
          userEmail: userEmailResponse,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    } catch (emailError: any) {
      console.error("Email sending error:", emailError);
      
      // Check for domain verification error
      if (emailError.message?.includes('domain') || emailError.message?.includes('sender')) {
        return new Response(
          JSON.stringify({
            error: true,
            message: "Email domain not verified. Please verify your domain in Resend dashboard.",
            details: emailError.message,
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }
      
      throw emailError; // Re-throw other email errors
    }
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({
        error: true,
        message: error.message || "Failed to send emails",
        details: error.stack || "No stack trace available",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
};

serve(handler);
