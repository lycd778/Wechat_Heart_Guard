/**
 * Created by lingxiao-Ching on 2017/3/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function (req, res, next) {
    var file = fs.readFileSync('config/MP_verify_Zxh1jEggXVhuR0W2.txt');
    res.set("Content-Type",'text/plain');
    res.send(file);
});
module.exports = router;