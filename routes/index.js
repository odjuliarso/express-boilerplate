var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) => {
  res.send('Bye from express\n');
	next();
});

module.exports = router;
