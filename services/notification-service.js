const assessmentService = require('./assessment-service')
const mailingService = require('./mailing-service')

module.exports = {
    processAssessmentOrder: (req, res) => {
        let assessmentOrder
        assessmentService.getAssessmentById(req.body.assessmentOrderId)
            .then(response => {
                return assessmentOrder = response
            })
            .finally(() => {
                mailingService.sendEmail(assessmentOrder)
                assessmentService.acceptAssessment(req.body.assessmentOrderId, assessmentOrder)
                    .then(response => {
                        res.send(response)
                    })
            })
    }
}
