# Use the official Node.js image as a parent image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Specify the command to run when the container starts
CMD ["npm", "start"]
