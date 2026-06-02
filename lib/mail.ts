"use server"

import nodemailer from 'nodemailer'
import { z } from "zod"
import { contactSchema } from "@/lib/schemas/contact"

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
    },
});

type ContactFormData = z.infer<typeof contactSchema>

export const sendContactEmail = async (data: ContactFormData) => {
    const { name, email, subject, message } = data

    // Create a descriptive subject line
    const emailSubject = `Contact Form: ${subject || "New Message"}`

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USERNAME, // Sender address (authenticated account)
            to: email, // Send to the user who filled the form
            bcc: "rasidinhatta8@gmail.com", // BCC the admin/owner
            subject: emailSubject,
            html: `
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #18181b; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You for Contacting Me</h1>
            </div>
            
            <div style="padding: 32px;">
              <p style="color: #3f3f46; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
                Hi <strong>${data.name}</strong>,
              </p>
              <p style="color: #3f3f46; font-size: 16px; line-height: 1.5; margin-bottom: 24px;">
                I've received your message regarding "<strong>${subject}</strong>". I'll get back to you as soon as possible.
              </p>
              
              <div style="background-color: #f4f4f5; border-left: 4px solid #18181b; padding: 16px; margin-bottom: 24px;">
                <p style="color: #71717a; font-size: 14px; margin: 0 0 8px 0; font-weight: bold;">Your Message:</p>
                <p style="color: #3f3f46; font-size: 14px; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>

              <p style="color: #71717a; font-size: 14px; margin-top: 32px; border-top: 1px solid #e4e4e7; padding-top: 16px;">
                This is an automated confirmation. Please do not reply directly to this email if it was sent from a noreply address.
              </p>
            </div>
            
            <div style="background-color: #f4f4f5; padding: 16px; text-align: center;">
              <p style="color: #a1a1aa; font-size: 12px; margin: 0;">
                &copy; ${new Date().getFullYear()} Rasidin Hatta. All rights reserved.
              </p>
            </div>
          </div>
        </body>
      `
        })
        return { success: true, message: 'Email sent successfully!' }
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, message: 'Failed to send email. Please try again later.' }
    }
}
