/**
 * Created by Administrator on 2017/4/13.
 */
var express = require('express');
var router = express.Router();
var wechatAPI = require('wechat-api');
var schedule = require("node-schedule");
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

    // scheduleCronstyle();
    // var media_id='d43CMTG_UFEWT3KxNdlwidYHxqUKwTj5BVTzCLXCaWnCm4yoynDaspKiBFkYR9rc';
    //  api.massSendNews(media_id, true, function (err1,result1) {
    //      if(err1){
    //          console.log("massSendNewsResult"+JSON.stringify(result1));
    //      }
    //      console.log("massSendNewsResult"+JSON.stringify(result1));
    //      res.send("群发成功!"+JSON.stringify(result1));
    //  });
    api.massSendText("这是群发的测试信息。", true, function (err1, result1) {
        if (err1) {
            console.log("massSendNewsResult" + JSON.stringify(result1));
        }
        console.log("massSendNewsResult" + JSON.stringify(result1));
        res.send("群发成功!" + JSON.stringify(result1));

    });


// });

});
module.exports = router;
function scheduleCronstyle() {
    schedule.scheduleJob('0 1 * * * *', function () {
        console.log('scheduleCronstyle:' + new Date());
    });
}