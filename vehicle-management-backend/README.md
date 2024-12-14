Backend - Vehicle Management Dashboard
Overview
This is the backend API for the Vehicle Management Dashboard. It is built using Node.js, Express.js, and MongoDB. The API provides endpoints for adding, updating, and fetching vehicle data.

Setup Instructions
1. Clone the repository:
git clone <repository-url>
cd backend

2. Install dependencies:
npm install

3. Set up environment variables: Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/vehicleDB?retryWrites=true&w=majority

4. Start the server:
npm start

5. Test API endpoints: Use Postman or any API client to test the following endpoints:

POST /api/vehicles: Add a new vehicle
Request Body (JSON):

{
  "name": "Tesla Model 3",
  "status": "Active"
}


PUT /api/vehicles/:id: Update vehicle status
Request Body (JSON):

{
  "status": "Inactive"
}

GET /api/vehicles: Fetch all vehicles