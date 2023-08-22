# binaryTreeServiceRepository
Implementation of a tree insertion microservice

# Watch the tests results in the pipeline
In the github repository section called "Actions", there are all the jobs which are responsible to execute the tests automatically. It appears all the workflows done from the beginning of the repository.

# Instructions to start the application
First It is necessary to install the project's dependencies. Therefore, It should be executed the following command: npm install.

Once the dependencies are installed, in order to start the application It should be executed the command npm start. If there is any code modification while the application is running, nodemon is going to update the ouput because It is watching to any change.

After starting the application, in order to know if the connection was stablish succesfully, I have created a endpoint called "helloWorld", which is a GET request. When It is done a get request to the following url: "http://localhost:8080/api/operations/helloWorld", the answer should be "Hello world" and this would prove that the application listen correctly.

To test the endpoint to add a value to a tree, It should be done a post request to the following url: "http://localhost:8080/api/operations/insertValue".

# Docker instructions
In order to build the image, the following command should be executed: docker build -t treeservice:latest --no-cache .(This point is part of the command). On the previous command, we create a image with the name treeservice:latest without using any cache to avoid problems in case of previous buildings and the last point indicates the workdir where all the files are, in this case in the same place.

In order to run the docker container, It executes the following command: docker run -p 80:80 --name treeService treeservice:latest. In this case, It is running in the external port 80 on the host machine and in the internal port 80 on the container machine. It also has been used the image name called treeService:latest and the container was named "treeService".

Once the docker is running, It can be checked executing docker ps -a to check the status of all the existing dockers.
