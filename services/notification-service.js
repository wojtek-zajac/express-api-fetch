const assessmentService = require('./assessment-service')
const mailingService = require('./mailing-service')

module.exports = {
    processAssessmentOrder: (req, res) => {
        let candidate = 'n'
        assessmentService.getAssessmentById(req.body.assessmentOrderId)
            .then(response => {
                candidate = response.candidate.email
            })
        mailingService.sendEmail(candidate)
        assessmentService.acceptAssessment(req.body.assessmentOrderId, candidate)
            .then(response => {
                res.send(response)
            })
    }
}
