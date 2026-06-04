"use server"

import nodemailer from 'nodemailer'
import { z } from "zod"
import { contactSchema } from "@/lib/schemas/contact"

type ContactFormData = z.infer<typeof contactSchema>

const escapeHtml = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")

export const sendContactEmail = async (data: ContactFormData) => {
    const parsed = contactSchema.safeParse(data)

    if (!parsed.success) {
        return { success: false, message: "Please check the form and try again." }
    }

    const { name, email, subject, message } = parsed.data
    const gmailUser = process.env.GMAIL_USERNAME
    const gmailPass = process.env.GMAIL_PASSWORD

    if (!gmailUser || !gmailPass) {
        return { success: false, message: "Email service is not configured." }
    }

    const emailSubject = `Contact Form: ${subject || "New Message"}`
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject || "New Message")
    const safeMessage = escapeHtml(message)
    const ownerEmail = "rasidinhatta8@gmail.com"
    const previewText = `Thanks ${name}, your portfolio message was received.`

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: gmailUser,
            pass: gmailPass,
        },
    })

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" <${gmailUser}>`,
            to: email,
            cc: ownerEmail,
            replyTo: `"Rasidin Hatta" <${ownerEmail}>`,
            subject: emailSubject,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                `Subject: ${subject || "New Message"}`,
                "",
                message,
            ].join("\n"),
            html: `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>${safeSubject}</title>
          </head>
          <body style="margin:0;background:#f3f4f6;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#111827;">
            <div style="display:none;max-height:0;overflow:hidden;color:transparent;opacity:0;">
              ${escapeHtml(previewText)}
            </div>

            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:680px;border-collapse:collapse;background:#ffffff;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;box-shadow:0 18px 48px rgba(15,23,42,.10);">
                    <tr>
                      <td style="padding:28px 30px;background:#ffffff;border-bottom:1px solid #e5e7eb;">
                        <p style="margin:0 0 10px 0;color:#047857;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;">
                          Portfolio Contact
                        </p>
                        <h1 style="margin:0;color:#111827;font-size:28px;line-height:1.2;font-weight:800;">
                          Thanks for reaching out, ${safeName}
                        </h1>
                        <p style="margin:12px 0 0 0;color:#4b5563;font-size:15px;line-height:1.6;">
                          I received your message and will get back to you as soon as possible.
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:28px 30px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:22px;">
                          <tr>
                            <td style="padding:16px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;">
                              <p style="margin:0 0 6px 0;color:#6b7280;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
                                Sender
                              </p>
                              <p style="margin:0;color:#111827;font-size:18px;font-weight:700;">
                                ${safeName}
                              </p>
                              <p style="margin:8px 0 0 0;color:#047857;font-size:14px;">
                                <a href="mailto:${safeEmail}" style="color:#047857;text-decoration:none;">${safeEmail}</a>
                              </p>
                            </td>
                          </tr>
                        </table>

                        <div style="margin-bottom:22px;padding:16px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;">
                          <p style="margin:0 0 8px 0;color:#6b7280;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
                            Subject
                          </p>
                          <p style="margin:0;color:#111827;font-size:16px;font-weight:700;line-height:1.5;">
                            ${safeSubject}
                          </p>
                        </div>

                        <div style="padding:18px 20px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;border-left:5px solid #059669;">
                          <p style="margin:0 0 10px 0;color:#475569;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
                            Message
                          </p>
                          <p style="margin:0;color:#111827;font-size:15px;line-height:1.8;white-space:pre-wrap;">${safeMessage}</p>
                        </div>

                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 30px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                        <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.6;">
                          Sent by the Rasidin Hatta portfolio contact form using Gmail SMTP. A copy was sent to Rasidin for follow-up.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
        })
        return { success: true, message: 'Email sent successfully!' }
    } catch (error) {
        console.error("Failed to send email:", error);
        return { success: false, message: 'Failed to send email. Please try again later.' }
    }
}
