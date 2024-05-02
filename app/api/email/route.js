import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: "web.support@infomap.sk",
    to: "podpora@infomap.sk",
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return new Response(JSON.stringify({ message: 'Email sent' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err }), { status: 500 });
  }
}
