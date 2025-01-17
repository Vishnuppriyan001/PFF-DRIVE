Pokemon App

This repository contains the codebase for a simple Pokémon app built with a React frontend and Flask backend. The app allows users to view a list of Pokémon, search, filter, sort, and view detailed information about individual Pokémon.

Tech Stack

Frontend:

Framework: React

Styling: Tailwind CSS / CSS Modules (based on developer choice)

API Integration: Axios

Backend:

Framework: Flask

Database: PostgreSQL

ORM: SQLAlchemy

Hosting:

Frontend: Vercel / Netlify

Backend: Heroku / Render

Pre-requisites

Node.js (Frontend):

Download and install Node.js from nodejs.org.

Python (Backend):

Install Python 3.9+.

Install PostgreSQL and ensure it is running.

Database:

Create a PostgreSQL database named pokemon.

Update the DATABASE_URL in backend/config.py with the appropriate connection string.

Setup Instructions

Frontend:

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the development server:

npm start

The app will be available at http://localhost:3000.

Backend:

Navigate to the backend folder:

cd backend

Create a virtual environment:

python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows

Install dependencies:

pip install -r requirements.txt

Initialize the database:

flask db init
flask db migrate
flask db upgrade

Seed the database with Pokémon data:
Uncomment the seed_pokemon_data function call in app.py temporarily, then run:

python app.py

Once data is seeded, remove the function call.

Start the backend server:

python app.py

The API will be available at http://localhost:5000/api.

Features

Home Page (/home):

Displays a list of Pokémon with ID, name, type, and image.

Provides search, filter, and sort functionality.

Supports pagination to navigate through Pokémon.

Pokémon Details Page (/pokemon/<id>):

Displays detailed information about a specific Pokémon, including:

ID, name, type, height, weight, and stats.

Shows a list of similar Pokémon based on type.

API Documentation

Endpoints:

Get Pokémon List:

Endpoint: GET /api/pokemon

Query Parameters:

page (optional): Page number for pagination.

per_page (optional): Number of Pokémon per page.

Get Pokémon Details:

Endpoint: GET /api/pokemon/<id>

Deployment

Frontend:

Build the React app:

npm run build

Deploy the build/ directory to a hosting platform like Vercel or Netlify.

Backend:

Push the Flask backend to a platform like Heroku or Render.

Ensure the DATABASE_URL environment variable is set appropriately.

Acknowledgements

Data sourced from PokeAPI.

Inspiration and wireframe from the SSN Coding Contest challenge.
