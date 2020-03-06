const assessmentService = require('./assessment-service')

module.exports = {
    processAssessmentOrder: (req, res) => {
        assessmentService.acceptAssessment(req.body.assessmentOrderId)
            .then(response => {
                res.send(response)
            })
    }
}
