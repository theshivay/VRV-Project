const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router;
