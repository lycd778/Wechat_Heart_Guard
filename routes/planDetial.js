/**
 * Created by Administrator on 2017/4/12.
 */
var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');
router.get('/', function (req, res1, next) {
    var recordid=req.query.ReportId;
    var type=req.query.type;
    var userid=req.query.userid;
    console.log("recordid:"+recordid+" type:"+type+" userid:"+userid);
    var url='http://heathcoudapi.xzkf365.com/api/homerehabilitationdetail/get?recordid='+recordid+'&type='+type+'&Userid='+userid;
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var date=JSON.parse(body);
            detial = null;
            detial = date.results;
            console.log("detial:"+JSON.stringify(detial));
            if (type==1){
                res1.render('sportPlan',{title: '运动计划', detial: detial});
            }
            else if(type==2){
                res1.render('medicinePlan',{title: '用药计划', detial: detial});
            }
        }
    });

});
module.exports = router;