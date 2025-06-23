import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
    }

    const { email, subject, body } = req.body;

    if (!email || !subject || !body) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Ramesh" <${process.env.SMTP_USER}>`,
            to: email,
            subject,
            text: body,
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (err) {
        console.error("Email error:", err);
        res.status(500).json({ error: "Failed to send email" });
    }
}