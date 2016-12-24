var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', {title: '登陆系统'});
});

router.post('/login', function (req, res, next) {
    res.send(req.body.userName + "      " + req.body.pw);
});
router.get('/admin', function (reg, res) {
    var options = {
        root: __dirname + '/../public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    res.sendFile('index.html', options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        }
    });
});

module.exports = router;
