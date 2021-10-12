const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:'smtp.googlemail.com',
    secure: 'true',
    port: 465,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
    tls:{
        rejectUnauthorized: false
    }
});

module.exports = {
    send: (options) => {
        return transporter.sendMail(options);
    },
};