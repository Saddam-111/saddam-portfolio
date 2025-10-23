import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ success: false, message: "Not authorized" });
    }

    // Bearer token
    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
