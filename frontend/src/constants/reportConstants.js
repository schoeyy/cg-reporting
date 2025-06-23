import {
    Car,
    Wrench,
    CreditCard,
    Users,
    TrendingUp,
    BarChart3,
    ShoppingCart,
    Globe,
    ThumbsUp,
} from "lucide-react";

export const REPORT_TEXTS = {
    VIEW_REPORT: "View Report",
    LOADING: "Loading...",
    LOADING_DETAILS: "Loading report details...",
    TRY_AGAIN: "Try Again",
    KEY_STATS: "Key Stats:",
    HIGHLIGHTS: "Highlights:",
    CLOSE: "Close",
};

export const ERROR_MESSAGES = {
    REPORT_NOT_FOUND:
        "Report not found. It may have been removed or is no longer available.",
    SERVER_ERROR: "Server error. Please try again later.",
    NETWORK_ERROR: "Network error. Please check your connection and try again.",
    FETCH_FAILED: "Failed to load report details. Please try again.",
    LOAD_FAILED: "Failed to load report",
};

export const API_ENDPOINTS = {
    REPORT_DETAILS: "/api/reports",
};

export const CATEGORY_ICONS = {
    Sales: <ShoppingCart size={20} color="#E30613" />,
    Service: <Wrench size={20} color="#E30613" />,
    Finance: <CreditCard size={20} color="#E30613" />,
    Motability: <Users size={20} color="#E30613" />,
    Marketing: <TrendingUp size={20} color="#E30613" />,
    Stock: <Car size={20} color="#E30613" />,
    "Customer Service": <ThumbsUp size={20} color="#E30613" />,
    Digital: <Globe size={20} color="#E30613" />,
    Default: <BarChart3 size={20} color="#E30613" />,
};

export const STYLES = {
    CARD_BADGE: {
        backgroundColor: "#fff0f0",
        color: "#E30613",
        border: "1px solid #E30613",
    },
    MODAL_BADGE: {
        background: "#e0e7ef",
        color: "#374151",
    },
    SUMMARY: {
        fontWeight: 500,
        marginBottom: 12,
    },
    STATS_CONTAINER: {
        marginBottom: 12,
    },
    LIST_STYLES: {
        margin: "8px 0 0 18px",
        padding: 0,
    },
};
