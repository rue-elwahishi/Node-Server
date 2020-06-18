const http = require('http') 

const myServer = http.createServer((request, response) => {
    response.write("HI USER")
    console.log(request)
    response.end()
})
  
myServer.listen(300, () => {
 console.log('server running')
})