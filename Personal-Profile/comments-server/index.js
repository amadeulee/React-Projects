const express = require('express');
const cors = require('cors');

const app = express();

app.listen('5000');

app.use(cors());
app.use(express.json());

let users = [
  {
    name: 'Amadeu Lee',
    time: '10:15:33',
    comment: 'Arrasou cara',
  },
  {
    name: 'Vitoria',
    time: '08:21:13',
    comment: 'Que maravilha',
  },
  {
    name: 'Pedro',
    time: '19:24:41',
    comment: 'Perfeito',
  },
];

app.route('/').get((req, res) => {
  res.json({ users });
});

app.route('/').post((req, res) => {
  users.push(req.body);
  res.json('Comentario adicionado');
});
