import React from "react";
import { CATEGORY_ICONS, STYLES } from "../constants/reportConstants";

const ReportCardHeader = ({ category }) => {
    const icon = CATEGORY_ICONS[category] || CATEGORY_ICONS.Default;

    return (
        <div className="card-header">
            <div className="card-icon">{icon}</div>
            <div className="card-meta">
                <span className="category-badge" style={STYLES.CARD_BADGE}>
                    {category}
                </span>
            </div>
        </div>
    );
};

export default ReportCardHeader;
