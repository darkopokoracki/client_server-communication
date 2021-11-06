const http = require('http');

// Pravimo zahtev

const request = http.request({
    hostname: 'localhost',   // moj Domen.com  
    port: 4000,
    method: 'GET',
    path: '/getRandomNumber/'
}, response => {
    let parts = [];
    response.on('data', part => parts.push(part));
    response.on('end', () => {
        let reponseData = Buffer.concat(parts).toString();
        let responseDataObject = JSON.parse(reponseData);
        console.log(responseDataObject.randomNumber);
    });
});

request.end();