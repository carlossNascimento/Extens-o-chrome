const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ ok: true, msg: 'Hello from API!' });
});

app.get('/health', (req, res) => res.json({ ok: true }));

const port = process.env.PORT || 3000;
let server;
if (require.main === module) {
  server = app.listen(port, () => console.log(`API listening on ${port}`));
}

module.exports = { app, start: () => new Promise((resolve) => { server = app.listen(port, resolve); }), stop: () => server && server.close() };
