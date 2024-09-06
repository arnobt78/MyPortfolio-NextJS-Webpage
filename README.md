
![Screenshot 2024-09-06 at 17 32 06](https://github.com/user-attachments/assets/dbdc686f-af2b-41c5-b479-351a64e7ec62) ![Screenshot 2024-09-06 at 17 33 17](https://github.com/user-attachments/assets/05db7d82-ae54-4bcc-b78f-d39da414fdde) ![Screenshot 2024-09-06 at 17 35 03](https://github.com/user-attachments/assets/3badf931-d321-41c4-9f34-1343006ebc35) ![Screenshot 2024-09-06 at 17 35 20](https://github.com/user-attachments/assets/38c0216d-e666-479b-b59f-0dff35ab1b21) ![Screenshot 2024-09-06 at 17 35 47](https://github.com/user-attachments/assets/b75d7e28-c937-433b-b1f4-8c4143f32a69) ![Screenshot 2024-09-06 at 17 36 00](https://github.com/user-attachments/assets/9c160ac7-c523-4e07-9b69-d9e88e69f44b) ![Screenshot 2024-09-06 at 17 37 59](https://github.com/user-attachments/assets/077a8ac0-3140-480b-856a-bb49185e06b1) ![Screenshot 2024-09-06 at 17 38 40](https://github.com/user-attachments/assets/8543a5af-6cc9-4956-8750-2242cc944971)

## MyPortfolio-NextJS-Webpage

My Portfolio Webpage is a Mordern NextJS-v14 Framer-Motion React TailwindCSS Portfolio Webpage. Every component of this project uses the most recent Shadcn UI, Framer-Motion, Animation, Nodemailer capabilities, and deployed on Vercel.

**Note: To check this webpage live, click here:** https://arnob-mahmud.vercel.app/

## To Create Next.js React App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## To Setup Nodemailer

Run this command from your project folder: `npm install nodemailer`

Sample of my Nodemailer function:

```
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
```
(For more info about Nodemailer, visit: https://nodemailer.com/ and https://nodemailer.com/smtp/ )

## To setup .env File

**Note:** In your .env File EMAIL_PASS is not your gmail password, you have to first enable 2 Step Verification in your gmail account under securty tap, then just write "App Passwords" on search bar, then you will find the option to create your App Passwords for the third-party apps, give a name of the passkey then it will automatically genterate 16-digit App Passwords, save that passkey as text somewhere then click done, then your SMTP Nodemailer is ready to use with that passkey.

(For having a practical idea, watch this: https://www.youtube.com/watch?v=dpq43TGcCT4 )

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


