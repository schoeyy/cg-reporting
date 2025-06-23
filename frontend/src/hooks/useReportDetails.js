import { useState, useCallback } from "react";
import axios from "axios";
import { API_ENDPOINTS, ERROR_MESSAGES } from "../constants/reportConstants";

const useReportDetails = () => {
    const [loading, setLoading] = useState(false);
    const [fullReport, setFullReport] = useState(null);
    const [error, setError] = useState(null);

    const cleanup = useCallback(() => {
        setFullReport(null);
        setError(null);
        setLoading(false);
    }, []);

    const fetchReportDetails = useCallback(async (reportId) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                `${API_ENDPOINTS.REPORT_DETAILS}/${reportId}`
            );

            if (response.data.success) {
                setFullReport(response.data.data);
            } else {
                throw new Error(
                    response.data.message || ERROR_MESSAGES.LOAD_FAILED
                );
            }
        } catch (err) {
            console.error("Error fetching report details:", err);

            if (err.response?.status === 404) {
                setError(ERROR_MESSAGES.REPORT_NOT_FOUND);
            } else if (err.response?.status >= 500) {
                setError(ERROR_MESSAGES.SERVER_ERROR);
            } else if (err.code === "NETWORK_ERROR") {
                setError(ERROR_MESSAGES.NETWORK_ERROR);
            } else {
                setError(
                    err.response?.data?.message || ERROR_MESSAGES.FETCH_FAILED
                );
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        fullReport,
        error,
        fetchReportDetails,
        cleanup,
    };
};

export default useReportDetails;
