const fetch = require('node-fetch');
const X_SMART_TOKEN = '956f647ea948462695551b2d520471fa'
module.exports = {
    getAssessments: () => {
        return fetch('https://api.smartrecruiters.com/v1/assessments/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
            .then(res => res.json())
    },
    getAssessmetntById: (assesmentOrderId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    }
}
