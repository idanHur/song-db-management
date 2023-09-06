# Song Database Management Application

Welcome to the **Song Database Management Application**! This project combines a frontend, backend, and a MySQL database to allow users to search for songs, add new songs, and manage song data.

## Technologies Used

The application leverages the following technologies and frameworks:

- **Frontend**:
  - React: A JavaScript library for building user interfaces.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.
  - Axios: A promise-based HTTP client for making API requests.
  - React Router: A routing library for navigation within the frontend.

- **Backend**:
  - Node.js: A JavaScript runtime for building server-side applications.
  - NestJS: A progressive Node.js framework for building efficient, reliable, and scalable server-side apps.
  - TypeORM: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript.
  - MySQL: A popular open-source relational database management system.

- **Docker**: Containerization platform for packaging applications and their dependencies.

## Overview

This application is divided into two main parts:

- **Frontend**: The user interface that enables users to search for songs and add new songs to the database.

- **Backend**: The server-side application responsible for handling API requests, managing song data, and interacting with the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Docker**: Make sure you have Docker installed on your system. If you don't have Docker installed, you can download and install it from the [Docker website](https://www.docker.com/get-started).

- **Git**: If you plan to clone this project from a repository, ensure you have Git installed. You can download it from the [Git website](https://git-scm.com/downloads).

## Usage

To run the entire application stack, follow these steps:

### 1. Clone the Repository

If you haven't already, clone this repository to your local machine:

```bash
    git clone <https://github.com/idanHur/song-db-management.git>
    cd <song-db-management>
```

### 2. Build the Docker Containers

In the root directory of this project, use the following command to build the Docker containers for the frontend, backend, and the MySQL database:

```bash
    docker-compose up --build
```

This command will create and start the necessary containers based on the configurations provided in the docker-compose.yml file.

### 3. Access the Application

Once the Docker containers are up and running, you can access the Song Database Management Application in your web browser:

- Frontend: http://localhost:3001
- Backend API: http://localhost:3000

### 4. Use the Application
You can now use the application to search for songs, add new songs, and manage song data.

## Directory Structure
The project directory is structured as follows:

- frontend: Contains the React-based frontend application.
- backend: Contains the NestJS-based backend application.
- docker: Contains Docker configuration files.