const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const { CONFIG } = require('./config/config')
require('./config/db');
const feedRoute = require('./modules/Feeds/feeds.route')

const app = express();
const port = CONFIG.SERVER.HOST_PORT || 3000;

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

app.use('/api', feedRoute);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});