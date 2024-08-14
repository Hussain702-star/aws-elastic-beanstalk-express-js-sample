const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello my name is Huss and This is my pipeline! Now I am trying to make a continuous pipeline.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
