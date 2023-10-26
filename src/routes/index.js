const express = require('express');
const router = express.Router();
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
    version: '1.0.0',
  });
});

const users = [{
  id: 1,
  name: "Admin",
  password: 'admin'
}];

//Login
router.post('/login', (req, res) => {
  const {name, password} = req.body;

  const user = users.find(user => user.name === name && user.password === password);

  if (user) {
     return res.status(200).json(user);
  }

  return res.status(401).json({ message: 'Credenciais inválidas'});

});

module.exports = router;