const express = require('express');
const path = require('path');
const morgan = require('morgan');
const apiRouter = require('./routes/api');
const statusRouter = require('./routes/status');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

// Middleware
app.use(morgan('dev'));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/services', apiRouter);
app.use('/api/status', statusRouter);

// Route racine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ajoutez ces routes avant le middleware 404
app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/status', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;