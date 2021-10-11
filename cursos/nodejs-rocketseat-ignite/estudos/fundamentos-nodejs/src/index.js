const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({message: 'Hello World'});
});

app.get('/courses', (request, response) => {
  return response.json(["curso1", "curso2", "curso3"]);
});

app.post('/courses', (request, response) => {
  return response.json(["curso1", "curso2", "curso3", "curso4"]);
});

app.put('/courses/:id', (request, response) => {
  const params = request.params;

  console.log(params);

  return response.json(["curso6", "curso2", "curso3", "curso4"]);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(["curso6", "curso2", "curso3", "curso4"]);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(["curso6", "curso2", "curso4"]);
});

app.listen(3333, () => {
  console.log('[*] Server running at: http://localhost:3333');
});