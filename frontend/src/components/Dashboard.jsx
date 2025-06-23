import React from "react";
import { Filter } from "lucide-react";
import useReports from "../hooks/useReports";
import DashboardHeader from "./DashboardHeader";
import ErrorDisplay from "./ErrorDisplay";
import LoadingSpinner from "./LoadingSpinner";
import ReportsList from "./ReportsList";
import CategoryFilter from "./CategoryFilter";
import { DASHBOARD_TEXTS } from "../constants/dashboardConstants";
import "../css/Dashboard.css";

const Dashboard = () => {
    const {
        reports,
        categories,
        selectedCategory,
        loading,
        error,
        handleCategoryChange,
        handleTestError,
        retryFetch,
    } = useReports();

    if (error) {
        return (
            <ErrorDisplay
                error={error}
                onRetry={retryFetch}
                onTestError={handleTestError}
            />
        );
    }

    return (
        <div className="container">
            <DashboardHeader
                reportsCount={reports.length}
                categoriesCount={categories.length}
            />

            <section className="filter-section">
                <div className="filter-header">
                    <Filter size={20} />
                    <h3>{DASHBOARD_TEXTS.FILTER_TITLE}</h3>
                </div>
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
            </section>

            <section className="reports-section">
                {loading ? (
                    <LoadingSpinner message={DASHBOARD_TEXTS.LOADING_MESSAGE} />
                ) : (
                    <ReportsList
                        reports={reports}
                        selectedCategory={selectedCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                )}
            </section>
        </div>
    );
};

export default Dashboard;
