require('dotenv').config();
const sgMail = require('@sendgrid/mail');

const { SG_API_KEY ,FROM_EMAIL ,TO_EMAIL } = process.env;
sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res) {
  const {email, subject, message} = req.body;
  
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: 'Message from my website',
    html: `<p>Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>`,
  }

  await sgMail.send(msg);
  res.json({success: true})
}