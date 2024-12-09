const express = require('express');
const { register, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
  res.send('Admin page');
});

router.get('/moderator',authenticate,authorize("admin","moderator"), (req, res) => {
  res.json({ message: 'Welcome, Moderator!' });
  res.send('moderator page');
});

router.get('/user',authenticate,authorize("admin","moderator","user"), (req, res) => {
  res.json({ message: 'Welcome, User!' });
  res.send('User page');
});

module.exports = router;
