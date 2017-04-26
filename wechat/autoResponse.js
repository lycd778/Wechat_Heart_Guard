/**
 * Created by lingxiao-Ching on 2017/3/14.
 */

function autoResponse(res, message) {
    if (message.Content === '1' || message.Content === '心' || message.Content === '心脏' || message.Content === '妙招') {
        res.reply([
            {
                title: '冠心病患者的日常用药误区',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRlwaQmxp4GCON0mGu4iatW0HsulXge2LjapEzLOZrtq9xDhYLZP54JNR7kPq9nPjrLZ8sAzZOk01AA/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=211033610&idx=1&sn=9972cf03aae31be3357117741ffdc94c&scene=20#rd'
            }, {
                title: '为何老人容易心律失常？',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRlwaQmxp4GCON0mGu4iatW0HDol6wDXY07JLMUnHokS5UoibPPj0ZPsUBaCiaw3iahfAxcJnSibFiac3mKA/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=211033610&idx=2&sn=835599a28f7aaebf8cadc165fdbca842&scene=20#rd'
            }, {
                title: '老年左心衰的七大征兆',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRng8u2AJuTFyZQLluIF9oCgh1sQYicF3SrVwCZTYNdebpNcKZkmt6nvc25dAFVrePDWicqfWF6bib8Kg/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=210155963&idx=1&sn=d7c62e29cd0f67f9995abfc548089470&scene=20#rd'
            }, {
                title: '手有这痕迹心脏更健康',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRng8u2AJuTFyZQLluIF9oCgWEjRJ2OUcQPlJzgI0t7oI511tfOpIM8wNnq1aUoILquWKHkcicvBRiaQ/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=210155963&idx=3&sn=4d5c66ee19b210f8cd7b501f3ddd02de&scene=20#rd'
            }, {
                title: '冠心病食疗',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRlwaQmxp4GCON0mGu4iatW0HsulXge2LjapEzLOZrtq9xDhYLZP54JNR7kPq9nPjrLZ8sAzZOk01AA/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=210155963&idx=2&sn=9ee800d08f25696211eb064bac5266ac&scene=20#rd'
            }, {
                title: '盘点诱发心脏病的六大致命细节',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnO8zBibnBoFFIv4Cw1mE478koMB77W6Hem3o1P51uI7QnfNXiamQ1H6sjDGApJLYXqVCSce2kzHGAQ/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209337451&idx=1&sn=469961bb2fc4d90332d186f4c2e43c5c&scene=20#rd'
            }, {
                title: '怀疑自己得“胃癌”曾欲轻生，多年的“老胃病”竟是“心病”',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnO8zBibnBoFFIv4Cw1mE4786V8iajRScpbUx1PoPygRicicT5qwVZknaZiaZArhNSBHh1pTrEPMVyBz2Q/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209337451&idx=2&sn=e57367b888f7c07d9a28008965f55b26&scene=20#rd'
            }, {
                title: '引起动脉硬化的几个原因',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnO8zBibnBoFFIv4Cw1mE478Z2fd0zj6gaoVwAKsnjhGKfhdln5Ljh3zlScic9RwiaVDoHJUpiaoXhaAA/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209337451&idx=3&sn=4b509a33682ada6455d33ee25e11cc0c&scene=20#rd'
            }
        ]);
    } else if (message.Content === '2' || message.Content === '运动') {
        res.reply([
            {
                title: '赤脚跑比穿鞋更好吗？',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnEMzxnBZs5eusrl87KWfj9nWsAIcbledEuCbMtibM03DCX05SCpqvUusW5cVq9dxibs0xPEa6jmDMg/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=210471502&idx=1&sn=6d4d3de7059d3e2282f0976e8346baf9&scene=20#rd'
            }, {
                title: '何为心脏负荷试验?',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRlToI8ibH5uqic4BwnPv56NibfLzCQ2IQzuo7vDicRaONcqovdge2zjtErMRjYfe1UQAga1Fpypl1Tiavg/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209720110&idx=1&sn=936d023f4369c3a948272e03b5cbdd7a&scene=20#rd'
            }, {
                title: '万能的处方，运动是良医。',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnrEaVCyMmqPicicP3PSAKYeA891MIWfGszW4XUNp2W05SGia96E9cD3icsUrfJBR5TOYpZibj9CSdvLXw/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=208213919&idx=2&sn=ea8cdcbe11ba71a207b0128be2b4a248&scene=20#rd'
            }, {
                title: '康复运动对心脏病的治疗有哪些作用？',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRmOmFaLC6Zjv94tiaiaDCAmBb70gXOsmibyz2gozbibumqRIk0eMpFCQJiaE79KwgeiaBceV4SdXfp0fdFw/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209177094&idx=3&sn=1da1d22de20918870242a4c76850e70e#rd'
            }
        ]);
    }
    else if (message.Content === '3' || message.Content === '视频') {
        res.reply([
            {
                title: '一部发人深省的公益小短片：人生最后十年，你如何过？',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRkhVPpkqY3q6t8ZMv39n0PhM4f74fLw2h6MeFhvFlnFwnA25FMVoQib2ujDe74dAGHKuWHFOM6YbCw/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=211907953&idx=1&sn=bacb71423ecdc47f93deea0aec499dc9&scene=18#rd'
            }
        ]);
    }
    else if (message.Content === '4' || message.Content === 'BMI' || message.Content === 'bmi') {
        res.reply("<a href=\"http://cn.onlinebmicalculator.com/\">点击进入网页，计算BMI</a>​");
    }
    else if (message.Content === '心脏康复经历' || message.Content === '经历' || message.Content === '康复') {
        res.reply([
            {
                title: '心康经历分享',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRk5ibtiaDibIuh3jF0yp654HKQoqBGFdYmKBm5Dcp74LWWLusWM6EHL21Wk1zcYW0uJO5OSuPKSFh3ug/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=211140151&idx=1&sn=eb6aef371b894de27d432da2d0771718&scene=20#rd'
            }
        ]);
    }

    else if (message.Content === '下载' || message.Content === '客户端' || message.Content === '软件' || message.Content === '产品' || message.Content === '安装') {
        res.reply("<a href=\"http://shouji.baidu.com/soft/item?docid=7992036&from=landing&f=search_app_%E5%BF%83%E8%84%8F%E5%8D%AB%E5%A3%AB%40list_1_title%401%40search_sug_app\">心脏卫士安卓</a> \r\n <a href=\"https://itunes.apple.com/cn/app/%E5%BF%83%E8%84%8F%E5%8D%AB%E5%A3%AB/id1198463508?mt=8\">心脏卫士IOS</a>​​");
    }
    else if (message.Content === '心脏卫士' || message.Content === 'APP心脏' || message.Content === '客户端心脏' || message.Content === '心脏卫士客户端' || message.Content === '客户端心脏卫士' || message.Content === 'APP卫士' || message.Content === 'APP心') {
        res.reply("<a href=\"http://shouji.baidu.com/soft/item?docid=7992036&from=landing&f=search_app_%E5%BF%83%E8%84%8F%E5%8D%AB%E5%A3%AB%40list_1_title%401%40search_sug_app\">下载心脏卫士APP</a>​​​​");
    }
    else if (message.Content === '6分钟步行测试' || message.Content === '6分钟步行测试APP' || message.Content === '客户端6分钟' || message.Content === 'app6分钟步行测试' || message.Content === 'APP6分钟步行测试' || message.Content === '步行测试' || message.Content === '6分钟') {
        res.reply([
            {
                title: '“6分钟步行测试”APP介绍',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnMq8vEDvnA04aWF3QE6FSwCyuktdlWX0vm61fSDhnm6MDIzXIh5CJPVqticv80ic2l36UGvRNibr8hA/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209534473&idx=1&sn=3cee1500fcca986dbc528b018c5574d7&scene=18#rd'
            }
        ]);
    }

    else if (message.Content === '评估盒子' || message.Content === '评估' || message.Content === '盒子') {
        res.reply([
            {
                title: '“评估盒子"APP介绍',
                description: '',
                picurl: 'https://mmbiz.qlogo.cn/mmbiz/WqpSdibDCBRnMq8vEDvnA04aWF3QE6FSwO8uyEFb7bjcMSQsibd1j9iapSYInCPpr4xMLyX72H90OpGvMrm9lFicbg/0?wx_fmt=jpeg',
                url: 'http://mp.weixin.qq.com/s?__biz=MjM5OTEzMTkwOQ==&mid=209534584&idx=1&sn=3e1f4457a8a258f08193d5138d3cc907&scene=18#rd'
            }
        ]);
    }
    else if (message.Content === '推荐运动') {
        res.reply("您是属于：\r\n0、患有不同程度的心血管疾病 \r\n1、静坐少动/无日常活动或运动/体适能很差者\r\n2、体力活动极少/无运动/体适能较差者\r\n3、偶尔体力活动/无或未达到规律运动/体适能较差或稍差者\r\n4、日常体力活动/规律的中等强度或较大强度运动\r\n5、大量日常体力活动/规律的较大强度运动\r\n \r\n请回复上列选择的数字，及您在“测•指标”中的预计最大代谢当量（Mets）和最大心率(次/分)\r\n\r\n（格式：1-7-180）​");
    }
    else if (message.Content === '医院' || message.Content === '查询医院' || message.Content === '查医院') {
        res.reply("<a href=\"https://www.hqms.org.cn/usp/roster/index.jsp\">点击进入，查询医院</a>​");
    } else {
        res.reply("我们会尽快回复您的留言​");
    }
}
module.exports = autoResponse;