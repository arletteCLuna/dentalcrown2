const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 3000;

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

const server = https.createServer(options, app);

app.get('/', (req, res) => {
  res.send('¡Seguro!');
});

server.listen(port, () => {
  console.log(`Servidor HTTPS iniciado en el puerto ${port}`);
});
