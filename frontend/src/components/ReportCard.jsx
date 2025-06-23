import React, { useEffect } from "react";
import useReportDetails from "../hooks/useReportDetails";
import useModal from "../hooks/useModal";
import ReportCardContent from "./ReportCardContent";
import ReportModal from "./ReportModal";
import "../css/ReportCard.css";

const ReportCard = ({ report, formatDate }) => {
    const { loading, fullReport, error, fetchReportDetails, cleanup } =
        useReportDetails();

    const { isOpen, openModal, closeModal } = useModal(cleanup);

    const handleViewReport = () => {
        openModal();
        fetchReportDetails(report.id);
    };

    const handleRetry = () => {
        fetchReportDetails(report.id);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cleanup();
        };
    }, [cleanup]);

    return (
        <>
            <ReportCardContent
                report={report}
                formatDate={formatDate}
                onViewReport={handleViewReport}
                loading={loading}
            />

            <ReportModal
                isOpen={isOpen}
                onClose={closeModal}
                loading={loading}
                error={error}
                fullReport={fullReport}
                formatDate={formatDate}
                onRetry={handleRetry}
            />
        </>
    );
};

export default ReportCard;
