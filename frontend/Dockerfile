# ./frontend/Dockerfile

# Use an official Node runtime as the parent image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["npm", "start"]
