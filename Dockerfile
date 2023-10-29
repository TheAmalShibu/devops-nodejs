# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR nodeapp

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Bundle your source code into the Docker image
COPY app.js ./

# Expose a port (e.g., 3000) if your Node.js app listens on a specific port
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "node", "app.js" ]
