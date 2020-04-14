var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');









router.get('/hello', function(req, res, next) {
    res.render('hello', { name: 'Michael Jackson' });
});





module.exports = router;