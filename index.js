const express = require('express');
const app = express();
const port = 8051;
const rp = require('request-promise-native');
const options = {
    uri: 'https://api.smartrecruiters.com/candidates',
    headers: {
        'X-SmartToken': 'db4b3671a5314890b7c039fdd9acf7cf'
    },
    json: true
}

app.get('/', (req, res) => {
    rp(options)
        .then(parsedBody => {
            res.send(parsedBody);
        })
        .catch(err => {
            res.send(err);
        });
});


app.listen(port, () => console.log(`The express-api-fetch app listening on port ${port}!`));
