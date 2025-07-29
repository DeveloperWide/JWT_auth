const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes.js');
const { connectDb } = require('./config/db.js');

dotenv.config();
const app = express();

app.use(cors()); // Allow frontend
app.use(express.json());
connectDb()
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
