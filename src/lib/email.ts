import nodemailer from 'nodemailer';
import { RSVPFormData } from './validation';

// Initialize the transporter
// Note: In production, use environment variables for real email credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fallback for testing (creates a test account)
let testTransporter = transporter;

export async function getTransporter() {
  // If credentials are not set, create a test account
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    const testAccount = await nodemailer.createTestAccount();
    return nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  }
  
  return transporter;
}

export async function sendRSVPConfirmation(
  formData: RSVPFormData,
  recipientEmail: string
) {
  try {
    const transport = await getTransporter();
    
    const htmlContent = `
      <h2>Confirmación de Asistencia</h2>
      <p>Hola,</p>
      <p>Hemos recibido tu confirmación de asistencia a nuestra boda.</p>
      
      <h3>Detalles de tu Confirmación:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${formData.firstName} ${formData.lastName}</li>
        ${formData.dietaryRestrictions ? `<li><strong>Restricciones Dietéticas:</strong> ${formData.dietaryRestrictions}</li>` : ''}
        ${formData.message ? `<li><strong>Mensaje:</strong> ${formData.message}</li>` : ''}
      </ul>
      
      <p>¡Nos vemos el 30 de Mayo en León, Guanajuato!</p>
      
      <p>Con cariño,<br/>Los Novios</p>
    `;
    
    const textContent = `
      Confirmación de Asistencia
      
      Hola,
      
      Hemos recibido tu confirmación de asistencia a nuestra boda.
      
      Detalles de tu Confirmación:
      - Nombre: ${formData.firstName} ${formData.lastName}
      ${formData.dietaryRestrictions ? `- Restricciones Dietéticas: ${formData.dietaryRestrictions}` : ''}
      ${formData.message ? `- Mensaje: ${formData.message}` : ''}
      
      ¡Nos vemos el 30 de Mayo en León, Guanajuato!
      
      Con cariño,
      Los Novios
    `;
    
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER || 'noreply@wedding.local',
      to: recipientEmail,
      subject: '✉️ Confirmación de Asistencia - Nuestra Boda',
      text: textContent,
      html: htmlContent,
    });
    
    console.log('Email sent:', info.messageId);
    
    // Log test email preview URL if using Ethereal
    if (process.env.NODE_ENV !== 'production' && !process.env.EMAIL_USER) {
      console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error al enviar el correo de confirmación');
  }
}

export async function sendRSVPToCouple(formData: RSVPFormData) {
  try {
    const transport = await getTransporter();
    
    const htmlContent = `
      <h2>Nueva Confirmación de Asistencia</h2>
      <p><strong>Nueva respuesta a tu invitación de boda</strong></p>
      
      <h3>Datos del Confirmante:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${formData.firstName} ${formData.lastName}</li>
        ${formData.dietaryRestrictions ? `<li><strong>Restricciones Dietéticas:</strong> ${formData.dietaryRestrictions}</li>` : ''}
        ${formData.message ? `<li><strong>Mensaje:</strong> "${formData.message}"</li>` : ''}
      </ul>
      
      <p><em>Enviado automáticamente desde tu sitio de invitación de boda</em></p>
    `;
    
    const textContent = `
      Nueva Confirmación de Asistencia
      
      Nueva respuesta a tu invitación de boda
      
      Datos del Confirmante:
      - Nombre: ${formData.firstName} ${formData.lastName}
      ${formData.dietaryRestrictions ? `- Restricciones Dietéticas: ${formData.dietaryRestrictions}` : ''}
      ${formData.message ? `- Mensaje: "${formData.message}"` : ''}
      
      Enviado automáticamente desde tu sitio de invitación de boda
    `;
    
    const info = await transport.sendMail({
      from: process.env.EMAIL_USER || 'noreply@wedding.local',
      to: process.env.COUPLE_EMAIL || '',
      subject: `📅 Nueva Confirmación: ${formData.firstName} ${formData.lastName}`,
      text: textContent,
      html: htmlContent,
    });
    
    console.log('Email sent to couple:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email to couple:', error);
    // Don't throw here to avoid failing the user's RSVP submission
    return { success: false, error: 'Error al notificar a los novios' };
  }
}
