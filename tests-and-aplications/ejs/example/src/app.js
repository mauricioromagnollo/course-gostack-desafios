const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;
const VIEWS_PATH = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', VIEWS_PATH);

app.get('/', (request, response) => {
  response.render('pages/home.ejs');
});

app.listen(PORT, () => {
  console.log(`[*] Server running at http://localhost:${PORT}`);
});
