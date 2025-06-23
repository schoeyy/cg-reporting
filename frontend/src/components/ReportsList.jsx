import React from "react";
import { BarChart3 } from "lucide-react";
import ReportCard from "./ReportCard";
import { formatDate } from "../utils/dateUtils";
import { DASHBOARD_TEXTS } from "../constants/dashboardConstants";

const ReportsList = ({ reports, selectedCategory, onCategoryChange }) => {
    const getReportsTitle = () => {
        return selectedCategory
            ? `${selectedCategory} Reports`
            : DASHBOARD_TEXTS.ALL_REPORTS;
    };

    const getReportsCount = () => {
        const count = reports.length;
        return `${count} report${count !== 1 ? "s" : ""}`;
    };

    const getEmptyStateMessage = () => {
        return selectedCategory
            ? `No reports found in the "${selectedCategory}" category.`
            : DASHBOARD_TEXTS.NO_REPORTS_AVAILABLE;
    };

    if (reports.length === 0) {
        return (
            <div className="empty-state">
                <BarChart3 size={64} className="empty-icon" />
                <h3>{DASHBOARD_TEXTS.NO_REPORTS_FOUND}</h3>
                <p>{getEmptyStateMessage()}</p>
                {selectedCategory && (
                    <button
                        className="btn btn-primary"
                        onClick={() => onCategoryChange("")}
                    >
                        {DASHBOARD_TEXTS.VIEW_ALL_REPORTS}
                    </button>
                )}
            </div>
        );
    }

    return (
        <>
            <div className="reports-header">
                <h2>{getReportsTitle()}</h2>
                <span className="reports-count">{getReportsCount()}</span>
            </div>
            <div className="reports-grid">
                {reports.map((report) => (
                    <ReportCard
                        key={report.id}
                        report={report}
                        formatDate={formatDate}
                    />
                ))}
            </div>
        </>
    );
};

export default ReportsList;
