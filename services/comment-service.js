const fetch = require('node-fetch')
const X_SMART_TOKEN = process.env.X_SMART_TOKEN
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
    getComments: assesmentOrderId => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    postComments: assesmentOrderId => {
        const body = {message: 'This is a comment'}
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    getCommentById: (assesmentOrderId, commentId) => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/comments/${commentId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json())
}
