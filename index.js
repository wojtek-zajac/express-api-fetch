const utils = require('./utils.js');
const express = require('express');
const app = express();
const port = 8051;

// ASSESSMENTS

app.get('/assessments', (req, res) => {
    utils.getAssessments()
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId', (req, res) => {
    utils.getAssessmetntById(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/accept', (req, res) => {
    utils.acceptAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/complete', (req, res) => {
    utils.completeAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/reject', (req, res) => {
    utils.rejectAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

// COMMENTS

app.get('/assessments/:assessmentOrderId/comments', (req, res) => {
    utils.getComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/comments', (req, res) => {
    utils.postComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/comments/:commentId', (req, res) => {
    utils.getCommentById(req.params.assessmentOrderId, req.params.commentId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

// OFFERS

app.get('/offers', (req, res) => {
    utils.getOffers()
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers', (req, res) => {
    utils.postOffers()
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/offers/:offerId', (req, res) => {
    utils.getOfferById(req.params.offerId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId', (req, res) => {
    utils.updateOffer(req.params.offerId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/submit', (req, res) => {
    utils.submitOffer(req.params.offerId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/withdraw', (req, res) => {
    utils.withdrawOffer(req.params.offerId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

// RESULTS

app.get('/assessments/:assessmentOrderId/results', (req, res) => {
    utils.getResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results', (req, res) => {
    utils.postResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/results/:resultId', (req, res) => {
    utils.getResultById(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({ data })
        })
        .catch(err => {
            res.send(err)
        })
})

app.listen(port, () => console.log(`The express-api-fetch app listening on port ${port}!`));
