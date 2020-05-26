const server = require('./api/Server');

const port = 5000;

server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}...`);
    
})