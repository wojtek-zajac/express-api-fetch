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
    getAssessments: () => fetch('https://api.smartrecruiters.com/v1/assessments?status=COMPLETED&sortDir=asc', {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    getAssessmentById: assesmentOrderId => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    acceptAssessment: assesmentOrderId => {
        const body = {message: 'This is an accept message'}
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/accept`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    completeAssessment: assesmentOrderId => {
        const body = {message: 'This is a complete message'}
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/complete`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    rejectAssessment: assesmentOrderId => {
        const body = {message: 'This is a complete message'}
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/reject`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    }
}
