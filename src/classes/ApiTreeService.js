const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
class ApiTreeService {

    constructor(){
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = '8080';
        this.io = new Server(this.server, {});
        this.paths = {
            operations: '/api/operations'
        };

        this.middlewares();
        this.routes();

    }

    middlewares(){

        //Parsing body as json
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.paths.operations, require('../routers/treeOperations'));
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log(`Running on port: ${this.port}`)
        });
    }
}

module.exports = ApiTreeService;