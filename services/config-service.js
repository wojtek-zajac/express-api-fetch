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
    getConfigs: () => fetch('https://api.smartrecruiters.com/v1/configs', {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    postConfig: () => {
        const body = {
            id: 'assessmentNotificationUrl',
            value: 'http://api.partnercompany.com/notifications'
        }
        return fetch('https://api.smartrecruiters.com/v1/configs', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    getConfigById: configId => fetch(`https://api.smartrecruiters.com/v1/configs/${configId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    updateConfig: () => {
        const body = {
            id: 'assessmentNotificationUrl',
            value: 'http://api.partnercompany.com/notificationsNEW'
        }
        return fetch('https://api.smartrecruiters.com/v1/configs', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    }
}
