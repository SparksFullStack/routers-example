const express = require('express');
const port = process.env.PORT || 3001;

const raceRouter = require('./routers/raceRouter');
const villansRouter = require('./routers/villansRouter');

const server = express();
server.use(express.json());

// routers
server.use('/races', raceRouter);
server.use('/villans', villansRouter);
server.use('/', (req, res) => res.send('welcome home *acoustic guitar starts playing*'));


server.listen(port, () => console.log(`The server is listening on port ${port}`));