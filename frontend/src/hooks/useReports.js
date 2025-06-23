import { useState, useEffect } from "react";
import axios from "axios";
import { API_ENDPOINTS, ERROR_MESSAGES } from "../constants/dashboardConstants";

const useReports = () => {
    const [reports, setReports] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchReports = async (category = "") => {
        try {
            setLoading(true);
            setError(null);

            const url = category
                ? `${API_ENDPOINTS.REPORTS}?category=${encodeURIComponent(
                      category
                  )}`
                : API_ENDPOINTS.REPORTS;

            const response = await axios.get(url);

            if (response.data.success) {
                setReports(response.data.data);
                setCategories(response.data.categories || []);
            } else {
                throw new Error(
                    response.data.message || ERROR_MESSAGES.FETCH_FAILED
                );
            }
        } catch (err) {
            console.error("Error fetching reports:", err);
            setError(
                err.response?.data?.message ||
                    err.message ||
                    ERROR_MESSAGES.FETCH_FAILED
            );
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(API_ENDPOINTS.CATEGORIES);
            if (response.data.success) {
                setCategories(response.data.data);
            }
        } catch (err) {
            console.error("Error fetching categories:", err);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        fetchReports(category);
    };

    const handleTestError = async () => {
        try {
            await axios.get(API_ENDPOINTS.ERROR);
        } catch (err) {
            setError(err.response?.data?.message || ERROR_MESSAGES.TEST_ERROR);
        }
    };

    const retryFetch = () => {
        fetchReports(selectedCategory);
    };

    useEffect(() => {
        fetchReports();
        fetchCategories();
    }, []);

    return {
        reports,
        categories,
        selectedCategory,
        loading,
        error,
        handleCategoryChange,
        handleTestError,
        retryFetch,
    };
};

export default useReports;
