const express = require("express");
const router = express.Router();
const mockReports = require("../data/mockReports");
const {
    getCategories,
    filterReportsByCategory,
    findReportById,
} = require("../utils/helpers");

// GET /api/reports - Returns all reports with optional category filtering
router.get("/", (req, res) => {
    try {
        const { category } = req.query;
        const filteredReports = filterReportsByCategory(mockReports, category);

        res.json({
            success: true,
            data: filteredReports,
            total: filteredReports.length,
            categories: getCategories(mockReports),
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});

// GET /api/reports/:id - Returns a specific report by ID
router.get("/:id", (req, res) => {
    try {
        const report = findReportById(mockReports, req.params.id);

        if (report) {
            res.json({ success: true, data: report });
        } else {
            res.status(404).json({
                success: false,
                message: "Report not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
});

module.exports = router;
