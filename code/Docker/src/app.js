const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker!');
});

app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});
