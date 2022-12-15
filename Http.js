const http = require("http")
const port = 8000
const server = http.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader("Content-type" , "text/plain");
    response.end("Hello World\n SSSSS \n asdjadkjas \n n3stc0r3");
});
server.listen(port, () => {

s


    console.log(`Server running at http://localhost:${port}/`)
})