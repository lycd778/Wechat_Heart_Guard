/**
 * Created by Administrator on 2017/3/23.
 */
var express = require('express');
var router = express.Router();

var request = require('request');

router.use('/', function (req, res, next) {



    var url = "http://heathcoudapi.xzkf365.com/api/User/PostLogin";
    request.post(url,{form:{username:'ydka',password:'YdKa#0125'}}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var date=JSON.parse(body);
            var results=date.results;
            var access_token=results.access_token;
            var tableUrl="http://ydka.xzkf365.com/api/exam/Question/PHQ9?access_token="+access_token;
            request.get(tableUrl, function (error1, response1, body1) {
                if (!error1 && response1.statusCode == 200) {
                    console.log("phq-9: "+body1);
                    res.render('phq9', {title: 'PHQ-9量表',body1:body1,access_token:access_token});
                }else if(!error && response.statusCode == 500){
                    res.render('error', {
                        message: '需要先绑定手机才能查看"量表"',
                        error: {}
                    });
                }
            });
        }else if(!error && response.statusCode == 500){
            res.render('error', {
                message: '需要先绑定手机才能查看"量表"',
                error: {}
            });
        }
    });

});
module.exports = router;
