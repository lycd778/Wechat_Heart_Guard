/**
 * Created by lingxiao-Ching on 2017/3/15.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var oauth=require('./routes/oauth');
var index=require('./routes/index');
var pay=require('./routes/pay');
var afterPay=require('./routes/afterPay');
var jssdkCheck=require('./routes/jssdkCheck');
var phq9=require('./routes/phq9');
var plan=require('./routes/homePlan');
var planDetial=require('./routes/planDetial');
var createMenu=require('./routes/createMenu');


var wechat=require('./routes/wechat');
var list = require('./routes/list');
var detial = require('./routes/detial');
var binding = require('./routes/binding');
var updatephone = require('./routes/updatephone');

var app = express();

var log4js = require('log4js');
log4js.configure({
  "appenders": [
    {
      "type": "console",
      "category": "console"
    },
    {
      "type": "dateFile",
      "filename": "E:/Wechat_Heart_Guard/logs/",
      "pattern": "debug/yyyyMMddhh.txt",
      "absolute": true,
      "alwaysIncludePattern": true,
      "category": "logInfo"
    }
  ],
  "levels": {
    "logInfo": "DEBUG"
  }
});
var logInfo = log4js.getLogger('logInfo');

console.log("log_start start!");
logInfo.info("成功启动项目");
logInfo.trace('This is a Log4js-Test');
logInfo.debug('We Write Logs with log4js');
logInfo.info('You can find logs-files in the log-dir');
console.log("log_start end!");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/createMenu',createMenu);
app.use('/',index);
app.use('/MP_verify_Zxh1jEggXVhuR0W2.txt',index);
app.use('/oauth',oauth);
app.use('/pay',pay);
app.use('/afterPay',afterPay);
app.use('/phq9',phq9);
app.use('/plan',plan);
app.use('/planDetial',planDetial);
app.use('/jssdkCheck',jssdkCheck);
app.use('/wechat',wechat);
app.use('/list', list);
app.use('/detial', detial);
app.use('/binding', binding);
app.use('/updatephone', updatephone);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
