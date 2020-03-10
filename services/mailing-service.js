const nodemailer = require('nodemailer')
const {EMAIL_SENDER_NAME} = process.env
const {EMAIL_SENDER_PASS} = process.env

module.exports.sendEmail = (candidate) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_SENDER_NAME,
            pass: EMAIL_SENDER_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: '"SMART ASSESSMENTS 👻 👻 👻 👻 👻" <janosik.sr@gmail.com>',
        to: candidate,
        subject: 'Process env',
        html: `
            <h1>Start the assessment: </h1>
            <div>
                <a href="http://www.google.com" target="_blank">CLICK</a>
            </div>`
    }

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })
}
