# Song Database Management Backend

## Overview

Welcome to the backend portion of the Song Database Management application. This backend is responsible for managing song data and exposing API endpoints for interaction.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [NestJS](https://nestjs.com/): A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- [TypeORM](https://typeorm.io/): A popular Object Relational Mapping (ORM) library for TypeScript and JavaScript.

## API Endpoints

The backend provides the following API endpoints for managing song data:

- `GET /songs`: Retrieve a list of all songs.
- `GET /songs/order-by-band`: Retrieve all songs ordered by band.
- `GET /songs/by-band/:bandName`: Retrieve songs by a specific band.
- `GET /songs/by-year/:year`: Retrieve songs from a specific year.
- `GET /songs/specific-song`: Retrieve a specific song by its name and band. (Query parameters: `songName` and `band`)
- `POST /songs`: Add a new song to the database.
- `DELETE /songs`: Delete a specific song by its name and band. (Request body should include `songName` and `band` fields)

## Usage

To run the backend, you'll need to set up the full application using Docker. Please follow the instructions provided in the main README file for building and running the entire application stack, including the backend, database, and frontend.

For detailed information on how the backend works, including its architecture, data models, and API endpoints, refer to the source code.

