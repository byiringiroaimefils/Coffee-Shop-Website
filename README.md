# Coffee Shop Website

A full-stack web application for a coffee shop that allows customers to browse menus, place orders, and administrators to manage products and orders.

## Features

### Customer Features
- User authentication (Sign up/Sign in)
- Browse coffee menu
- Place orders
- View order history
- Contact form
- Responsive design for all devices

### Admin Features
- Product management (Add/Edit/Delete products)
- Order management
- View all customer orders
- Approve/Reject orders
- User management

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios for API calls
- JWT for authentication
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS

## Project Structure

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/byiringiroaimefils/Coffee-Shop-Website
    cd coffee-shop-website
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=
    JWT_SECRET=your_jwt_secret
    ```

4. Run the application:
    --Run FrontEnd---
    npm run dev
    ```
    --Run Back End
    node index.js

## Usage
- Access the website: Open your browser and go to `http://localhost:8000/home`.
- SignIn Page: Open your browser and go to `http://localhost:8000/`.
- Admin Panel: Navigate to `/admin` to access the admin functionalities.

credential of Admin by default is 
email: admin@gmail.com.com,
password: admin

## Usage
BYIRINGIRO Aime Fils



