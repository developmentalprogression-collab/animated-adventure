const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let orders = [];

app.get('/orders', (req, res) => res.json(orders));

app.post('/orders', (req, res) => {
  orders.push(req.body);
  res.json({ ok: true });
});

app.listen(3000, () => console.log('PharmaBot server running on port 3000'));
