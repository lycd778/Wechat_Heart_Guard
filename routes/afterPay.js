/**
 * Created by Administrator on 2017/4/1.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');
var request = require('request');
var middleware = require('wechat-pay').middleware;
var mysql = require('mysql');
var moment = require('moment');

//连接数据库
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'weixin_ydka',
    port: 3306
});
db.connect();

var initConfig = {
    partnerKey: 'yidekangan1234567891234567891234',
    appId: 'wxfb3801993da030d8',
    mchId: '1388932902',
    notifyUrl: "http://heartguardwx.xzkf365.com/afterPay/",
    pfx: fs.readFileSync('config/apiclient_cert.p12')

};
router.use('/', middleware(initConfig).getNotify().done(function (message, req, res, next) {
    console.log("微信支付返回的数据:" + JSON.stringify(message));
    //微信返回的数据
    if (message.return_code == 'SUCCESS' && message.result_code == 'SUCCESS') {
        var openid = '';
        try{
            openid = message.openid;
        }catch(e){
            console.log("getOpenidErr: " + e);
        }
        console.log("updatePayOpenid: " + openid);
        //更新isPay
        uSql = 'UPDATE weixinuser SET isPay = 1  WHERE openid = "' + openid + '"';
        db.query(uSql, function (err, result) {
            if (err) console.log(err);
            console.log("updatePay: " + JSON.stringify(result));
        });
        //更新dueDate
        var sql = 'SELECT * FROM weixinuser WHERE openid = "' + openid + '"';
        db.query(sql, function (err, result) {
            if (err) {
                return callback(err);
            }
            console.log("afterPaydb_result: " + JSON.stringify(result));
            if (result[0].dueDate === null || result[0].dueDate === '') {
                var endtime = moment().add(3, 'M').format('x');
                uSql = 'UPDATE weixinuser SET dueDate = "' + endtime + '"  WHERE openid = "' + openid + '"';
                db.query(uSql, function (err, result) {
                    if (err) console.log(err);
                    console.log("updatePay: " + JSON.stringify(result));
                    res.reply('success');
                });
            } else {
                var dueDate = result[0].dueDate;
                var dueDateFormat = moment(parseInt(dueDate)).format('YYYY-MM-DD');
                console.log("afterPaydueDateFormat: " + dueDateFormat);
                var endtime = moment(parseInt(dueDate)).add(3, 'M').format('x');
                var endtimeFormat = moment(parseInt(endtime)).format('YYYY-MM-DD');
                console.log("afterPayendtimeFormat: " + endtimeFormat);
                //更新dueDate
                uSql = 'UPDATE weixinuser SET dueDate = "' + endtime + '"  WHERE openid = "' + openid + '"';
                db.query(uSql, function (err, result) {
                    if (err) console.log(err);
                    console.log("updatePay: " + JSON.stringify(result));
                    res.reply('success');
                });
            }

        });

    }

}));
module.exports = router;