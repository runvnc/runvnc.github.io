const express = require('express');
const mustacheExpress = require('mustache-express');
const fs = require('fs');
const path = require('path');

const app = express();

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'static')));

// Route for the root
app.get('/', (req, res) => {
   const albumData = JSON.parse(fs.readFileSync('album.json', 'utf-8'));
   res.render('index', albumData);
});

const PORT = 4000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});

