/**
 * Created by Administrator on 2017/4/21.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

router.use('/', function (req, res, next) {
    var userid = req.query.userid;
    var access_token=req.query.access_token;
    var phq9=req.body;
    console.log("userid: "+userid);
    console.log("access_token: "+access_token);

    url="http://ydka.xzkf365.com/api/exam/Question/report/PHQ9/"+userid+"?access_token="+access_token;
        request.post(url,{form:phq9}, function (error, response, body) {
            console.log("response: "+JSON.stringify(response));
            var data={'status':null,'result':null};
            if (!error && response.statusCode == 201) {
                data.status=100;
                getScaleurl='http://ydka.xzkf365.com/api/exam/GetList/'+userid+'?access_token='+ access_token;
                request.get(getScaleurl, function (error1, response1, body1) {
                    data.result=JSON.parse(response1.body);
                    res.send(data);
                });
            }else if(!error && response.statusCode == 500){
                data.status=104;
                res.send(data);
            }else{
                data.status=101;
                res.send(data);
            }

    });


});
module.exports = router;