import React from "react";
import { AlertCircle } from "lucide-react";
import { DASHBOARD_TEXTS } from "../constants/dashboardConstants";

const ErrorDisplay = ({ error, onRetry, onTestError }) => {
    return (
        <div className="container">
            <div className="error-container">
                <AlertCircle size={48} className="error-icon" />
                <h2>{DASHBOARD_TEXTS.ERROR_TITLE}</h2>
                <p>{error}</p>
                <div className="error-actions">
                    <button className="btn btn-primary" onClick={onRetry}>
                        {DASHBOARD_TEXTS.TRY_AGAIN}
                    </button>
                    <button className="btn btn-secondary" onClick={onTestError}>
                        {DASHBOARD_TEXTS.TEST_ERROR}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorDisplay;
