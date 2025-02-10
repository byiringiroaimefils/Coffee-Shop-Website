    // ------ Library and PlugIn----
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const PORT = process.env.PORT || 8000;
const App = express();
const Product = require('./Models/Product.js');
const user = require('./Models/user.js');
const Order = require('./Models/Order');
const connectToDb = require('./Db.js');
require("dotenv").config();
const cors = require('cors');

App.use(bodyParser.json());
App.use(cors());

// Initialize database connection before starting the server
const startServer = async () => {
    try {
        await connectToDb(); // Connect to database first
        
        App.listen(PORT, () => {
            console.log(`Server is running on Port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// -----Product Magement------

App.post("/product", async(req, resp) => {

    const newProduct = {
        Name: req.body.name,
        Image:req.body.image,
        Price: req.body.price,
        Decription: req.body.decription
    };
    const product = Product.create(newProduct)
        .then((data) => {
            return resp.status(200).json("Successful Added");
        })
        .catch((err) => {
            resp.status(400).json({ message: 'Failed', err });
        });
});


App.get("/products", (req, resp) => {
    Product.find()
        .then((data) => {
            return resp.status(200).json({ message: 'success', data });
        })
        .catch((err) => {
            resp.status(400).json({ message: 'Failed', err });

        });
});

App.delete("/deleteProduct/:id", async (req, resp) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then((data) => {
            return resp.status(200).json({ message: "success Deleted" });
        })
        .catch((err) => {
            return resp.status(400).json({ Message: "Failed", err });

        });
});

App.put("/EditProduct/:id", (req, resp) => {

    const newProduct = {
        Product: req.body.name,
        Image:  req.body.image,
        Price: req.body.price,
        Decription:req.body.decription
    };

    const { id } = req.params;
    Product.findByIdAndUpdate(id, newProduct)
        .then((data) => {
            return resp.status(200).json({ message: "success Updated", data });
        })
        .catch((err) => {
            return resp.status(400).json({ message: "Failed", err });
        });
});

// ------User Auntontication ----


App.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body; 

        if (!password & !email) {
            return res.status(400).json({ message: 'Password is required email' });
        }
       const saltRounds=12;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new user({ username, email, password: hashPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Signup failed' });
    }
});



App.post('/login', async (req, resp) => {
    try {
        const { email, password } = req.body;
        const users = await user.findOne({ email });
        if (!users) {
            return resp.json({ message: 'User not found' });
        }
        const isPassword = await bcrypt.compare(password, users.password);
        if (!isPassword) {
            return resp.json({ message: 'Password is incorrect' });
        }
        const token = jwt.sign({ id: users._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        return resp.json({ message: 'Login successful', token, role: email });
    } catch (error) {
        console.error('Login error:', error);
        resp.status(400).json({ message: 'Login failed' });
    }
});


// Order Management
App.post('/orders', async (req, res) => {
    try {
      const order = new Order({
        customerEmail: req.body.customerEmail,
        customerName: req.body.customerName, 
        productName: req.body.productName,
      });

      await order.save();
      res.status(201).json({ 
        message: 'Order placed successfully', 
        order: {
          customerEmail: order.customerEmail,
          customerName: order.customerName, 
          productName: order.productName
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Error placing order', error: error.message });
    }
  });


  App.get('/api/orders', async (req, res) => {
    try {
      const orders = await Order.find().select('customerEmail productName');
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error });
    }
  });


App.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting order', error: error.message });
    }
});

// Start the server
startServer();
