const express = require('express');
const serverless = require('serverless-http');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/.netlify/functions/app', router);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "portfolio.kris.pro@gmail.com",
    pass: "kkqg grjr zgqq luxk",
  },
});

app.post('/sendmail', (req, res) => {
  const { email, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'tourekris16@gmail.com',
    subject: 'Nouveau message du formulaire de contact',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Erreur lors de l'envoi de l'email");
    } else {
      console.log('Email envoye: ' + info.response);
      res.json({ message: 'email envoye' });
    }
  });
});

app.listen(3000, () => console.log('Serveur en écoute sur le port 3000'));
