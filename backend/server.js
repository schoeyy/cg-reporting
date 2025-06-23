const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Import routes
const reportsRoutes = require("./routes/reports");
const generalRoutes = require("./routes/general");

const app = express();
const PORT = process.env.PORT || 5555;

// Middleware
app.use(helmet());
app.use(
    cors({
        origin: "http://localhost:5555",
        credentials: true,
    })
);
app.use(express.json());

// API Routes
app.use("/api/reports", reportsRoutes);
app.use("/api", generalRoutes);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "../public")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error:
            process.env.NODE_ENV === "development"
                ? err.message
                : "Internal server error",
    });
});

// 404 handler
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint not found",
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api`);
    console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
});
