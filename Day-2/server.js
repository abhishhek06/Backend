import express from 'express';

const app = express(); //server instance 

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
});

// To run the server, use the command: node server.js
// npx nodemon server.js 


// API: Application Programming Interface: if two software interact with each other it is called API

// REST API: Representational State Transfer API

// protocols: HTTP/HTTPS
// methods: GET, POST, PUT, PATCH, DELETE