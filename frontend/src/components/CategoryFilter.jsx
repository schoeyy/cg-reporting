import React from "react";
import { ChevronDown, X } from "lucide-react";
import "../css/CategoryFilter.css";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    const handleClearFilter = () => {
        onCategoryChange("");
    };

    return (
        <div className="category-filter">
            <div className="filter-controls">
                <div className="select-wrapper">
                    <select
                        value={selectedCategory}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="category-select"
                    >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <ChevronDown size={16} className="select-arrow" />
                </div>

                {selectedCategory && (
                    <button
                        onClick={handleClearFilter}
                        className="clear-filter-btn"
                        title="Clear filter"
                    >
                        <X size={16} />
                        Clear
                    </button>
                )}
            </div>

            {selectedCategory && (
                <div className="active-filter">
                    <span className="filter-label">Active filter:</span>
                    <span className="filter-value">{selectedCategory}</span>
                </div>
            )}
        </div>
    );
};

export default CategoryFilter;
