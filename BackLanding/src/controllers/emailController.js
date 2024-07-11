const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (req, res) => {
  const { firstName, lastName, email, phone, comentario, description } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // Enviar a tu propio correo, asegúrate de que esto sea correcto
    subject: 'Nuevo Formulario de Contacto',
    text: `
      Nombre: ${firstName} ${lastName}
      Email: ${email}
      Teléfono: ${phone}
      Comentario: ${comentario}
      Descripción: ${description}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

module.exports = { sendEmail };



