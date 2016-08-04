//====================首页（/HomePage/IndexOfCustomerService/Index）==============

$(function () {

    loadStyle();
    page.init();    //  page init
    ChartsAmcharts.init(); // init demo charts
    getOnlineRepairs();
    getCheckOrder();
    ReportOrderCountByPersonalAsync();
    //修改返回顶部的控件
    backTopTop();
    //默认展示本月的消息
    showThisMonthData();
    function getCheckOrder() {
        var queryData = JSON.stringify({ MaxResultCount: 6, OrderStateEnums: [$.fsm.enums.orderStatus.Submitted.key], SkipCount: 0, Sorting: "LastModificationTime DESC" });
        abp.ajax({
            url: "/api/services/app/order/GetOrders",
            data: queryData,
            success: function (result) {
                if (result.totalCount > 0) {
                    var html = [];
                    //取消请求的数据的样式
                    var temp = "<tr><td>$code</td><td>$date</td><td class='textRight'><a href='/ServiceOrder/OrderDetail/Index?id=$id'><i class='fa glyphicon  handle-icon'>立即查看</i></a></td></tr>";
                    $.each(result.items, function (m, n) {
                        html.push(temp.replace("$code", n.code)
                            .replace("$id", n.id)
                            .replace("$date", moment(n.operation[0].creationTime)
                            .format("YYYY-MM-DD")));
                    }
                    );
                    $("#visit table tbody").append(html.join(""));
                    return;
                }
                    //$("#visit table tbody").append("暂无需回访服务单。");
                else
                    $(".visit .none-result").addClass("on");

            },
            error: function (error) {
                abp.log.error(error);
                $("#visit table tbody").append("暂无需回访服务单。");
            }
        });
    }

    function ReportOrderCountByPersonalAsync() {
        abp.ajax({
            url: "/api/services/app/order/ReportOrderCountByPersonalAsync?id=" + abp.session.userId,
            success: function (data) {
                $("#ordercountbypersonal").text("我已创建" + data + "单");
            }
        });
    }

    //根绝页面的宽度修改样式
    function loadStyle() {
        $("body").resize(function () {
            var bodyWidth = $("body").width();
            //1182
            if (bodyWidth < 1182) {
                $("#fristPic").css({
                    "marginRight": "0px",
                    "marginBottom": "10px",
                });
            } else {
                $("#fristPic").css({
                    "marginRight": "10px",
                    "marginBottom": "0px",
                });
            }
        })
        //修改首页的bgColor
        $(".page-content").addClass("mainPageBgColor");
    }
});
//默认展示本月的消息
function showThisMonthData() {
    $(".myJobs>a").eq(2).trigger("click");
}
//返回顶部
function backTopTop() {
    $(document).scroll(function () {
        $(".scroll-to-top").addClass("alwaysHide");
        if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
            $(".scroll-to-top").addClass("alwaysShow").removeClass("alwaysHide");
        }
    })
}

//首页按下enter后开始搜索
function pressEnterToSearch() {
    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) { //回车按下
            queryOrder($("#queryKey").val());
        }
    };
}

function queryOrder() {
    var type = $(".orderQuery .selectType").attr("val");

    var key = $("#queryKey").val();
    window.location.href = "/ServiceOrder/Order/QueryResult?keyWord=" + key + "&type=" + type;
}

//微信查找服务单
function weixinQueryOrder(obj) {
    var asset = "";
    if ($(obj).find(".assetId").val()) {
        asset = "&assetId=" + $(obj).find(".assetId").val()
    }
    window.location.href = "/ServiceOrder/Order/CreateServieOrder?onlineRepairId=" + $(obj).find(".onlineRepairId").val() + asset;
}

//获取微信在线报修列表
function getOnlineRepairs(callBack) {
    var josnData = JSON.stringify({ "MaxResultCount": 1000, "SkipCount": 0, "Sorting": "CreationTime Desc", "states": [0] });
    abp.ajax({
        url: "/api/services/app/onlineRepair/GetOnlineRepairs",
        data: josnData,
        success: function (sData) {
            if (sData != 0) {
                //判断状态
                if (!$("#weixin-box").hasClass("alwaysShow")) {
                    $(this).addClass("alwaysShow");
                    $(this).next().removeClass("on");
                } else {
                    $(this).next().removeClass("on");
                }

                //数据量length不为0,渲染界面
                sData = sData.items;
                //console.log(sData[0].headImgUrl);
                var html = [];
                var temp = "<div class='portlet-body onlineRepairBody' onclick='weixinQueryOrder(this)'>\
                                    <div class='media' style='border-bottom:1px solid #e5e5e5'>\
                                       <a href='javascript:;' class='pull-left'><img alt='' src='/images/default/default-icon-new.png' data-original='$img' class='media-object lazy' width='40' height='40'></a>\
                                       <h4 class='media-heading'>\
                                           <span class='pull-left weixin-name bold onlineRepairName'>$name</span>\
                                           <span class='label label-sm label-danger new hide'>new</span>\
                                           <span class='pull-right font-default'><i class='fa fa-clock-o label-sm'></i><small class='font-default small onlineRepairsCreateTime'>$date</small></span>\
                                       </h4>\
                                      <p class='weixin-describe onlineRepairproblem'>报修描述：$faultDescription</p>\
                                      <input class='onlineRepairId' type='hidden' value='$onlineRepairId' />\
                                      <input class='assetId' type='hidden' value='$assetId' />\
                                   </div>\
                                 </div>";

                var length = sData.length > 10 ? 10 : sData.length;
                for (var m = 0; m < length; m++) {
                    var tempdata = sData[m];
                    var timeDif = new Date().getTime() - moment(tempdata.creationTime).toDate().getTime();
                    timeDif = timeDif < 0 ? 0 : timeDif;//有可能服务器时间比客户端时间要快
                    html.push(temp.replace("$img", tempdata.headImgUrl || "")
                        .replace("$name", tempdata.name || "")
                        .replace("$date", getTime(timeDif))
                        .replace("$faultDescription", tempdata.faultDescription)
                        .replace("$onlineRepairId", tempdata.id)
                        .replace("$assetId", tempdata.assetId || "")
                        );
                }
                var weixinHtml = html.join("");
                if (!weixinHtml || !weixinHtml.trim()) {
                    $(".weixin-form .none-result").addClass("on");
                }
                $("#weixin-box").html(weixinHtml);

                //$("#office").html(strHtml);
                if (typeof (callBack) == "function") callBack();
                //懒加载图片
                $("img.lazy").lazyload();
            } else {
                //请求的数据量length == 0
                $("#weixin-box").removeClass("alwaysShow").next().addClass("on");
            }
        }
    });
}

//根据毫秒数 获取时间间隔
function getTime(date3) {
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000))

    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    hours = hours.toString().length == 1 ? ("0" + hours) : hours;

    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    minutes = minutes.toString().length == 1 ? ("0" + minutes) : minutes;


    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    seconds = seconds.toString().length == 1 ? ("0" + seconds) : seconds;
    // if (days)
    return days + "天 " + hours + ":" + minutes + ":" + seconds + ""
    //else
    //    return hours + ":" + minutes + ":" + seconds + ""
}

var page = function () {
    var visit = function () {     // 回访作业 适应平板     
        var oVisit = document.getElementById("visit");
        var oWeixin = document.getElementById("weixin");
        var width = document.documentElement.clientWidth;
        if (width <= 1024 && width >= 768) oVisit.style.height = "675px";
        if (width <= 768) oVisit.style.height = "562px";
        if (width <= 1024 && width >= 768) oWeixin.style.height = "412px";
        if (width <= 768) oWeixin.style.height = "408px";
    };

    var btClass = function () {
        $(".totalChart").click(function () {
            $(".totalChart").removeClass("active");
            $(this).addClass("active");
        });
        //bottomChart
        $(".bottomChartSecond").click(function () {
            $(".bottomChartSecond").removeClass("bottomChartActive");
            $(this).addClass("bottomChartActive");
        });
    };

    var datePicker = function () {
        $('.form_time').datetimepicker({
            language: 'fr',	 	 // 语言自定义
            format: "yyyy-MM",
            startView: 3,	  		// 开始 时间  0 1 2 3 4
            minView: 3,		  		// 最小等级
            maxView: 4,		 	 	// 最大等级
            todayBtn: true,	  		// 当天按钮
            todayHighlight: 1,
            autoclose: true,  		// 选择之后 关闭时间选择器        
            pickerPosition: "bottom-right", 		//  box 位置
        });
        // 更换 字体图标
        $("th[class=prev] i").attr("class", "fa fa-chevron-left");
        $("th[class=next] i").attr("class", "fa fa-chevron-right");
    };
    // 查找框
    var find = function () {
        $("#queryKey").bind("focus", function () {
            $("#mainPageDropdownButton").css("borderRightColor", "#999");
        });
        $("#queryKey").bind("blur", function () {
            $("#mainPageDropdownButton").css("borderRightColor", "#e5e5e5");
        });
        $("#mainPageDropdownButton").bind("click", function () {
            $("#mainPageDropdownButton i").removeClass("fa-angle-down");
            $("#mainPageDropdownButton i").addClass("fa-angle-up");
        });
        $("#mainPageDropdownButton").next().children().bind("click", function () {
            $(this).find("a").addClass("selectType");
            var strHtml = $(this).html();
            var strText = $(this).text().match(/设备|电话|网点/g);;
            var str = strHtml + "<i class='fa fa-angle-down'></i>";
            $("#mainPageDropdownButton").html(str);
            if (strText) {
                switch (strText[0]) {
                    case "设备":
                        $("#queryKey").attr("placeholder", "请输入设备编号");
                        break;
                    case "电话":
                        $("#queryKey").attr("placeholder", "请输入电话号码");
                        break;
                    case "网点":
                        $("#queryKey").attr("placeholder", "请输入网点名称");
                        break;
                }
            }
        });

    };

    var search = function () {   // 设备查找
        $("#mainPageDropdownButton").bind("click", function () {
            var result = $(this).attr("aria-expanded");
            if (result == "true") {
                $("#mainPageDropdownButton i").attr("class", "fa fa-angle-down")
            } else {
                $("#mainPageDropdownButton i").attr("class", "fa fa-angle-up")
            }
        });

    };
    return {
        init: function () {
            visit();
            btClass();
            datePicker();
            find();
            search();
        }
    }
}();
