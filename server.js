// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { Worker } = require('mediasoup');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let worker; // Declare worker variable outside of the event listener

// Create a mediasoup worker
async function createWorker() {
  try {
    worker = new Worker({
      logLevel: 'debug', // Adjust log level as needed
    });
    await worker.init(); // Initialize the worker
    initializeRouter();
  } catch (error) {
    console.error('Error creating mediasoup worker:', error);
  }
}

let router;

// Initialize mediasoup router
async function initializeRouter() {
  router = await worker.createRouter({
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2,
      },
      {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000,
        parameters: {
          'x-google-start-bitrate': 1000,
        },
      },
    ],
  });
}

io.on('connection', (socket) => {
  console.log('A user connected');

  // Rest of the code remains unchanged...
});

// Call createWorker function to start the worker
createWorker();

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
