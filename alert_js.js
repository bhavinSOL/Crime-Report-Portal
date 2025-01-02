const nodemailer = require("nodemailer");

async function emailAlert(subject, body, to) {
    try {
        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "bvmsolutions9913@gmail.com",
                pass: "xihb qcnb pzak hsrl" // Replace with your app-specific password
            }
        });

        // Email options
        const mailOptions = {
            from: "bvmsolutions9913@gmail.com",
            to: to,
            subject: subject,
            text: body
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
emailAlert("⚠alert⚠", "details", "djbhavinparmar123@gmail.com");
// Example usage

