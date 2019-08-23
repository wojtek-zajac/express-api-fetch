const assessmentService = require('./services/assessment-service')
const commentService = require('./services/comment-service')
const offerService = require('./services/offer-service')
const resultService = require('./services/result-service')
const attachmentService = require('./services/attachment-service')
const configService = require('./services/config-service')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8051

app.use(express.static(`${__dirname}/`))

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'SmartRecruiters Assessments App'})
})

// ASSESSMENTS
app.get('/assessments', (req, res) => {
    assessmentService.getAssessments()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId', (req, res) => {
    assessmentService.getAssessmentById(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/accept', (req, res) => {
    assessmentService.acceptAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/complete', (req, res) => {
    assessmentService.completeAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/reject', (req, res) => {
    assessmentService.rejectAssessment(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// COMMENTS
app.get('/assessments/:assessmentOrderId/comments', (req, res) => {
    commentService.getComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/comments', (req, res) => {
    commentService.postComments(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/comments/:commentId', (req, res) => {
    commentService.getCommentById(req.params.assessmentOrderId, req.params.commentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// OFFERS
app.get('/offers', (req, res) => {
    offerService.getOffers()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers', (req, res) => {
    offerService.postOffers()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/offers/:offerId', (req, res) => {
    offerService.getOfferById(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId', (req, res) => {
    offerService.updateOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/submit', (req, res) => {
    offerService.submitOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/offers/:offerId/withdraw', (req, res) => {
    offerService.withdrawOffer(req.params.offerId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// RESULTS
app.get('/assessments/:assessmentOrderId/results', (req, res) => {
    resultService.getResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results', (req, res) => {
    resultService.postResults(req.params.assessmentOrderId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/results/:resultId', (req, res) => {
    resultService.getResultById(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// ATTACHMENTS
app.get('/assessments/:assessmentOrderId/results/:resultId/attachments', (req, res) => {
    attachmentService.getAttachments(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results/:resultId/attachments', (req, res) => {
    attachmentService.postAttachments(req.params.assessmentOrderId, req.params.resultId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/assessments/:assessmentOrderId/results/:resultId/attachments/:attachmentId', (req, res) => {
    attachmentService.getAttachmentById(req.params.assessmentOrderId, req.params.resultId, req.params.attachmentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/assessments/:assessmentOrderId/results/:resultId/attachments/:attachmentId', (req, res) => {
    attachmentService.updateAttachment(req.params.assessmentOrderId, req.params.resultId, req.params.attachmentId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

// CONFIGS
app.get('/configs', (req, res) => {
    configService.getConfigs()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/configs', (req, res) => {
    configService.postConfig()
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/configs/:configId', (req, res) => {
    configService.getConfigById(req.params.configId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.post('/configs/:configId', (req, res) => {
    configService.updateConfig(req.params.configId)
        .then(data => {
            res.send({data})
        })
        .catch(err => {
            res.send(err)
        })
})

app.listen(PORT, () => console.log(`The express-api-fetch app listening on port ${PORT}!`))
