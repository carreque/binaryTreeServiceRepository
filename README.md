# binaryTreeServiceRepository
Implementation of a tree insertion microservice

# Watch the tests results in the pipeline
In the github repository section called "Actions", there are all the jobs which are responsible to execute the tests automatically. It appears all the workflows done from the repository beginning.

# Instructions to start the application
First it should be checked on that our environment has the node version 18.x, jest version 29.x, express version 4.x, express-validator version 7.x and nodemon version 3.x. 

Once it was checked, in order to start the application it should be enter the command npm start. If there is any code modification while the application is running, nodemon is going to update the ouput because it is watching to any change.

After starting the application, in order to know if the connection was stablish succesfully I have created a endpoint called "helloWorld", which is a GET request. When it is done a fetch to the following url: "http://localhost:8080/api/operations/helloWorld", the answer should be "Hello world" and this would prove that the application listen correctly.

To test the endpoint to add a value to a tree, It should be done a post request to the following url: "http://localhost:8080/api/operations/insertValue".
