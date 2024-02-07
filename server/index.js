const express = require('express');
const cors = require('cors');
const url = require('url');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('./shrek'))


app.get('/shrek', (req, res) => {
    res.json({ message: "Hello from Shrek!", logo: url.pathToFileURL('./shrek/shrek.png'), url: url });
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001.`);
});