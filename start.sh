#!/bin/sh

# Start the backend server (which will also serve the React app)
echo "🚀 Starting BI Dashboard application..."
cd /app/backend
NODE_ENV=production PORT=5555 node server.js 