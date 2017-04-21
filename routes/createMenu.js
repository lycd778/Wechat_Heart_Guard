/**
 * Created by Administrator on 2017/4/11.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var wechatAPI = require('wechat-api');

//微信config
var config = {
    token: 'HeartGuard',
    appid: 'wxfb3801993da030d8',
    appsecret: '876c2adcaf2acba2a042121f0925b137',
    encodingAESKey: 'MO6S0KKt3bvuhZBnLshFDmkLEXNxFjVCM0U6NP5Z3g3'
};
//初始化API
var api = new wechatAPI(config.appid, config.appsecret);
var menu = fs.readFileSync('config/menu.json');

router.get('/', function (req, res, next) {

    //创建菜单
    api.createMenu(menu, function (err, result) {
        if (err) {
            console.log('error: ', +err);
        }
        console.log('创建菜单成功!'+JSON.stringify(result));
        res.send("创建菜单成功!"+JSON.stringify(result));
    });

});
module.exports = router;
