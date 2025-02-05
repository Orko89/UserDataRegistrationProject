require('dotenv').config();
const express = require('express');
const connectDB = require('db.js');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));