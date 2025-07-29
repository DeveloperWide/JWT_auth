const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);

// Example protected route
router.get('/protected', auth, (req, res) => {
  res.json({ message: `Welcome user ${req.user.id}, this is protected data.` });
});

module.exports = router;
