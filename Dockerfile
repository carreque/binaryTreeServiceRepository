# Use the official Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /microservice

#Copy package.json and the package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Run tests
CMD [ "npm", "start" ]