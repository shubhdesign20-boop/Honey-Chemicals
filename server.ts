import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Configure Nodemailer
    // NOTE: In production, use environment variables for these settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        throw new Error("SMTP credentials not configured. Please set SMTP_USER and SMTP_PASS in environment variables.");
      }

      await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || "honeychemicals2025@gmail.com",
        replyTo: email,
        subject: `New Inquiry from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #b91c1c;">New Inquiry from Honey Chemicals Website</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      });

      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ 
        error: "Failed to send email. Please ensure SMTP credentials are correct.",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
