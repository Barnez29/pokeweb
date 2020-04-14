var express = require('express');
var router = express.Router();

// get fetch
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pokehome' });
});









































// export line - do not touch
module.exports = router;