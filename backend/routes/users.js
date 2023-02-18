const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = [
    { id: 1, firstName: 'Luca', lastName: 'Ruozzi' },
    { id: 2, firstName: 'Mario', lastName: 'Rossi' },
    { id: 3, firstName: 'Paolo', lastName: 'Turci' },
  ];

  res.json(data);
});

module.exports = router;
