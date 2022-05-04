// built-in HTTP Module
const http = require('http');

// req = requests
// res = responses
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('HomePage')
    }

    if (req.url === '/about') {
        res.end('about')
    }

    res.end('Not found');

    // console.log(req);

    // res.write('Hello world');
    // res.end();
});

server.listen(5000);