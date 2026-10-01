import nodemailer from 'nodemailer';

export function createTransporter() {
  const port = Number(process.env.EMAIL_PORT) || 465;

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
    port,
    secure: port === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}
