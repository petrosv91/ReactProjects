require('dotenv/config');
const path = require('path');

const cors = require('cors');
const { ipcRenderer } = require('electron');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const apiRoute = require('./routes/api');

// get an availaible port
const port = ipcRenderer.sendSync('request-port');

// Body-parser
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
app.use('/api', apiRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.log('Error while connected to DB', err);
    const res = client.connections[0];
    console.log('Connected to DB:');
    console.log('{');
    console.log('   Port:', res.port);
    console.log('   DB Name:', res.name);
    console.log('   Host:', res.host);
    console.log('}');
  },
);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
