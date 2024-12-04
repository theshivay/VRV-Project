const express = require('express');
const { register, login,forgotPassword, resetPassword } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const AuditLog = require('../models/AuditLog');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);


router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

router.get('/admin-action', authenticate, authorize(['admin']), async (req, res) => {
    await AuditLog.create({
      adminId: req.user.id,
      action: 'Performed an admin action',
    });
  
    res.json({ message: 'Action logged successfully' });
  });

  router.get('/me', authenticate, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password'); // Exclude password
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  router.get('/logs', authenticate, authorize(['admin']), async (req, res) => {
    try {
      const logs = await AuditLog.find().populate('adminId', 'email'); // Assuming 'AuditLog' is your model
      res.json(logs);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
      
  



module.exports = router;
