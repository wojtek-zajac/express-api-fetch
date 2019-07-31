const utils = require('./utils.js');
const express = require('express');
const app = express();
const port = 8051;

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

app.listen(port, () => console.log(`The express-api-fetch app listening on port ${port}!`));
