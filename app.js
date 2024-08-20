const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello my name is Huss and This is my pipeline! And now we test it.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
