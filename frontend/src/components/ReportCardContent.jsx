import React from "react";
import ReportCardHeader from "./ReportCardHeader";
import { REPORT_TEXTS } from "../constants/reportConstants";

const ReportCardContent = ({ report, formatDate, onViewReport, loading }) => {
    return (
        <div className="report-card">
            <ReportCardHeader category={report.category} />

            <div className="card-content">
                <h3 className="report-title">{report.name}</h3>
                <p className="report-description">{report.description}</p>
            </div>

            <div className="card-footer">
                <div className="creation-date">
                    <span>{formatDate(report.creationDate)}</span>
                </div>

                <button
                    className="view-report-btn"
                    onClick={onViewReport}
                    disabled={loading}
                    aria-label={`View details for ${report.name}`}
                >
                    {loading ? REPORT_TEXTS.LOADING : REPORT_TEXTS.VIEW_REPORT}
                </button>
            </div>
        </div>
    );
};

export default ReportCardContent;
