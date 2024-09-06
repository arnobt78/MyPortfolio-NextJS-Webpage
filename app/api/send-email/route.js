// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullname, email, message } = await req.json();

    let transporter = nodemailer.createTransport({
      
      // for gmail
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },

      // for yahoo!
      // host: "smtp.mail.yahoo.com",
      // port: 465 or 587,
      // secure: false, // use TLS
      // auth: {
      //   user: "arnobt_78@yahoo.com",
      //   pass: "app-password-generated",
      // },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Important! New message from ${fullname}`,
      text: `
        Name: ${fullname}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
  
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email', details: error.message }), { status: 500 });
  }
}


// (firstname, lastname, phone, service)
// Name: ${firstname} ${lastname}
// Phone: ${phone}
// Service: ${service}