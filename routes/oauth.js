/**
 * Created by Administrator on 2017/3/31.
 */
var express = require('express');
var router = express.Router();
var wechatAPI = require('wechat-api');
var OAuth = require('wechat-oauth');
var request = require('request');
//微信
var config = {
    token: 'HeartGuard',
    appid: 'wxfb3801993da030d8',
    appsecret: '876c2adcaf2acba2a042121f0925b137',
    encodingAESKey: 'MO6S0KKt3bvuhZBnLshFDmkLEXNxFjVCM0U6NP5Z3g3'
};
//初始化wechat-api模块
var api = new wechatAPI(config.appid, config.appsecret);

//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);

router.get('/', function (req, res, next) {

    var redirectUrl = "http://heartguardwx.xzkf365.com/binding";
    var url = client.getAuthorizeURL(redirectUrl, '123', 'snsapi_base');
    console.log("jsUrl: "+url);
    res.redirect(url);
});
module.exports = router;