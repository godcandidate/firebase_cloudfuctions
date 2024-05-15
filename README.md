# Firebase Firestore CRUD Application

Welcome to my Firebase Firestore CRUD application repository. This project is part of my journey to learn and apply CRUD (Create, Read, Update, Delete) operations using Firebase Firestore in a Node.js application. The backend is built with Express.js, and the project demonstrates how to structure a Node.js application with modular routes and functions.

![Firestore Architecture](assets/firestore-architecture.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project showcases how to integrate Firebase Firestore with a Node.js backend to perform CRUD operations. The aim is to provide a simple and clear example of how to structure and write code for interacting with Firestore.

## Features

- **Create**: Add new documents to Firestore.
- **Read**: Fetch documents from Firestore.
- **Update**: Modify existing documents in Firestore.
- **Delete**: Remove documents from Firestore.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/godcandidate/firebase_cloudfuctions.git
   cd firebase_cloudfuctions
    ```
2. **Install dependencies:**
    ```sh
    npm install nodemon cors express firebase 
    ```
3. **Set up Firebase**
- Create a Firebase project in the Firebase Console.
- Set up Firestore in your Firebase project.
- Create your config file with your firestore details

4. **Usage**
To start the server, run:
    ```sh
        npm start
    ```
The server will run on http://localhost:8080. You can use tools like Postman or cURL to test the API endpoints.

5. **Project structure**
.
├── functions.js        # Contains the functions for CRUD operations
├── routes.js           # Defines the API routes
├── index.js            # Main entry point of the application
├── package.json        # Project metadata and dependencies
└── serviceAccountKey.json # Firebase service account key (add this file manually)
