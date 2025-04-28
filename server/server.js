import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { email, phone, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'kapital.plus86@bk.ru',
      pass: 'qfuv7ydxerJirzjHYznN',
    },
  });

  const mailOptions = {
    from: 'kapital.plus86@bk.ru',
    to: 'kapital.plus86@bk.ru',
    replyTo: email,
    subject: 'Новая заявка с сайта',
    html: `
      <h1>Новая заявка</h1>
      <p><strong>Email клиента:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Сообщение успешно отправлено!');
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    res.status(500).send('Ошибка при отправке сообщения');
  }
});

app.listen(port, () => {
  console.log(`✅ Сервер запущен на http://localhost:${port}`);
});