// adminMiddleware.js
const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json({ error: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Forbidden. Admin access only." });
    }
    req.user = decoded;
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = adminAuth;
