# BI Dashboard - React & Node.js

A modern, responsive Business Intelligence dashboard built with React and Node.js/Express. This application displays a list of reports fetched from a REST API and allows users to filter reports by category.

## 🌐 Live Example

You can view a live demo of this application at: **[reports.schofield.dev](https://reports.schofield.dev)**

## 🚀 Features

### Frontend (React)

-   **Modern UI/UX**: Clean, responsive design with glassmorphism effects
-   **Report Cards**: Beautiful card layout displaying report name, category, creation date, and description
-   **Category Filtering**: Dropdown filter to view reports by specific categories
-   **Loading States**: Smooth loading animations and skeleton screens
-   **Error Handling**: Comprehensive error handling with retry functionality
-   **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
-   **Hover Effects**: Interactive card overlays with additional information
-   **Real-time Stats**: Live count of reports and categories in the header

### Backend (Node.js/Express)

-   **RESTful API**: Clean API endpoints for reports and categories
-   **CORS Configuration**: Properly configured for frontend integration
-   **Query Parameters**: Support for filtering reports by category
-   **Error Simulation**: Test endpoint for frontend error handling
-   **Security**: Helmet.js for security headers
-   **Mock Data**: 12 diverse report records across 8 categories

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

-   **Node.js** (v14 or higher)
-   **npm** (v6 or higher)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone git@github.com:schoeyy/cg-reporting.git
cd cg-reporting
```

### 2. Install Dependencies

Install all dependencies for both frontend and backend:

```bash
npm run install-all
```

Or install manually:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

### 3. Start the Application

#### Option A: Run Both Frontend and Backend Together

```bash
npm run dev
```

#### Option B: Run Separately

**Backend (Terminal 1):**

```bash
npm run server
# or
cd backend && npm run dev
```

**Frontend (Terminal 2):**

```bash
npm run client
# or
cd frontend && npm start
```

### 4. Access the Application

-   **Frontend**: http://localhost:3000
-   **Backend API**: http://localhost:5555
-   **API Health Check**: http://localhost:5555/api/health
