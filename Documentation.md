                     Coffee Shop Website

## Overview
The Coffee Shop Website is a full-stack web application designed to manage and display information about a coffee shop. It includes features for browsing the menu, placing orders, and managing inventory.

## Features
- User Authentication: Sign up, log in, and log out functionality.
- Menu Display: View a list of available coffee and food items.
- Order Placement: Users can place orders for items from the menu.
- Admin Panel: Manage inventory, view orders, and update menu items.

## Technologies Used
- Frontend: HTML, CSS, JavaScript, React
- Backend: Node.js, Express.js
- Database: MongoDB (using Mongoose for ODM) i have used MongoDB Atlas which is a test in my Cluster
- Authentication: JWT (JSON Web Tokens)

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

