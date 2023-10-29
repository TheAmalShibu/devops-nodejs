const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data - replace this with your actual data or connect to a database
let users = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  if (newUser.name && newUser.age) {
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1 && updatedUser.name && updatedUser.age) {
    users[index] = { ...users[index], ...updatedUser };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found or invalid user data' });
  }
});

app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter((user) => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
