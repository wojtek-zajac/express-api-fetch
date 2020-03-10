const nodemailer = require('nodemailer')
const {EMAIL_SENDER_NAME} = process.env
const {EMAIL_SENDER_PASS} = process.env

module.exports = {
    sendEmail: (assessmentOrder) => {
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
            to: assessmentOrder.candidate.email,
            subject: `Start the test: ${assessmentOrder.offer.name}!`,
            html: `
            <h1>Hi ${assessmentOrder.candidate.firstName}!</h1>
            <h2>Start the assessment: </h2>
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
}
