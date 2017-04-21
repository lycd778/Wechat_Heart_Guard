/**
 * Created by lingxiao-Ching on 2017/3/17.
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');
var Payment = require('wechat-pay').Payment;
var OAuth = require('wechat-oauth');
var request = require('request');
var mysql = require('mysql');
var moment = require('moment');


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

//初始化wechat-pay模块
var initConfig = {
    partnerKey: 'yidekangan1234567891234567891234',
    appId: 'wxfb3801993da030d8',
    mchId: '1388932902',
    notifyUrl: "http://heartguardwx.xzkf365.com/afterPay/",
    pfx: fs.readFileSync('config/apiclient_cert.p12')

};
var payment = new Payment(initConfig);

/**
 * 支付
 **/
router.use('/', function (req, res, next) {

    var code = req.query.code;
    // var openid = '\'oPPfSww-UoP3AKLQ43-d07CmyrVU\'';
    //获取票券
    client.getAccessToken(code, function (err, result) {
        //获取openid
        var openid = result.data.openid;
        console.log("payOpenid: " + openid);
        var url = "http://heathcoudapi.xzkf365.com/api/qq/Reportslist?openid=" + openid;
        console.log("listUrl:" + url);
        //判断是否已绑定
        request(url, function (error, response, body) {

            if (!error && response.statusCode == 200) {
                list = null;
                var date = JSON.parse(body);
                console.log("list: " + body);
                list = date.results;
                //判断是否有报告
                if (list.length == 0) {
                    res.render('list', {title: '我的报告', list: list});
                } else {
                    var sql = 'SELECT * FROM weixinuser WHERE openid = "' + openid + '"';
                    db.query(sql, function (err, result) {
                        if (err) {
                            return callback(err);
                        }
                        console.log("weixinuser: " + JSON.stringify(result[0]));

                           //判断是否已支付
                        if (result[0].isPay === 0) {
                            wechatPay(openid, res);
                        } else {
                            //判断是支付否过期
                            var now= moment().format('x');
                            var sql = 'SELECT * FROM weixinuser WHERE openid = "' + openid + '"';
                            db.query(sql, function (err, result) {
                                if (err) {
                                    return callback(err);
                                }
                                console.log("payDate: " + now);
                                console.log("dueDate: " + result[0].dueDate);
                                var re = result[0].dueDate - now;
                                console.log("payTime: " + re);
                                if (re > 0) {
                                    res.render('list', {title: '我的报告', list: list});
                                } else {
                                    wechatPay(openid, res);
                                }

                            });

                        }

                    });
                }
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
function wechatPay(openid, res) {
    var order = {
        body: '我的报告',
        attach: '{"有效期":"三个月"}',
        out_trade_no: 'ReportPlan' + (+new Date),
        total_fee: 1,
        spbill_create_ip: '127.0.0.1',//'服务器ip'
        openid: openid,
        trade_type: 'JSAPI'
    };
    payment.getBrandWCPayRequestParams(order, function (err, payargs) {
        var payType=1;//类型是实验室报告

        var starttime= moment().format('YYYY-MM-DD');
        var endtime= moment().add(3,'M').format('YYYY-MM-DD');
        var validityTime=starttime+"至"+endtime;


        if (err) {
            console.log("err: " + err);
        }
        console.log("payargs: " + JSON.stringify(payargs));

        res.render('pay', {
            appId: payargs.appId,
            timeStamp: payargs.timeStamp,
            nonceStr: payargs.nonceStr,
            package: payargs.package,
            signType: payargs.signType,
            paySign: payargs.paySign,
            payType:payType,
            validityTime:validityTime
            // body:body,
            // total:total,
            // num:num,
            // proname:project_name,
            // state:state
        });
    });
}