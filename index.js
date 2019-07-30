const express = require('express');
const app = express();
const port = 8051;
const fetch = require('node-fetch');

app.get('/', function (req, res) {
    var url = 'https://api.smartrecruiters.com/v1/companies/PIQC/postings';

    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.send(err)
        })
});

app.listen(port, () => console.log(`The express-api-fetch app listening on port ${port}!`));
