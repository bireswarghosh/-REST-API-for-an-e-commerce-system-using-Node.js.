
# E-commerce API

This project provides a simple RESTful API for an e-commerce platform. It allows for managing products and their variants.

## Getting Started

These instructions will get you a copy of the project up and runningon your local machine for development and testing purposes.


## How to Run the Project
Prerequisites:  required software, like Node.js, npm.
Installation: Step-by-step instructions to install dependencies, e.g., npm install.
Running the app: Instructions to start the server, e.g., npm start.


### Installing

A step by step series of examples that tell you how to get a development environment running.

Clone the repository:
git clone [repository_url]


## API Documentation
To interact with the API, you can use the provided Postman collection or make HTTP requests to the following endpoints:

Product Endpoints
POST /products - Create a new product with variants.
GET /products - Retrieve all products.
GET /products/:id - Retrieve a product by its ID.
PUT /products/:id - Update a product by its ID.
DELETE /products/:id - Delete a product by its ID.
GET /products/search - Search for products by a query string.


# Architectural Decisions
Discuss the architecture of my application, such as MVC.

backend/
|-- controllers/
|   |-- productController.js
|
|-- models/
|   |-- Product.js
|   |-- Variant.js
|
|-- routes/
|   |-- productRoutes.js
|
|-- app.js



# Postman Collection
   https://winter-zodiac-246698.postman.co/workspace/New-Team-Workspace~aa0cb478-9e32-454c-bbe9-1c923259a6e4/collection/27227427-a1f52ab0-74f8-4896-9f53-06610a7a5345?action=share&creator=27227427


# Authors
Bireswar Ghosh 







