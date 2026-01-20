const express = require('express');
const fonts = require('./fonts');
const stylize = require('./stylize');

const app = express();

app.get('/', (req, res) => {
  res.send('DML Fancy Font API is running');
});

app.get('/api/fancy', (req, res) => {
  const word = req.query.word;

  if (!word) {
    return res.json({
      status: false,
      message: "Missing ?word parameter"
    });
  }

  const results = fonts.map(f =>
    stylize(word, f.map)
  );

  res.json({
    status: true,
    count: results.length,
    results
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});