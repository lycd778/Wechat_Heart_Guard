/**
 * Created by lingxiao-Ching on 2016/11/11.
 */
var express = require('express');
var router = express.Router();
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
// router.get('/', function (req, res, next) {
//     var openid=req.query.openid;
//     res.render('binding',{title: '绑定手机',openid:openid});
// });
router.get('/', function (req, res, next) {
    var code = req.query.code; //微信返回的code值，作为下一步的票券
    //获取票券
    client.getAccessToken(code, function(err, result) {
        var openid = '';
        try{
            openid = result.data.openid;
        }catch(e){
            console.log("getOpenidErr: " + e);
        }
        console.log("openid: "+openid);
        res.render('binding',{title: '绑定手机',openid:openid});
    });

});
module.exports = router;
