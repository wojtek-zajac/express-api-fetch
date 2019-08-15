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
    getOffers: () => fetch('https://api.smartrecruiters.com/v1/offers', {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    postOffers: () => {
        const body = {
            catalogId: '90210xxx',
            name: 'Oferta Specjalna',
            category: 'STANDARD',
            description: 'Tylko dla wybranych',
            terms: {
                type: 'BEHAVIORAL_ASSESSMENT',
                price: {
                    amount: '0.00',
                    currencyCode: 'USD'
                }
            },
            status: 'ACTIVE',
            availability: {
                expirationDate: '2020-02-26T12:50:02.594+0000',
                industries: [
                    {
                        id: 'health_wellness_fitness'
                    },
                    {
                        id: 'graphic_design'
                    }
                ],
                locations: [
                    {
                        country: 'US',
                        region: 'California',
                        city: 'San Francisco'
                    }
                ],
                companies: [
                    '570ce22ae4b0fb73b024cb5c'
                ],
                specialOffer: '25% OFF'
            }
        }
        return fetch('https://api.smartrecruiters.com/v1/offers', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    getOfferById: offerId => fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}`, {
        method: 'GET',
        headers: getHeaders
    })
        .then(res => res.json()),

    updateOffer: offerId => {
        const body = {
            id: offerId,
            catalogId: '90210xxx',
            name: 'Super Oferta',
            description: 'Tylko dla wybranych',
            terms: {
                type: 'BEHAVIORAL_ASSESSMENT',
                price: {
                    amount: '0.00',
                    currencyCode: 'USD'
                }
            },
            availability: {
                companies: [
                    '570ce22ae4b0fb73b024cb5c'
                ]
            }
        }
        return fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: postHeaders
        })
            .then(res => res.json())
    },

    submitOffer: offerId => fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}/submit`, {
        method: 'POST',
        headers: postHeaders
    })
        .then(res => res.json()),

    withdrawOffer: offerId => fetch(`https://api.smartrecruiters.com/v1/offers/${offerId}/withdraw`, {
        method: 'POST',
        headers: postHeaders
    })
        .then(res => res.json())
}
