/**
 * Created by lingxiao-Ching on 2017/3/15.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var wechat = require('wechat');
var wechatAPI = require('wechat-api');
var OAuth = require('wechat-oauth');
var mysql = require('mysql');
var autoResponse = require('../wechat/autoResponse.js');
var menuResponse = require('../wechat/menuResponse.js');

//微信
var config = {
    token: 'HeartGuard',
    appid: 'wxfb3801993da030d8',
    appsecret: '876c2adcaf2acba2a042121f0925b137',
    encodingAESKey: 'MO6S0KKt3bvuhZBnLshFDmkLEXNxFjVCM0U6NP5Z3g3'
};
//连接数据库
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'weixin_ydka',
    port: 3306
});
db.connect();

//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);
//初始化wechat-api模块
var api = new wechatAPI(config.appid, config.appsecret, function (callback) {
    var sql = 'SELECT * FROM accesstoken WHERE appid = "wxfb3801993da030d8"';
    db.query(sql, function (err, result) {
        if (err) {
            return callback(err);
        }
        console.log("db_access_token: " + JSON.stringify(result[0].access_token));
        return callback(null, result[0].access_token);
    });
}, function (token, callback) {
    var sql = 'UPDATE accesstoken SET access_token = "' + token.accessToken + '" where appid = "wxfb3801993da030d8"';
    //var fields = [token.access_token, token.expires_in, token.refresh_token, token.openid, token.scope, token.create_at];
    console.log("token: " + JSON.stringify(token));
    db.query(sql, function (err, result) {
        return callback(err);
    });
});

var menu = fs.readFileSync('config/menu.json');

//创建菜单
api.createMenu(menu, function (err, result) {
    if (err) {
        console.log('error: ', +err);
    }
    console.log('创建菜单成功!');
});

router.use(express.query());
router.use('/', wechat(config, function (req, res, next) {
    console.log(req.weixin);
    var message = req.weixin;
    var msgType = message.MsgType;
    if (msgType === 'event' && message.Event === 'subscribe') {
        var openid = message.FromUserName;
        api.getUser(openid, function (err, result) {
            var userInfo = result;
            console.log("userInfo: " + JSON.stringify(userInfo));
            var sql = 'select * from weixinuser where openid = "' + openid + '"';
            db.query(sql, function (err, result) {
                if (err)
                    console.log(err);
                console.log("query_result: "+result.length);
                if (result.length === 0) {
                    var iSql = 'INSERT INTO weixinuser VALUES("' +userInfo.openid + '","' + userInfo.nickname + '","' + userInfo.sex + '","' + userInfo.province + '","' + userInfo.city + '", "' + userInfo.country + '","","","","","","",0,"")';
                    db.query(iSql,function (err, result) {
                        if (err) console.log(err);
                        console.log("createUserInfo: "+JSON.stringify(result));
                    });
                } else {
                     if (result[0].nickname===null){
                        uSql = 'UPDATE weixinuser SET nickname = "' + userInfo.nickname + '","' + userInfo.sex + '","' + userInfo.province + '","' + userInfo.city + '", "' + userInfo.country + '" where openid = "' + userInfo.openid + '" ';
                         db.query(uSql,function (err, result) {
                             if (err) console.log(err);
                             console.log("updateNickname: "+JSON.stringify(result));
                         });
                    }
                     console.log("db_userInfo: " + JSON.stringify(result[0]));
                }
            });

        });
        res.reply("嗨，我是心脏卫士(HeartGuard)的小管家，谢谢亲爱的你关注我。\r\n\r\n我们的任务是发布优质的健康咨讯，排忧患、读知心、看实时。\r\n\r\n回复【1】，查询心脏健康小知识\r\n回复【2】，查询运动普及小知识\r\n回复【3】，查询商务会议内容\r\n回复【4】，查询优秀小视频\r\n回复【心康经历】，查询心心医医追踪的患者康复经历");
    }
    else if (msgType === 'text') {
        autoResponse(res, message);
    } else if (msgType === 'event' && message.Event === 'CLICK') {
        menuResponse(res, message, api,db);
    }
}));

module.exports = router;
/**
 * Created by Administrator on 2017/3/13.
 */
