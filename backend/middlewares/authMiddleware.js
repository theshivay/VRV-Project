const { config } = require('dotenv');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };

const authorize = (roles = []) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
  
  module.exports = authorize;
  



module.exports = { authenticate, authorize };
