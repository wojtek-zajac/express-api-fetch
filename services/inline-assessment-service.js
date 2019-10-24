const fetch = require('node-fetch')
const cache = require('memory-cache')
const {X_SMART_TOKEN} = process.env
const postHeaders = {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'X-SmartToken': X_SMART_TOKEN
}
const RESULT_SUBMIT_TIMEOUT = 5 * 1000

module.exports = {
    orderAssessment: (req, res) => {
        const {applicationOperationId} = req.body
        if (!applicationOperationId) {
            res.sendStatus(400)
            return
        }
        cache.put(applicationOperationId, req.body)
        console.log('Assessment order received: ', JSON.stringify(req.body))
        const {host} = req.headers
        res.send({
            inlineAssessmentUrl: `http://${host}/inline-assessment/${applicationOperationId}`
        })
    },
    submitResult: (req, res) => {
        const assessmentResult = createAssessmentResult(req.body, req.headers)
        const order = cache.get(req.params.applicationOperationId)
        if (!order) {
            res.sendStatus(400)
            return
        }
        console.log('Submitting result for order: ', JSON.stringify(order))
        setTimeout(() => sendResult(assessmentResult, order.assessmentResultUrl), RESULT_SUBMIT_TIMEOUT)
        cache.del(req.params.applicationOperationId)
        res.send({
            callbackUrl: order.completedAssessmentCallbackUrl
        })
    }
}

function createAssessmentResult(answers, headers) {
    let score = 0
    score += answers.answer_1 === '1'
    score += answers.answer_2 === '2'
    score += answers.answer_3 === '3'
    const passed = score >= 2;
    const {host} = headers
    return {
        title: 'Quick HTML test result',
        description: 'Quick HTML test result',
        passed: passed,
        score: `${score}/3`,
        resultType: 'URL',
        result: `http://${host}/inline-assessment-result?passed=${passed}`
    }
}

function sendResult(assessmentResult, serviceUrl) {
    return fetch(serviceUrl, {
        method: 'POST',
        body: JSON.stringify(assessmentResult),
        headers: postHeaders
    }).then(() => console.log(`Result submitted successfully: ${serviceUrl}`),
        () => console.log(`Error occurred while submitting result: ${serviceUrl}`))
}
