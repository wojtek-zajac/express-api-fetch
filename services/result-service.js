const fetch = require('node-fetch')
const {X_SMART_TOKEN} = process.env
const getHeaders = {
    'Content-Type': 'application/json',
    'X-SmartToken': X_SMART_TOKEN
}
const postHeaders = {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'X-SmartToken': X_SMART_TOKEN
}

module.exports = {
    getResults: assesmentOrderId => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    postResults: assessmentOrderId => {
        const body = {
            title: 'Results title',
            description: 'Results description',
            passed: true,
            score: '99%',
            result: 'https://www.google.com',
            resultType: 'DOCUMENT'
        }
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assessmentOrderId}/results`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    getResultById: (assesmentOrderId, resultId) => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json())
}
