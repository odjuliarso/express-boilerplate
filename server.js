const http = require('http');

const host = '0.0.0.0'
const port = 8080

const requestHandler = (request, response) => {
        console.log(request.url)
        response.end('Goodby from Node.js Server!\n')
}

const server = http.createServer(requestHandler)

server.listen(port, host, (err) => {
        if (err) {
                return console.log('something bad happened', err)
        }

        console.log(`Server is listening on ${host}/${port}`)
})
