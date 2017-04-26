/**
 * Created by Administrator on 2017/3/23.
 */
var express = require('express');
var router = express.Router();

var request = require('request');
var OAuth = require('wechat-oauth');
var mysql = require('mysql');
//连接数据库
var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'weixin_ydka',
    port: 3306
});
db.connect();
//微信
var config = {
    token: 'HeartGuard',
    appid: 'wxfb3801993da030d8',
    appsecret: '876c2adcaf2acba2a042121f0925b137',
    encodingAESKey: 'MO6S0KKt3bvuhZBnLshFDmkLEXNxFjVCM0U6NP5Z3g3'
};

//初始化wechat-oauth模块
var client = new OAuth(config.appid, config.appsecret);

router.use('/', function (req, res, next) {
    var code = req.query.code;
    //获取openid
    client.getAccessToken(code, function (err, result) {
        var openid = '';
        try{
            openid = result.data.openid;
        }catch(e){
            console.log("getOpenidErr: " + e);
        }
        console.log("phq9Openid: " +openid);
        //根据openid从数据库获取phone
        var sql = 'select * from weixinuser where openid = "' + openid + '"';
        db.query(sql, function (err, result) {
            if (err) {
                return callback(err);
            }
            console.log("phq9_phone: " + JSON.stringify(result[0].phone));
            var phone=result[0].phone;
            console.log("phq9phone: " +phone);
            //获取access_token
            var url = "http://heathcoudapi.xzkf365.com/api/User/PostLogin";
            request.post(url, {form: {username: 'ydka', password: 'YdKa#0125'}}, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var date = JSON.parse(body);
                    var results = date.results;
                    var access_token = results.access_token;
                    //根据phone获取userid
                    var listUrl = "http://heartguardapi.xzkf365.com/api/patient/List?access_token=" + access_token;
                    request.post(listUrl,{form: {page: '1', rows: '2',q:phone}},function (error1, response1, body1) {
                        if (!error1 && response1.statusCode == 200) {
                            console.log("userLISt: " + body1);
                            var userList=JSON.parse(body1);
                            var userid=userList.results.rows[0].userid;
                            //获取量表
                            var tableUrl = "http://ydka.xzkf365.com/api/exam/Question/PHQ9?access_token=" + access_token;
                            request.get(tableUrl, function (error2, response2, body2) {
                                if (!error1 && response2.statusCode == 200) {
                                    console.log("phq-9: " + body2);
                                    res.render('phq9', {title: 'PHQ-9量表', body2: body2, access_token: access_token,userid:userid});
                                } else if (!error2 && response2.statusCode == 500) {
                                    res.render('error', {
                                        message: '需要先绑定手机才能查看"量表"',
                                        error: {}
                                    });
                                }
                            });

                        } else if (!error1 && response1.statusCode == 500) {
                            res.render('error', {
                                message: '需要先绑定手机才能查看"量表"',
                                error: {}
                            });
                        }
                    });

                } else if (!error && response.statusCode == 500) {
                    res.render('error', {
                        message: '需要先绑定手机才能查看"量表"',
                        error: {}
                    });
                }
            });

        });


    });

});
module.exports = router;
