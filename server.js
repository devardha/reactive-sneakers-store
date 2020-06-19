const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true } )
        .then(()=> console.log('Database Connected...'))
        .catch((err)=> console.log(err));

app.use(cors());
app.use(bodyparser.json());


// Routes
const productsRouter = require('./routes/products');
const userRouter = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use('/api/products', productsRouter);
app.use('/api/user', userRouter);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))