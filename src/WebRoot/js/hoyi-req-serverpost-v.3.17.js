/// <reference path="RSA/security.js" />
//../js/jquery/jquery-2.1.3.js


/**
	Hoyi Post Event 方法
	author  ellen
	广州快鱼信息技术有限公司, 添加加密上传的支持.
	
	添加select修改的服务提交方法.
	
	2019.5.6
*/
/**
 * 获取参数值.
 */
 function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

/**
 * 验证Form.
 * @param formid
 * @returns
 */
function validateForm(formid) {
    //validate方法参数可选 return
    return $(formid).validate({
        submitHandler: function (form) {
            //alert('submitHandler');
        }
    }).form();
}
/**
    加密方法.
*/
function Decrypk(password) {
    //加密模
    var Modulus = HoyipRd.split(';')[0];
    //公钥指数
    var public_exponent = HoyipRd.split(';')[1];
    //通过模和公钥参数获取公钥
    var key = new RSAUtils.getKeyPair(public_exponent, "", Modulus);
    //颠倒密码的顺序，要不然后解密后会发现密码顺序是反的
    var reversedPwd = password.split("").reverse().join("");
    //对密码进行加密传输 
    var encrypedPwd = RSAUtils.encryptedString(key, reversedPwd);
    return encrypedPwd;
}

function call(functionName, rdata) {
    eval("this." + functionName + "(" + rdata + ")");
}

function InitHoyiClick() {
	InitHoyiClickVPar('*');
}

function InitHoyiClickVPar(vparid) {
	var parcontents = "*";
	if(vparid != null && vparid != ""){
		parcontents = vparid;
	}
    $(parcontents + "[ServerCtrl='true']").each(function (idx, item) {
    	var clicktar = $(item).attr('OnHoyiClick');// 单击提交服务器
        //alert('clickatr:' + clicktar);
    	if(clicktar != null){
    	    $(item).unbind('click').click(function () {
    	            var _OnBeforeClick = $(this).attr('OnBeforeClick');
    	            if (_OnBeforeClick != null) {
    	                var ret = eval(_OnBeforeClick);
    	                if (ret == false) {
    	                    return;
    	                }
    	            }

    	            var pjson = {};
    	            var putdata = {};

    	            var currentindex = null;
    	            for (var ees in HOYICLICK_EVENTID) {
    	                if (HOYICLICK_EVENTID[ees].eventid == $(this).attr('OnHoyiClick')) {
    	                    currentindex = ees;
    	                    pjson = HOYICLICK_EVENTID[ees].params;
    	                }
    	            }

    	            for (var key in pjson) {
    	                putdata[key] = $(pjson[key]).val();
    	            }

    	            var pjson1 = {};
    	            for (var aas in HOYIPOST_EVENTPAMS) {
    	                if (HOYIPOST_EVENTPAMS[aas].eventid == $(this).attr('OnHoyiClick')) {
    	                    currentindex = aas;
    	                    pjson1 = HOYIPOST_EVENTPAMS[aas].params;
    	                }
    	            }

    	            var hoyiseced = null;
    	            var hoyiurldecoded = null;

    	            for (var i = 0; i < pjson1.length; i++) {
    	                hoyiseced = $('#' + pjson1[i]).attr('HoyiSeced');
    	                hoyiurldecoded = $('#' + pjson1[i]).attr('HoyiUDecode');



    	                if (hoyiseced == true || hoyiseced == 'true') {
    	                    // 加密.
    	                    var password = $('#' + pjson1[i]).val();
    	                    var encrypedPwd = Decrypk(password);

    	                    putdata[pjson1[i]] = encrypedPwd;
    	                } else if (hoyiurldecoded == false || hoyiurldecoded == 'false') {
    	                    // 不想加密的可以添加:"HoyiUDecode = 'false'"来去掉加密.
    	                	// 不加密，编码掉百分号
    	                    var password = $('#' + pjson1[i]).val();
    	                    var encrypedPwd = password.replace(/%/g, '%25');

    	                    putdata[pjson1[i]] = encrypedPwd; 
    	                } else {
    	                    // 默认全部加密.
    	                    var urldpwd = $('#' + pjson1[i]).val();
    	                    var encryurlpwd = encodeURIComponent(urldpwd);

    	                    putdata[pjson1[i]] = encryurlpwd;
    	                }
    	            }

    	            var pdata = {
    	                "behavior": $(this).attr('OnHoyiClick'),
    	            };

    	            $.extend(pdata, putdata);
    	            //var ExData = $(this).attr('ExData');

    	            HOYI_POST_HAVEPARSENT(pdata, function (rdata, status) {

    	                //alert('ExData:' + ExData);
    	                //if (ExData != null) {
    	                //    call(ExData, rdata);
    	                //} else {
    	                    eval(rdata);
    	                //}
    	            });
    	    });
    	}
    	
    	var changetar = $(item).attr('OnHoyiChange');// Change提交服务器
    	
        //alert('changetar:' + changetar);
    	if(changetar != null){
   		   $(item).unbind('change').change(function () {
                var _OnBeforeClick = $(this).attr('OnBeforeChange');
                if (_OnBeforeClick != null) {
                    var ret = eval(_OnBeforeClick);
                    if (ret == false) {
                        return;
                    }
                }

                var pjson = {};
                var putdata = {};

                var currentindex = null;
                for (var ees in HOYICLICK_EVENTID) {
                    if (HOYICLICK_EVENTID[ees].eventid == $(this).attr('OnHoyiChange')) {
                        currentindex = ees;
                        pjson = HOYICLICK_EVENTID[ees].params;
                    }
                }

                for (var key in pjson) {
                    putdata[key] = $(pjson[key]).val();
                }

                var pjson1 = {};
                for (var aas in HOYIPOST_EVENTPAMS) {
                    if (HOYIPOST_EVENTPAMS[aas].eventid == $(this).attr('OnHoyiChange')) {
                        currentindex = aas;
                        pjson1 = HOYIPOST_EVENTPAMS[aas].params;
                    }
                }

                var hoyiseced = null;
                var hoyiurldecoded = null;

                for (var i = 0; i < pjson1.length; i++) {
                    hoyiseced = $('#' + pjson1[i]).attr('HoyiSeced');
                    hoyiurldecoded = $('#' + pjson1[i]).attr('HoyiUDecode');

                    if (hoyiseced == true || hoyiseced == 'true') {
                        // 加密.
                        var password = $('#' + pjson1[i]).val();
                        var encrypedPwd = Decrypk(password);

                        putdata[pjson1[i]] = encrypedPwd;
                    } else if (hoyiurldecoded == false || hoyiurldecoded == 'false') {
                        // 不想加密的可以添加:"HoyiUDecode = 'false'"来去掉加密.
                    	// 不加密，编码掉百分号
                        var password = $('#' + pjson1[i]).val();
                        var encrypedPwd = password.replace(/%/g, '%25');

                        putdata[pjson1[i]] = encrypedPwd; 
                    } else {
                        // 默认全部加密.
                        var urldpwd = $('#' + pjson1[i]).val();
                        var encryurlpwd = encodeURIComponent(urldpwd);

                        putdata[pjson1[i]] = encryurlpwd;
                    }
                }

                var pdata = {
                    "behavior": $(this).attr('OnHoyiChange'),
                };

                $.extend(pdata, putdata);
                //var ExData = $(this).attr('ExData');

                HOYI_POST_HAVEPARSENT(pdata, function (rdata, status) {

                    //alert('ExData:' + ExData);
                    //if (ExData != null) {
                    //    call(ExData, rdata);
                    //} else {
                        eval(rdata);
                    //}
                });
            });
        }
    	
    });
}

$(function () {
    InitHoyiClick();
})