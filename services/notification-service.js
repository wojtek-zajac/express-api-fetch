const assessmentService = require('./assessment-service')
const mailingService = require('./mailing-service')

module.exports = {
    processAssessmentOrder: (req, res) => {
        let candidate = ''
        assessmentService.getAssessmentById(req.body.assessmentOrderId)
            .then(response => {
                candidate = response.candidate.email
            })
            .then(() => {
                mailingService.sendEmail(candidate)
            })
            .finally(() => {
                assessmentService.acceptAssessment(req.body.assessmentOrderId)
                    .then(response => {
                        res.send(response)
                    })
            })
    }
}
