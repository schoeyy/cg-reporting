const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

// Import routes
const reportsRoutes = require("./routes/reports");
const generalRoutes = require("./routes/general");

const app = express();
const PORT = process.env.PORT || 5555;
const isProduction = process.env.NODE_ENV === "production";

// Middleware
app.use(
    helmet({
        contentSecurityPolicy: false,
        crossOriginEmbedderPolicy: false,
        crossOriginResourcePolicy: false,
    })
);

app.use(
    cors({
        origin: isProduction ? false : ["http://localhost:3000"],
        credentials: true,
    })
);
app.use(express.json());

// Force HTTPS in production (when behind reverse proxy)
if (isProduction) {
    app.use((req, res, next) => {
        if (
            req.headers["x-forwarded-proto"] !== "https" &&
            req.headers["x-forwarded-proto"] !== undefined
        ) {
            return res.redirect(`https://${req.headers.host}${req.url}`);
        }
        next();
    });
}

// API Routes
app.use("/api/reports", reportsRoutes);
app.use("/api", generalRoutes);

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

// Serve static files from the React build directory (in production)
if (isProduction) {
    // Serve static files from the React build directory
    app.use(
        express.static(path.join(__dirname, "../public"), {
            setHeaders: (res, path) => {
                // Set proper headers for static files
                if (path.endsWith(".js")) {
                    res.setHeader("Content-Type", "application/javascript");
                } else if (path.endsWith(".css")) {
                    res.setHeader("Content-Type", "text/css");
                } else if (path.endsWith(".json")) {
                    res.setHeader("Content-Type", "application/json");
                }
                // Allow mixed content for development
                res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
            },
        })
    );

    // Handle React routing, return all requests to React app
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public", "index.html"));
    });
} else {
    // 404 handler (only for API routes in development)
    app.use("*", (req, res) => {
        res.status(404).json({
            success: false,
            message: "Endpoint not found",
        });
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api`);
    console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
    if (isProduction) {
        console.log(`🌐 Production mode: Serving React app from /public`);
    }
});
