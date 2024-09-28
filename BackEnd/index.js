// ------ Library and PlugIn----

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const App = express();
App.use(bodyParser.json());
// const Db = require('./Db.js');
const Product = require('./Models/Product.js');
const user = require('./Models/user.js');
const Order = require('./Models/Order');

require("dotenv").config();



// // ----- Schema of Database----

// const Product = Mongoose.model("Product", ProductSchema);
// const user = Mongoose.model("users", UserSchema);

const Db = Mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Db is connected");
    })
    .catch((err) => {
        console.log(err);
    });

// -----Product Magement------

App.post("/product", async(req, resp) => {

    const newProduct = {
        Product: "Coffee",
        Image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
        Price: "$200",
        Decription: "A concentrated, syrup-like coffee made by forcing nearly boiling water through finely-ground coffee beans"
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
        Product: "Red Tea",
        Image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg",
        Price: "$1200",
        Decription: "A concentrated, syrup-like coffee made by forcing nearly boiling water through finely-ground coffee beans"
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

// ------user Management----


App.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = {
            username: req.body,
            email: req.body,
            password: req.body
        };

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

        const { email, password } = {
            email: req.body,
            password: req.body
        };
        const users = await user.findOne({ email })
        if (!users) {
            return resp.json({ message: 'User not found' });
        }
        const isPassword = await bcrypt.compare(password, users.password)
        if (!isPassword) {
            return resp.json({ message: 'Password is incorrect' });
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' })
        return resp.json({ message: 'Login successful', token });

    } catch (error) {
        resp.status(400).json({ message: 'Login failed' });
    }

})

// Order Management

App.post('/orders', async (req, res) => {
    try {
      const { customerName, customerEmail, items } = {
        "customerName": "John Doe",
        "customerEmail": "john.doe@example.com",
        "items": [
          {
            "productId": "66f6d3249a912381de3bd1d9"
          },
          {
            "productId": "66f6d2fbdb001ab75be1b374"
          }
        ]
      };
  
      const orderedItems = await Product.find({ '_id': { $in: items.map(item => item.productId) } });
  
      const order = new Order({
        customerName,
        customerEmail,
        items,
      });
  
      await order.save();
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
      res.status(500).json({ message: 'Error placing order', error });
    }
  });

  App.get('/api/orders', async (req, res) => {
    try {
      const orders = await Order.aggregate([
        {
          $lookup: {
            from: 'products', 
            localField: 'items.productId', 
            foreignField: '_id',  
            as: 'productDetails'  
          }
        }
      ]);
  
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error });
    }
  });
  


App.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})
