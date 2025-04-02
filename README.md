# Employee Record Management - Docker Compose Project

This project is an Employee Record Management system with a frontend built in **React** (with TypeScript) and a backend powered by **Spring Boot**. It uses an **H2 in-memory database** to store data. The entire application is containerized using **Docker** and managed with **Docker Compose** for easy deployment.

## Project Structure

The project consists of two main parts:

1. **Frontend**: A React application using TypeScript for the user interface.
2. **Backend**: A Spring Boot application providing the API and business logic, connected to an H2 in-memory database.

The project is set up using Docker Compose, which allows both the frontend and backend services to run in separate containers and communicate with each other.

## Prerequisites

Before running the project, ensure you have the following installed:

- Docker
- Docker Compose

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Myatty/Employee-Record.git
cd Employee-Record
```

## Build and Start the Application

Navigate to the project directory and run the following command to start both the frontend and backend services:

```bash
docker-compose up --build
```

This will:

<ul>
  <li>Build the Docker images for the backend and frontend.</li>
  <li>Start the containers in the background.</li>
</ul>



Once the services are running, you can access the following:

<ul>
  <li>Frontend: http://localhost:3000 (React application)</li>
  <li>Backend: The backend service runs on port 8080 inside the container.</li>
</ul>

### Stopping the Application

To stop the running containers, you can use the following command:

```bash
docker-compose down
```

This will stop and remove all the containers, networks, and volumes created by Docker Compose.


## Backend (Spring Boot)
The backend is a Spring Boot application that exposes a RESTful API for managing employee records. It uses an H2 in-memory database for simplicity and testing purposes.

CORS: Configured to allow requests from http://localhost:3000 (frontend). </br>
API Endpoints: The backend provides endpoints for creating, reading, updating, and deleting employee records.

## Frontend (React with TypeScript)
The frontend is a React application built using TypeScript. It communicates with the backend API to display and manage employee records.

React: The user interface is built with React. </br>
TypeScript: The application is written in TypeScript for better code quality and type safety.

## Technologies Used


### Frontend:

<ul>
  <li>React</li>
  <li>TypeScript</li>
</ul>

### Backend:

<ul>
  <li>Spring Boot</li>
  <li>CORS Configuration</li>
  <li>H2 In-memory Database</li>
</ul>



### Containerization:

<ul>
  <li>Docker</li>
  <li>Docker Compose</li>
</ul>



