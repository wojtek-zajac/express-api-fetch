const assessmentService = require('./assessment-service')
const mailingService = require('./mailing-service')

module.exports = {
    processAssessmentOrder: (req, res) => {
        let candidate
        assessmentService.getAssessmentById(req.body.assessmentOrderId)
            .then(response => {
                return candidate = response.candidate.email
            })
            .then((candidate) => {
                mailingService.sendEmail(candidate)
            })
            .finally(() => {
                assessmentService.acceptAssessment(req.body.assessmentOrderId, candidate)
                    .then(response => {
                        res.send(response)
                    })
            })
    }
}
