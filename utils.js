const fetch = require('node-fetch');
const X_SMART_TOKEN = '956f647ea948462695551b2d520471fa'
module.exports = {
    getAssessments: () => {
        return fetch('https://api.smartrecruiters.com/v1/assessments?status=NEW&sortDir=asc', {
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
                'Content-Type': 'application/json;charset=UTF-8',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    acceptAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is an accept message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/accept`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    completeAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is a complete message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/complete`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    rejectAssessment: (assesmentOrderId) => {
        const body = { 'message': 'This is a complete message' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/reject`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getComments: (assesmentOrderId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    postComments: (assesmentOrderId) => {
        const body = { 'message': 'This is a comment' };
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Accept': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    },
    getCommentById: (assesmentOrderId, commentId) => {
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments/${commentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-SmartToken': X_SMART_TOKEN
            }
        })
        .then(res => res.json())
    }
}
