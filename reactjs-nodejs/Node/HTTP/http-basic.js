const http = require('http');
const {readFileSync} = require('fs');

// get all data
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {

    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(homePage);
            break;
        case '/about':
            res.writeHead(200, {'content-type': 'text/html'});
            res.write('<h1>about</h1>');
            break;
        default:
            res.writeHead(404, {'content-type': 'text/html'});
            res.write('<h1>Page not found</h1>');
            break;
    }

    res.end();

});

server.listen(5000);