const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
});

function sendEmail( subject, text ) {
    const mailOptions = {
        from: process.env.NODEMAILER_USER,
        to: process.env.NODEMAILER_TO,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendEmail
}