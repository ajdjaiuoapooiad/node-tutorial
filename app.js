const http = require('http')

const server = http.createServer((req,res) => {
    res.write('Welcome to my page!')
    res.end()
})

server.listen(5000);