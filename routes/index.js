var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.send('Goodbye! from express\n');
});

module.exports = router;
