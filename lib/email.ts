import { Resend } from 'resend';

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const toEmail = process.env.CONTACT_EMAIL || 'sapp@sapp.cz';

  const resend = getResend();
  return resend.emails.send({
    from: 'Web SAPP <noreply@sapp.cz>',
    to: toEmail,
    subject: `Nova zprava z webu: ${data.topic}`,
    html: `
      <h2>Nova zprava z kontaktniho formulare</h2>
      <p><strong>Jmeno:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
      <p><strong>Tema:</strong> ${data.topic}</p>
      <p><strong>Zprava:</strong></p>
      <p>${data.message}</p>
    `,
  });
}
