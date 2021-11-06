const http = require('http');


const request = http.request({
    hostname: 'localhost', 
    port: 4000,
    method: 'POST',
    path: '/checkStudentInfo/',
    headers: {
        'Content-type' : 'application/json'
    }
}, response => {
    let parts = [];
    response.on('data', part => parts.push(part));
    response.on('end', () => {
        let reponseData = Buffer.concat(parts).toString();
        console.log(reponseData);
    });
});

const studentToCheck = {
    forename: 'Darko',
    surname: 'Pokoracki',
    index: '2876351346'
};

const requestBodyData = JSON.stringify(studentToCheck);
request.write(requestBodyData);

request.end();