# Fetch API in Express.js app

## Installation and run

To get started using the app:

* Install all the app dependencies with `npm i`
* Start a development server with `npm start`
* Altirnatively, start a live preview server with `npm run start:watch`
* App will be running on `http://localhost:8051`

## API

### Assessments

* Get all new assessment orders

    `curl http://localhost:8051/assessments` 
    
* Get assessment order by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}` 
    
* Accept assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/accept`
    
* Complete assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/complete`
    
* Reject assessment order

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/reject`
    

### Comments

* Get comments

    `curl http://localhost:8051/assessments/{assessmentOrderId}/comments`
    
* Post comments

    `curl -X POST http://localhost:8051/assessments/{assessmentOrderId}/comments`
    
* Get comment by ID

    `curl http://localhost:8051/assessments/{assessmentOrderId}/comments/{commentId}`
