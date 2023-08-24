# binaryTreeServiceRepository
Implementation of a tree insertion microservice.

# Watch the tests results in the pipeline
In the github repository section called "Actions", there are all the jobs which are responsible to execute the tests automatically. It appears all the workflows done from the beginning of the repository.

# Instructions to start the application
First It is necessary to clone or download the application on a ubuntu system with node version >= 18.x and npm version >= 9.6.7. Once it was downloaded or cloned, It is necessary to install the project's dependencies. Therefore, It should be executed the following command: npm install.

Once the dependencies are installed, in order to start the application It should be executed the command npm start. If there is any code modification while the application is running, nodemon is going to update the ouput because It is watching to any change.

After starting the application, in order to know if the connection was stablish succesfully, I have created a endpoint called "helloWorld", which is a GET request. When It is done a get request to the following url: "http://localhost:8080/api/operations/helloWorld", the answer should be "Hello world" and this would prove that the application listen correctly.

To test the endpoint to add a value to a tree, It should be done a post request to the following url: "http://localhost:8080/api/operations/insertValue".

# API Rest Testing
The file called "ApiConnection" in tests folder is the responsible to test the API REST. However, because the application is not deployed anywhere and github actions run in a headless environment without a web server, the tests will fail. For this reasons the file is not called ApiConnection.test.js. Therefore, in order to test the API Rest locally, the file's name mentioned before should change to "ApiConnection.test.js". After rename it and in a locally environment, It could be executed the command "npm test" to execute both tests. In the hook afterEach, there is an await of 400ms because otherwise the multiple requests that are executing would collapse the connection.

# Docker instructions
In order to build the image, the following command should be executed: docker build -t treeservice:latest --no-cache .(This point is part of the command). On the previous command, we create a image with the name treeservice:latest without using any cache to avoid problems in case of previous buildings and the last point indicates the workdir where all the files are, in this case in the same place.

In order to run the docker container, It should be executed the following command: docker run -p 80:80 --name treeService treeservice:latest. In this case, It is running in the external port 80 on the host machine and in the internal port 80 on the container machine. It also has been used the image name called treeService:latest and the container was named "treeService".

Once the docker is running, It can be checked executing docker ps -a to check the status of all the existing dockers. If you also do a get request to http://localhost:8080/api/operations/helloWorld, It would return "Hello World".

# API REST Persistence 
In this case I have selected a json file to store the tree that the client sends. It will always store the last tree that the client sends. This way, the file will have the last tree version sent it by the client. This approach was selected because it is only one client, the person who is going to test the endpoint. However, if there were more people fetching to the endpoint, It should be considered to use a database and therefore, create the corresponding scheme for the class binaryTree, for example a scheme with two fields, one to identify the client that has done the request and other one to store the serialized tree.

Because of what I have mentioned before about the number of requests done to the API, this can affect to the availability if the servers are not prepared to support the demanding request. When there is data persistance in an API, the following aspects should be considered: 

- If data is not stored properly, this could lead to inconsistencies and errors when clients retrieve or manipulate that data.
- The way to store data is should be considered carefully in order to let the API REST scales when the number of users or requests increases.
- In order to reduce the requests done to the API, sometimes is possible to do a perfomance technique called caching. This way the data will be stored in memory. 
- There are going to be information that need to be securily stored, like passwords or card numbers.

# Deployment in kubernetes

## Kind installation

In this case the application was deployed using the local kind cluster https://github.com/kubernetes-sigs/kind. Prior to install kind, It is necessary to install go. Once go is installed and configured the following command should be executed to install kind: go install sigs.k8s.io/kind@v0.20.0 . In my case, after the installation, the following error appeared: "kind: command not found". As the repository shows, to solve this problem it is necessary to put kind in the go environment by executing in my case the command: go env -w GOBIN=/usr/local/go/bin. After solve this problem, the kind version could be checked executing the following command: kind --version.

## Create a cluster
In this section I am going to talk about how I created a cluster, all the information can be seen here: https://kind.sigs.k8s.io/docs/user/ingress/#using-ingress.

To create a cluster and use a popular ingress option like countour, nginx or kong, it is necessary to configure the cluster so it knows that an ingress is going to be used and configure the ports. To achieve this step is going to be executed the box-content which appears at the beginning of the using-ingress documentation, mentionated at the beginning of this subsection. 

Once the cluster was created with the mentioned configuration, the docker image with the microservice needs to be loaded in the cluster through the command: kind load docker-image treeservice. 

## Ingress
After loading the image, I installed the ingress-nginx option, so I followed the steps mentioned on that section executing the following commands:

- kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
- kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s

When the last command gives the output  "pod/ingress-nginx-controller-6b7f45576b-nshqm condition met", then the pod is ready to process requests. Now the last step is to configure our service in a yaml file, in this case in the treeService.yaml. Once it is defined all the content of the service (the ingress object, deployment and service for this situation), the following command needs to be executed to apply the changes: kubectl apply -f treeService.yaml.

Finally in the url localhost/treeservice/api/operations/helloWorld, It will appear the message "Hello world".

# Conclusions
I have enjoyed the challengue because it has let me learn how to build a pipeline from zero and how to deploy a microservice in kubernetes. I have learnt how github actions works and what is necessary to deploy a microservice in a kubernetes cluster.