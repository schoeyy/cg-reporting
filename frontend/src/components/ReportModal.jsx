import React from "react";
import { X, Loader2 } from "lucide-react";
import {
    CATEGORY_ICONS,
    REPORT_TEXTS,
    STYLES,
} from "../constants/reportConstants";
import { formatCamelCase } from "../utils/textUtils";

const ReportModal = ({
    isOpen,
    onClose,
    loading,
    error,
    fullReport,
    formatDate,
    onRetry,
}) => {
    if (!isOpen) return null;

    const icon = fullReport
        ? CATEGORY_ICONS[fullReport.category] || CATEGORY_ICONS.Default
        : null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button
                    className="modal-close"
                    onClick={onClose}
                    aria-label={REPORT_TEXTS.CLOSE}
                    disabled={loading}
                >
                    <X size={22} />
                </button>

                {loading ? (
                    <div className="modal-loading">
                        <Loader2 className="loading-spinner" size={40} />
                        <p>{REPORT_TEXTS.LOADING_DETAILS}</p>
                    </div>
                ) : error ? (
                    <div className="modal-error">
                        <p>{error}</p>
                        <button className="btn btn-primary" onClick={onRetry}>
                            {REPORT_TEXTS.TRY_AGAIN}
                        </button>
                    </div>
                ) : (
                    fullReport && (
                        <>
                            <div className="modal-header">
                                {icon}
                                <h2>{fullReport.name}</h2>
                            </div>
                            <div className="modal-meta">
                                <span
                                    className="category-badge"
                                    style={STYLES.MODAL_BADGE}
                                >
                                    {fullReport.category}
                                </span>
                                <span className="modal-date">
                                    {formatDate(fullReport.creationDate)}
                                </span>
                            </div>
                            <div className="modal-body">
                                <p style={STYLES.SUMMARY}>
                                    {fullReport.details.summary}
                                </p>

                                {fullReport.details.stats && (
                                    <div style={STYLES.STATS_CONTAINER}>
                                        <strong>
                                            {REPORT_TEXTS.KEY_STATS}
                                        </strong>
                                        <ul style={STYLES.LIST_STYLES}>
                                            {Object.entries(
                                                fullReport.details.stats
                                            ).map(([key, value]) => (
                                                <li key={key}>
                                                    <strong>
                                                        {formatCamelCase(key)}:
                                                    </strong>{" "}
                                                    {value}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {fullReport.details.highlights && (
                                    <div>
                                        <strong>
                                            {REPORT_TEXTS.HIGHLIGHTS}
                                        </strong>
                                        <ul style={STYLES.LIST_STYLES}>
                                            {fullReport.details.highlights.map(
                                                (highlight, index) => (
                                                    <li key={index}>
                                                        {highlight}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
};

export default ReportModal;
