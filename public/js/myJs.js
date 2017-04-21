function out(i) {
    var v = i.validity;
    if (true === v.valueMissing) {
        i.setCustomValidity("该项不能为空");
    } else {
        if (true === v.patternMismatch) {
            i.setCustomValidity("手机号码格式不正确");
        } else {
            i.setCustomValidity("");
        }
    }
}
var sex=null;
function myFun(bol) {
    if (bol) {
        sex=bol;
        $("#male").attr("src","/imgs/male_icon_pressed.png");
        $("#female").attr("src","/imgs/female_icon_normal.png");
    } else {
        sex=bol;
        $("#male").attr("src","/imgs/male_icon_normal.png");
        $("#female").attr("src","/imgs/female_icon_pressed.png");
    }
}
$(document).ready(function () {
    $("button").click(function () {
        var telephone = document.getElementById("telephone").value;
        var realname = document.getElementById("realname").value;
        if (telephone == "") {
            document.getElementById("telText").innerHTML = "手机号不能为空";
        }
        else {
            if (!(/^1(3|4|5|7|8)\d{9}$/.test(telephone))) {
                document.getElementById("telText").innerHTML = "手机号码有误，请重填";
            } else {
                if (realname == "") {
                    document.getElementById("telText").innerHTML = "姓名不能为空";
                } else {
                    var phone = $("#telephone").val();
                    var openid1 = $("#openid").val();
                    var openid = openid1.replace(/\//g, '');
                    $.post("http://heathcoudapi.xzkf365.com/api/qq/hasExist", {
                        realname: $("#realname").val(),
                        telephone: $("#telephone").val(),
                        openid: openid,
                        password: $("#password").val(),
                        birthday: $("#birthday").val()
                    }, function (data) {
                        var status = data.status;
                        console.log("status: " + status);
                        if (status == "100") {
                            var message = confirm("该微信号已绑定手机，是否继续绑定？");
                            if (message == true) {
                            $.post("http://heathcoudapi.xzkf365.com/api/qq/reg", {
                                    realname: $("#realname").val(),
                                    telephone: $("#telephone").val(),
                                    openid: openid,
                                    password: $("#password").val(),
                                    gender: sex,
                                    birthday: $("#birthday").val()
                                },
                                function (data) {
                                    var status = data.status;
                                    console.log("status: " + status);
                                    if (status == "103" || status == "100") {
                                        var phone = $("#telephone").val();
                                        var openid1 = $("#openid").val();
                                        var openid = openid1.replace(/\//g, '');
                                        $.get('/updatephone?phone=' + phone + '&openid=' + openid, function (data, status) {
                                            alert("绑定成功");
                                            WeixinJSBridge.call('closeWindow');
                                        });
                                    } else {
                                        alert("绑定失败");
                                    }
                                });
                            } else {
                            }
                        } else if (status == "104") {
                            $.post("http://heathcoudapi.xzkf365.com/api/qq/reg", {
                                    realname: $("#realname").val(),
                                    telephone: $("#telephone").val(),
                                    openid: openid,
                                    password: $("#password").val(),
                                    gender: sex,
                                    birthday: $("#birthday").val()
                                },
                                function (data) {
                                    var status = data.status;
                                    console.log("status: " + status);
                                    if (status == "103" || status == "100") {
                                        var phone = $("#telephone").val();
                                        var openid1 = $("#openid").val();
                                        var openid = openid1.replace(/\//g, '');
                                        $.get('/updatephone?phone=' + phone + '&openid=' + openid, function (data, status) {
                                            alert("绑定成功");
                                            WeixinJSBridge.call('closeWindow');
                                        });
                                    } else {
                                        alert("绑定失败");
                                    }
                                });

                        } else {
                            alert("绑定失败");
                        }
                    });
                }
            }
        }

    });
});
