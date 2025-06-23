# BI Dashboard - React & Node.js

A modern, responsive Business Intelligence dashboard built with React and Node.js/Express. This application displays a list of reports fetched from a REST API and allows users to filter reports by category.

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
git clone <repository-url>
cd bi-dashboard
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

## 📚 API Endpoints

### Reports

-   `GET /api/reports` - Get all reports
-   `GET /api/reports?category=Finance` - Get reports filtered by category

### Categories

-   `GET /api/categories` - Get all available categories

### Testing

-   `GET /api/error` - Simulate server error for testing
-   `GET /api/health` - Health check endpoint

## 🎨 UI/UX Features

### Design System

-   **Color Palette**: Modern gradient backgrounds and consistent color scheme
-   **Typography**: Clean, readable fonts with proper hierarchy
-   **Spacing**: Consistent spacing using a modular scale
-   **Shadows**: Subtle shadows for depth and visual hierarchy

### Interactive Elements

-   **Hover Effects**: Cards lift and show overlay information
-   **Smooth Transitions**: All interactions have smooth animations
-   **Loading States**: Spinner animations during data fetching
-   **Error States**: User-friendly error messages with retry options

### Responsive Breakpoints

-   **Desktop**: 1200px+ (3-column grid)
-   **Tablet**: 768px-1199px (2-column grid)
-   **Mobile**: <768px (1-column grid)

## 🏗️ Project Structure

```
bi-dashboard/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.css
│   │   │   ├── ReportCard.js
│   │   │   ├── ReportCard.css
│   │   │   ├── CategoryFilter.js
│   │   │   └── CategoryFilter.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── package.json
└── README.md
```

## 🔧 Available Scripts

### Root Level

-   `npm run dev` - Start both frontend and backend in development mode
-   `npm run server` - Start only the backend server
-   `npm run client` - Start only the frontend development server
-   `npm run install-all` - Install dependencies for all packages
-   `npm run build` - Build the frontend for production

### Backend

-   `npm run dev` - Start server with nodemon (auto-restart on changes)
-   `npm start` - Start server in production mode

### Frontend

-   `npm start` - Start development server
-   `npm run build` - Build for production
-   `npm test` - Run tests
-   `npm run eject` - Eject from Create React App

## 🧪 Testing Error Handling

To test the error handling functionality:

1. Click the "Test Error Handling" button in the error state
2. Or manually visit: http://localhost:5555/api/error
