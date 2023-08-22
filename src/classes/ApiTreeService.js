const express = require('express');
const http = require('http');
class ApiTreeService {

    constructor(){

        /*
            When an ApiTreeService instance is created, It creates a server that listen on the port 8080 and defines the path of the treeOperations route module. 
            It also going to execute the functions to use the middlewares and routes defined for the application.
        */
        this.app = express();
        this.server = http.createServer(this.app);
        this.port = '8080';
        this.paths = {
            operations: '/api/operations'
        };

        this.middlewares();
        this.routes();

    }

    middlewares(){

        //Parsing body as json
        this.app.use(express.json());
    }

    routes(){

        //Use the paths defined in the treeOperations module
        this.app.use(this.paths.operations, require('../routers/treeOperations'));
    }

    listen(){
        
        //Configure the application to listen in the port defined in the constructor
        this.server.listen(this.port, () => {
            console.log(`Running on port: ${this.port}`)
        });
    }
}

module.exports = ApiTreeService;