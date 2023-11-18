// Create web server

const express = require('express');
const app = express();

const commentRouter = require('./routes/comments');
const homeRouter = require('./routes/home');

const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router
app.use('/', homeRouter);
app.use('/comments', commentRouter);

// Listen
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});