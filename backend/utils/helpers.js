// Helper function to get unique categories from reports
const getCategories = (reports) => {
    const categories = [...new Set(reports.map((report) => report.category))];
    return categories.sort();
};

// Helper function to filter reports by category
const filterReportsByCategory = (reports, category) => {
    if (!category) return reports;

    return reports.filter(
        (report) => report.category.toLowerCase() === category.toLowerCase()
    );
};

// Helper function to find report by ID
const findReportById = (reports, id) => {
    return reports.find((report) => report.id === Number(id));
};

module.exports = {
    getCategories,
    filterReportsByCategory,
    findReportById,
};
