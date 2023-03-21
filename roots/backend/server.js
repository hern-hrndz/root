import express from 'express';
import path from 'path';

const app = express();

// set ejs as the view enginer
app.set('view engine', 'ejs');

// specify the directory
// const path = require('path');
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.set('views', path.join(__dirname, '../frontend/views'));

// serve statc files from fonnent folder
app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = process.env.PORT || 3002;

// render the index.ejs file when the root URL is requested
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
