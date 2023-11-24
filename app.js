const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const cors = require('cors')

app.use(cors())

const data = require('./db.json');
const staticsData = require('./utils/statics')

app.get('/app_info', (req, res) => {
  res.json(data.app_info);
});

app.get('/system_users', (req, res) => {
  res.json(data.system_users);
});

app.get('/user_detail', (req, res) => {
  res.json(data.user_detail);
});

app.get('/statics', (req, res) => {
  res.json(staticsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
