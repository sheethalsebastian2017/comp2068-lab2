
const express = require('express');
const doMath = require('./math');


const app = express();
const PORT = 3000;

app.get('/', doMath);


app.listen(PORT);
console.log(`Application is listening on http://localhost:${PORT}`);