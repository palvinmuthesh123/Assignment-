var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'spalvinmuthesh@gmail.com',
        pass: 'vdsd qxti hdbf tije'
    }
});

function sendMessages(email, code) {
    var details = {
        from: 'noreply@assignment.com',
        to: email,
        subject: 'OTP for Assignment App',
        html: '',
        text: 'Your OTP is ' + code
    };

    transporter.sendMail(details, function (error, data) {
        if (error)
            console.log(error)
        else
            console.log(data)
    });
}

module.exports = {
    sendMessages
}