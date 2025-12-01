const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<h1>Hello from Elastic Beanstalk!</h1><p>Deployed at ${new Date().toISOString()}</p>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


