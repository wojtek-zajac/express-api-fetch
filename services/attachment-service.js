const fetch = require('node-fetch')
const fs = require('fs')
const FormData = require('form-data')
const X_SMART_TOKEN = process.env.X_SMART_TOKEN
const getHeaders = {
    'Content-Type': 'application/json',
    'X-SmartToken': X_SMART_TOKEN
}

module.exports = {
    getAttachments: (assesmentOrderId, resultId) => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    postAttachments: (assesmentOrderId, resultId) => {
        const form = new FormData()
        form.append('attachment', fs.createReadStream('/Users/wojciech/Desktop/Example CVs/Example One Page CV.pdf'))
        const headers = Object.assign({
            Accept: 'application/json',
            'X-SmartToken': X_SMART_TOKEN
        }, form.getHeaders())
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments`, {
            method: 'POST',
            body: form,
            headers
        })
            .then(res => res.json())
    },

    getAttachmentById: (assesmentOrderId, resultId, attachmentId) => fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments/${attachmentId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    updateAttachment: (assesmentOrderId, resultId, attachmentId) => {
        const form = new FormData()
        form.append('attachment', fs.createReadStream('/Users/wojciech/Desktop/Example CVs/to tylko nazwa pliku.pdf'))
        const headers = Object.assign({
            Accept: 'application/json',
            'X-SmartToken': X_SMART_TOKEN
        }, form.getHeaders())
        return fetch(`https://api.smartrecruiters.com/v1/assessments/${assesmentOrderId}/results/${resultId}/attachments/${attachmentId}`, {
            method: 'POST',
            body: form,
            headers
        })
            .then(res => res.json())
    }
}
