# MERN Project

This project is a full-featured MERN (MongoDB, Express.js, React.js, Node.js) stack application.

## Project Structure
.
├── client # React frontend
│ ├── public
│ ├── src
│ ├── .gitignore
│ ├── package.json
│ └── README.md
├── server # Express backend
│ ├── config
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── .gitignore
│ ├── package.json
│ └── README.md
├── .gitignore
└── README.md

## 1. Technologies Used

- **Frontend:** React.js
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** CSS/Bootstrap

## Setup Instructions

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/avneesh9908/Web-Application-with-Authentication.git

## 2.Install dependencies for the server:
cd server
npm install

## 3.Install dependencies for the client:
cd ../client
npm install

## Environment Variables
Create a .env file in the server directory and add the following environment variables:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

## Running the Application
1. Start the server:
cd server
nodemon start

The server will run on http://localhost:3000.

## Start the client:

cd ../client
npm start

The client will run on http://localhost:5000.

## Project Features
User Authentication: Users can register and log in.
Data Management: Users can manage their data, which is stored in MongoDB.
Admin Page: Admin can manage users' contact and registration data.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.





