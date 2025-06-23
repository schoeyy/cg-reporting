const express = require("express");
const router = express.Router();
const mockReports = require("../data/mockReports");
const { getCategories } = require("../utils/helpers");

// GET /api/categories - Returns all available categories
router.get("/categories", (req, res) => {
    try {
        res.json({
            success: true,
            data: getCategories(mockReports),
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});

// GET /api/health - Health check endpoint
router.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString(),
    });
});

// GET /api/error - Simulates an error for testing frontend error handling
router.get("/error", (req, res) => {
    res.status(500).json({
        success: false,
        message: "Simulated server error for testing purposes",
        error: "This is a test error to verify frontend error handling",
    });
});

module.exports = router;
