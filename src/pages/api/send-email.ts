import type { APIRoute } from "astro";
import sgMail from "@sendgrid/mail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Set your SendGrid API key
    sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);
    
    const msg = {
      to: "codestreethive@gmail.com", // Replace with your email
      from: "codestreethive@gmail.com", // Replace with your SendGrid verified sender
      subject: "New Contact Form Submission",
      text: `
        Name: ${body.firstName} ${body.lastName}
        Email: ${body.email}
        Phone: ${body.phone}
        Details: ${body.details}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Details:</strong> ${body.details}</p>
      `,
    };

    await sgMail.send(msg);
    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};
