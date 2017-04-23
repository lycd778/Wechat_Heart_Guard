/**
 * Created by Administrator on 2017/4/13.
 */
var express = require('express');
var router = express.Router();
var wechatAPI = require('wechat-api');
var schedule = require("node-schedule");
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
//微信
var config = {
    token: 'xiao_weixin_test',
    appid: 'wxefdad35532e3e77c',
    appsecret: '6cbeefd9d76f33c40a56807324cbf6d7',
    encodingAESKey: ''
};
//初始化wechat-api模块
var api = new wechatAPI(config.appid, config.appsecret);

// var news={
//     "articles": [
//         {
//             "thumb_media_id":"iLdkQ72pZ_2HDGjsUXGaqlS1RKRsQmblOh_L6db8q6APF7Kfbkqd1eX6cjFvZmyS",
//             "author":"Lingxiao",
//             "title":"您订阅的居家计划及实验室检查报告服务到期",
//             "content_source_url":"www.qq.com",
//             "content":"content",
//             "digest":"digest",
//             "show_cover_pic":"1"
//         }
//     ]
// };
router.use('/', function (req, res, next) {
    // api.uploadNews(news, function (err,result){
    //     if(err){
    //         res.send("uploadNewsERR: "+JSON.stringify(err));
    //     }
    //     console.log("uploadNewsResult"+JSON.stringify(result));
    //    var media_id=result.media_id;


    // var media_id='d43CMTG_UFEWT3KxNdlwidYHxqUKwTj5BVTzCLXCaWnCm4yoynDaspKiBFkYR9rc';
    //  api.massSendNews(media_id, true, function (err1,result1) {
    //      if(err1){
    //          console.log("massSendNewsResult"+JSON.stringify(result1));
    //      }
    //      console.log("massSendNewsResult"+JSON.stringify(result1));
    //      res.send("群发成功!"+JSON.stringify(result1));
    //  });

    var sql = 'select * from weixinuser where isPay = 1';
    db.query(sql, function (err, result) {
        if (err) {
            return callback(err);
        }
        console.log("db_result: " + JSON.stringify(result));

        var openidList=new Array();
        var now= moment().format('x');
        for(var item in result)
        {
            var dueDate=result[item].dueDate;
            var week_dueDate=moment(dueDate).subtract(7, 'days').format('x');
            var re=week_dueDate-now;
            if(re<=0){
                openidList.push(result[item].openid);
            }
        }

        schedule.scheduleJob('0 1 * * * *', function () {
            console.log('微信支付到期提醒群发任务在:' + new Date()+"执行成功。" );
            api.massSendText("这是群发的测试信息。", openidList, function (err1, result1) {
                if (err1) {
                    console.log("massSendNewsResult" + JSON.stringify(result1));
                }
                console.log("massSendNewsResult" + JSON.stringify(result1));
                res.send("群发成功!" + JSON.stringify(result1));
            });
        });
    });



// });

});
module.exports = router;
