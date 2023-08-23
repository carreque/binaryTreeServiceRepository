# binaryTreeServiceRepository
Implementation of a tree insertion microservice

# Watch the tests results in the pipeline
In the github repository section called "Actions", there are all the jobs which are responsible to execute the tests automatically. It appears all the workflows done from the beginning of the repository.

# Instructions to start the application
First It is necessary to install the project's dependencies. Therefore, It should be executed the following command: npm install.

Once the dependencies are installed, in order to start the application It should be executed the command npm start. If there is any code modification while the application is running, nodemon is going to update the ouput because It is watching to any change.

After starting the application, in order to know if the connection was stablish succesfully, I have created a endpoint called "helloWorld", which is a GET request. When It is done a get request to the following url: "http://localhost:8080/api/operations/helloWorld", the answer should be "Hello world" and this would prove that the application listen correctly.

To test the endpoint to add a value to a tree, It should be done a post request to the following url: "http://localhost:8080/api/operations/insertValue".

# API Rest Testing
The file called "ApiConnection" in tests folder is the responsible to test the API REST. However, because the application is not deployed anywhere and github actions run in a headless environment without a web server, the tests will fail. For this reasons the file is not called ApiConnection.test.js. Therefore, in order to test the API Rest locally, its name should change to "ApiConnection.test.js". In the hook afterEach, there is an await of 400ms because otherwise the multiple requests that  are executing would collapse the connection.

# Docker instructions
In order to build the image, the following command should be executed: docker build -t treeservice:latest --no-cache .(This point is part of the command). On the previous command, we create a image with the name treeservice:latest without using any cache to avoid problems in case of previous buildings and the last point indicates the workdir where all the files are, in this case in the same place.

In order to run the docker container, It executes the following command: docker run -p 80:80 --name treeService treeservice:latest. In this case, It is running in the external port 80 on the host machine and in the internal port 80 on the container machine. It also has been used the image name called treeService:latest and the container was named "treeService".

Once the docker is running, It can be checked executing docker ps -a to check the status of all the existing dockers.

# API REST Persistence 
In this case I have selected a json file to store the tree that the client sends. It will always store the last tree that the client sends. This way, the file will have the last tree version sent it by the client. This approach was selected because it is only one client, the person who is going to test the endpoint. However, if there were more people fetching to the endpoint, It should be considered to use a database and therefore, create the corresponding scheme for the class binaryTree, for example a scheme with two fields, one to identify the client that has done the request and other one to store the serialized tree.

Because of what I have mentioned before about the number of requests done to the API, this can affect to the availability if the servers are not prepared to support the demanding request. When there is data persistance in an API, the following aspects should be considered: 

- If data is not stored properly, this could lead to inconsistencies and errors when clients retrieve or manipulate that data.
- The way to store data is should be considered carefully in order to let the API REST scales when the number of users or requests increases.
- In order to reduce the requests done to the API, sometimes is possible to do a perfomance technique called caching. This way the data will be stored in memory. 
- There are going to be information that need to be securily stored, like passwords or card numbers.