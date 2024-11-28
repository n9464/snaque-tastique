const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider or SMTP server
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your email password or app password
    },
});

// Route to handle suggestions
app.post('/suggestions', (req, res) => {
    const { name, email, suggestion } = req.body;

    const mailOptions = {
        from: email,
        to: 'ncote@evoyageur.ca', // Replace with your receiving email
        subject: `Nouvelle suggestion de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nSuggestion:\n${suggestion}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erreur lors de l\'envoi de la suggestion.');
        } else {
            console.log('Email envoyé: ' + info.response);
            res.status(200).send('Suggestion envoyée avec succès!');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
