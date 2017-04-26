/**
 * Created by lingxiao-Ching on 2017/3/14.
 */
function menuResponse(res, message,api,db) {
    if (message.EventKey === 'szx') {
        api.sendText(message.FromUserName,'请回复您想咨询的问题，我们会在第一时间给您回复。',function (err, result) {
            if (err) {
                console.log('error', err);
            }
            console.log('info', 'reply message success');
        });
        res.transfer2CustomerService();

    }
    else if (message.EventKey === 'dlb') {

    }
    else if (message.EventKey === 'cyy') {
        res.reply("<a href=\"https://www.hqms.org.cn/usp/roster/index.jsp\">点击进入，查询医院</a>");
    }
    else if (message.EventKey === 'cy') {
        res.reply([
            {
                title: '药物指导手册',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz_png/vPSSXd5FvYViahHMbnaa0kykc3khP0hH4Oqaicz299XWajLhjTao7MpIEzrWTt3eY7DEx24ichbQ2lIh45BZibKtLw/0?wx_fmt=png',
                url: 'http://mp.weixin.qq.com/s?__biz=MzI4NTM4Mjk3Mg==&mid=2247483696&idx=1&sn=f8c66fd8e0ec325fcc13e4256ceabcff&chksm=ebec4163dc9bc87591459ae2bff5d60553708c0002d52630f543e0a03985e8af05beefa747d9&scene=0#wechat_redirect'
            }
        ]);
    }
    else if (message.EventKey === 'wdbg') {
        res.reply("<a href=\"http://weixinH5.xzkf365.com:3000/list?openid='$openid'\">点击进入我的报告页面</a>");
    }
    else if (message.EventKey === 'kwm') {
        res.reply([
            {
                title: '合泰-心脏卫士',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRkvgUTUH0TPP7XMFLDwNSeKsYAl5aNl3WouqXg82go5qF8Thib7cia0eq0nnL55OJHic9RjibTz0HuADQ/0?wx_fmt=jpeg',
                url: 'www.halents.com'
            }
        ]);
    }
    else if (message.EventKey === 'gcp') {
        res.reply([
            {
                title: '产品介绍',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz_jpg/vPSSXd5FvYV2iaZ2AZXE15Uqw2kWIib4hboxflibG8jzxdVDTia6zONzJEwJDz7S7Sib5ibta1j0nERAQyuibE4aiaXMmg/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MzI4NTM4Mjk3Mg==&mid=2247483730&idx=1&sn=9c44e031e6bcf0894454726172903aaa&chksm=ebec4101dc9bc81750564e3948b597edf8395a6efac2520c7e98ed9c312f3d37c856c27996f5&mpshare=1&scene=23&srcid=1012KjJSUawFTEdO7c2ksShF#rd'
            }
        ]);
    }
    else if (message.EventKey === 'xapp') {
        res.reply("<a href=\"http://shouji.baidu.com/soft/item?docid=7992036&from=landing&f=search_app_%E5%BF%83%E8%84%8F%E5%8D%AB%E5%A3%AB%40list_1_title%401%40search_sug_app\">心脏卫士安卓</a> \r\n <a href=\"https://itunes.apple.com/cn/app/%E5%BF%83%E8%84%8F%E5%8D%AB%E5%A3%AB/id1198463508?mt=8\">心脏卫士IOS</a>​​");
    }
    else if (message.EventKey === 'jjjh') {
        res.reply("居家计划开发中");
    }


}
module.exports = menuResponse;