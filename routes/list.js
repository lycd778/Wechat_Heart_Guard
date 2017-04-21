/**
 * Created by lingxiao-Ching on 2016/11/23.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
var OAuth = require('wechat-oauth');

//微信
var config = {
    token: 'HeartGuard',
    appid: 'wxfb3801993da030d8',
    appsecret: '876c2adcaf2acba2a042121f0925b137',
    encodingAESKey: 'MO6S0KKt3bvuhZBnLshFDmkLEXNxFjVCM0U6NP5Z3g3'
};

//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);

router.get('/', function (req, res, next) {
    var code = req.query.code;
    client.getAccessToken(code, function (err, result) {
        var openid = result.data.openid;
        console.log("listOpenid: " +openid);
        //var openid='\'oPPfSww-UoP3AKLQ43-d07CmyrVU\'';
        var url = "http://heathcoudapi.xzkf365.com/api/qq/Reportslist?openid="+openid;
        console.log("listUrl:"+url);
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                list = null;
                var date = JSON.parse(body);
                console.log("list: " + body);
                list = date.results;
                res.render('list', {title: '我的报告', list: list});
            } else if (!error && response.statusCode == 500) {
                res.render('error', {
                    message: '需要先绑定手机才能查看"我的报告"',
                    error: {}
                });
            }
        });
    });
});
module.exports = router;
