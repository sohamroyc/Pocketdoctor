// Load environment variables first
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const connectDB = require('./utils/db');

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests with more detail
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    console.log('Request headers:', req.headers);
    next();
});

// Serve static files with logging
app.use((req, res, next) => {
    console.log(`Attempting to serve static file: ${req.path}`);
    next();
});

// Serve static files from public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve JavaScript files from js directory
app.use('/js', express.static(path.join(__dirname, 'js')));

// Connect to database
connectDB();

// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        // Here you can integrate with an AI service if needed
        socket.emit('chat response', 'Thank you for your message: ' + msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/symptoms', require('./routes/symptoms'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/health-records', require('./routes/health-records'));

// Serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index1.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

// Update links in HTML files to match routes
app.get('/index1.html', (req, res) => {
    res.redirect('/');
});

app.get('/login.html', (req, res) => {
    res.redirect('/login');
});

app.get('/register.html', (req, res) => {
    res.redirect('/register');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        message: 'Something went wrong!',
        error: err.message 
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Serving static files from: ${__dirname}`);
    console.log('Available routes:');
    console.log('- / (index1.html)');
    console.log('- /login (login.html)');
    console.log('- /register (register.html)');
    console.log('- /js/* (JavaScript files)');
    console.log('- /public/* (Public files)');
}); 