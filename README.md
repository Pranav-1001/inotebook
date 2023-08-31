

# iNotebook - Note Taking App

![App Screenshots](screenshots.png)

iNotebook is a note-taking web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, edit, and delete notes, as well as manage them by adding tags. The app also provides user authentication, enabling users to sign up, log in, and securely store their notes in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration: Sign up to create an account.
- User Authentication: Log in securely to access your notes.
- Create Notes: Add new notes with a title, description, and optional tags.
- Edit Notes: Update existing notes with new content.
- Delete Notes: Remove notes that you no longer need.
- Tagging System: Organize your notes with customizable tags.
- MongoDB Storage: Store and retrieve your notes from a MongoDB database.

## Technologies

- MongoDB: A NoSQL database used to store user information and notes.
- Express.js: A backend framework for building APIs and handling requests.
- React: A JavaScript library for building user interfaces.
- Node.js: A runtime environment for executing server-side code.
- bcrypt: Library for hashing and securely storing passwords.
- JWT (JSON Web Tokens): Used for user authentication and authorization.

## Getting Started

### Prerequisites

- Node.js and npm installed globally on your machine.
- MongoDB instance set up and running.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/iNotebook.git
   
2. **Navigate to the project directory:**

    ```sh
    cd iNotebook
    ```

3. **Install server dependencies:**

    ```sh
    cd server
    npm install
    ```

3. **Install client dependencies:**

    ```sh
    cd ../client
    npm install
    ```

## Usage

1. **Start the server:**

    ```sh
    cd ../server
    npm start
    ```

2. **Start the client:**

    ```sh
    cd ../client
    npm start
    ```

3. **Access the app in your browser at [http://localhost:3000](http://localhost:3000).**

## Screenshots

Here are some screenshots of the iNotebook app in action:

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)
<!-- Add more screenshots as needed -->

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
