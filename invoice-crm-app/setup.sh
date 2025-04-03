#!/bin/bash

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend
npm install

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd ../frontend
npm install

# Return to root directory
cd ..

# Create start script
echo "Creating start script..."
cat > start.sh << 'EOF'
#!/bin/bash

# Start backend server
echo "Starting backend server..."
cd backend
npm run dev &

# Wait a moment for backend to start
sleep 2

# Start frontend development server
echo "Starting frontend development server..."
cd ../frontend
npm run dev

# The script will keep running until you press Ctrl+C
EOF

# Make start script executable
chmod +x start.sh

echo "Setup complete! Run './start.sh' to start the application."