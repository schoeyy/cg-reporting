# Multi-stage Dockerfile for BI Dashboard
# Stage 1: Build Frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend package files
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm ci --only=production

# Copy frontend source code
COPY frontend/ ./

# Build the React app
RUN npm run build

# Stage 2: Build Backend
FROM node:18-alpine AS backend-builder

WORKDIR /app/backend

# Copy backend package files
COPY backend/package*.json ./

# Install backend dependencies
RUN npm ci --only=production

# Copy backend source code
COPY backend/ ./

# Stage 3: Production Runtime
FROM node:18-alpine AS production

# Install necessary packages
RUN apk add --no-cache wget

# Create app directory
WORKDIR /app

# Copy built frontend from stage 1
COPY --from=frontend-builder /app/frontend/build ./public

# Copy backend from stage 2
COPY --from=backend-builder /app/backend ./backend

# Copy startup script
COPY start.sh ./start.sh
RUN chmod +x ./start.sh

# Expose port
EXPOSE 5555

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:5555/api/health || exit 1

# Start the application
CMD ["./start.sh"] 