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

app.listen(port, () => console.log(`The express-api-fetch app listening on port ${port}!`));
