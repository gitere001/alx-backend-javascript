const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const text = 'Hello Holberton School!';

  res.setHeader('content-Type', 'text/plain');
  res.setHeader('content-length', text.length);
  res.statusCode = 200;
  res.write(Buffer.from(text));
});
app.listen(PORT, HOST, () => (
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`)
));

module.exports = app;
