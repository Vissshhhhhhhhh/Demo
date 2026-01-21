const task = require("../models/task");
const jwt = require("jsonwebtoken");

exports.createTask = async (req, res) => {
  try {
    const { title, desc, status } = req.body;

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token missing" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.id || decoded.userId; // ✅ IMPORTANT

    if (!userId) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    const newTask = await task.create({
      title,
      desc,
      status,
      user: userId, // ✅ correct
    });

    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
