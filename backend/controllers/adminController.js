import jwt from "jsonwebtoken";

// Admin login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ id: email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      return res.status(200).json({
        success: true,
        message: "Admin logged in successfully",
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Admin logout
export const logoutAdmin = async (req, res) => {
  try {
    // Since JWT is stateless, logout is handled on frontend by removing token
    // Optionally, you can implement a blacklist here if needed
    return res.status(200).json({
      success: true,
      message: "Admin logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
