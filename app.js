const express = require('express');
const morgan = require('morgan');
const renderRouter = require('./routes/renderRoutes');
const userRouter = require('./routes/userRoutes');
const biodataRouter = require('./routes/biodataRoutes');
const historyRouter = require('./routes/historyRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', renderRouter);
app.use('/api/user-game', userRouter);
app.use('/api/user-game-biodata', biodataRouter);
app.use('/api/user-game-history', historyRouter);

module.exports = app;
