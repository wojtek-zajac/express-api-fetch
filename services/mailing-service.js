const nodemailer = require('nodemailer')

module.exports = {
    sendEmail: (assessmentOrder) => {
        let testAccount = nodemailer.createTestAccount()
        const transporter = nodemailer.createTransport({
            service: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        })

        const mailOptions = {
            from: `"SMART ASSESSMENTS 👻 👻 👻 👻 👻" <${testAccount.user}>`,
            to: assessmentOrder.candidate.email,
            subject: `Start the ${assessmentOrder.offer.name}!`,
            html: `
                <h1>Hi ${assessmentOrder.candidate.firstName}!</h1>
                <h2>Click <a href="https://smart-assessments.herokuapp.com/quick-test/${assessmentOrder.id}" target="_blank">here</a> to start the assessment.</h2>`
        }

        transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        })
    }
}
