import React from "react";
import { BarChart3 } from "lucide-react";
import { DASHBOARD_TEXTS } from "../constants/dashboardConstants";

const DashboardHeader = ({ reportsCount, categoriesCount }) => {
    return (
        <header className="dashboard-header">
            <div className="header-content">
                <div className="header-left">
                    <BarChart3 size={32} className="header-icon" />
                    <div>
                        <h1>{DASHBOARD_TEXTS.TITLE}</h1>
                        <p>{DASHBOARD_TEXTS.SUBTITLE}</p>
                    </div>
                </div>
                <div className="header-stats">
                    <div className="stat">
                        <span className="stat-number">{reportsCount}</span>
                        <span className="stat-label">
                            {DASHBOARD_TEXTS.REPORTS_LABEL}
                        </span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">{categoriesCount}</span>
                        <span className="stat-label">
                            {DASHBOARD_TEXTS.CATEGORIES_LABEL}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;
