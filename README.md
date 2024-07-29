
# Smart Task Manager AI

Task Manager AI is a smart task management application that helps you create to-dos and provides automatic, step-by-step guidance for seamless task completion. This project leverages MongoDB, Express.js, Node.js, React, Tailwind CSS, and OpenAI to deliver a robust and intuitive user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)


## Features

- **To-Do List Management**: Easily create, edit, and delete tasks.
- **Step-by-Step Guidance**: Get detailed guidance on how to complete tasks using OpenAI's API.
- **User Authentication**: Secure user registration and login.
- **Responsive Design**: Optimized for various screen sizes using Tailwind CSS.
- **Real-Time Updates**: Stay updated with real-time task status changes.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: OpenAI API
- **Other Tools**: Axios, JWT for authentication

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/task-ai.git
   cd task-ai
   ```

2. **Install dependencies:**

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following:

   ```
   MONGODB_URI=your_mongodb_uri
   OPENAI_API_KEY=your_openai_api_key
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   - Start the backend server:

     ```bash
     cd backend
     npm start
     ```

   - Start the frontend server:

     ```bash
     cd frontend
     npm start
     ```

   The application will be available at `http://localhost:3000`.

## Usage

1. **Sign Up / Login:** Create an account or log in with your existing credentials.
2. **Create To-Dos:** Add new tasks to your to-do list.
3. **Get Guidance:** Receive step-by-step instructions for completing tasks.
4. **Manage Tasks:** Edit or delete tasks as needed.

## Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

