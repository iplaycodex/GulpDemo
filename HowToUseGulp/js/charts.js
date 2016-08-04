var chart2;
var chart3;
var myBrowser = function () {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
    if (userAgent.indexOf(".NET")) {
        return "Edge";
    }; //判断是否IE Edge浏览器
}

var initChartSample1 = function (arr, categoryField, dataDateFormat) {
    var mb = myBrowser();
    var column = 0.1;
    var axisX = "#555";
    if ("IE" == mb || "Edge" == mb) {
        column = 0;
        axisX = "#fff";
    }
    var AmObj = {
        "type": "serial",                   // 柱图的主题
        "theme": "light",
        "language": "zh",
        "startDuration": 1,
        "fontFamily": "Microsoft YaHei",          // 轴的字体、颜色
        "color": '#888',
        "colors": ["#4bca81"],
        "precision":0,
        "legend": {                        // 
            "equalWidths": false,
            "useGraphSettings": true,
            "valueAlign": "right",
            "valueWidth": 120
        },
        "dataProvider": arr,
        "valueAxes": [{             // Y轴坐标值
            "id": "distanceAxis",
            "axisAlpha": 0,         // 刻度 、轴线 透明度
            "gridAlpha": 0,
            "position": "left",
            "precision": 0,
        }, {
            "id": "latitudeAxis",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false,
            "position": "right",
        }, {
            "id": "durationAxis",
            "duration": "mm",
            "durationUnits": {
                "hh": "h ",
                "mm": "min"
            },
            "axisAlpha": 0,
            "gridAlpha": 0,
            "inside": true,
            "position": "right",
            "title": "duration"
        }],
        "graphs": [{
            "precision":0,
            "alphaField": "alpha",                 // 气泡
            "balloonText": "[[value]]单",
            "dashLengthField": "dashLength",
            "fillAlphas": 1,
            "legendPeriodValueText": "总共: [[value.sum]] 单",
            "legendValueText": "[[value]] 单",
            "title": "完成单数",
            "type": "column",
            "valueField": "distance",
            "valueAxis": "distanceAxis"
        }],
        "chartCursor": {                          // 移入后的 柱形
            "categoryBalloonDateFormat": "DD",
            "cursorAlpha": column,
            "cursorColor": "#000",
            "fullWidth": true,
            "valueBalloonsEnabled": false,
            "zoomable": false
        },
        "categoryField": categoryField,
        "categoryAxis": {
            "dateFormats": [{
                "period": "DD",
                "format": "DD"
            }, {
                "period": "WW",
                "format": "MMM DD"
            }, {
                "period": "MM",
                "format": "MMM"
            }, {    
                "period": "YYYY",
                "format": "YYYY"
            }],
            //"parseDates": true,                 // x轴的 轴线
            "autoGridCount": true,
            "axisColor": axisX,
            "gridAlpha": 0,
            "gridColor": "#000",
            "gridCount": 50,
            "gridPosition": "start",
            "labelRotation": 0
        },
        "exportConfig": {
            "menuBottom": "20px",
            "menuRight": "22px",
            "menuItems": [{
                "icon": Metronic.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                "format": 'png'
            }]
        }
    }
    if (dataDateFormat) {
        AmObj.dataDateFormat = dataDateFormat;
    }

    var chart = AmCharts.makeChart("chart5", AmObj);

    $('#chart5').closest('.portlet').find('.fullscreen').click(function () {
        chart.invalidateSize();
    });
}

var initChartSample2 = function () {
    var myBrowser = function () {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1) {
            return "Chrome";
        }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
        if (userAgent.indexOf(".NET")) {
            return "Edge";
        }; //判断是否IE Edge浏览器
    }

    var initChartSample1 = function (arr, categoryField, dataDateFormat) {
        console.log(dataDateFormat);
        var mb = myBrowser();
        var column = 0.1;
        var axisX = "#555";
        if ("IE" == mb || "Edge" == mb) {
            column = 0;
            axisX = "#fff";
        }
        var AmObj = {
            "type": "serial",                   // 柱图的主题
            "theme": "light",
            "language": "zh",
            "startDuration": 1,
            "fontFamily": "Microsoft YaHei",          // 轴的字体、颜色
            "color": '#888888',
            "precision": 0,
            "legend": {                        // 
                "equalWidths": false,
                "useGraphSettings": true,
                "valueAlign": "right",
                "valueWidth": 120
            },
            "dataProvider": arr,
            "valueAxes": [{             // Y轴坐标值
                "id": "distanceAxis",
                "axisAlpha": 0,         // 刻度 、轴线 透明度
                "gridAlpha": 0,
                "position": "left",
                "title": "单数",
            }, {
                "id": "latitudeAxis",
                "axisAlpha": 0,
                "gridAlpha": 0,
                "labelsEnabled": false,
                "position": "right",
            }, {
                "id": "durationAxis",
                "duration": "mm",
                "durationUnits": {
                    "hh": "h ",
                    "mm": "min"
                },
                "axisAlpha": 0,
                "gridAlpha": 0,
                "inside": true,
                "position": "right",
                "title": "duration"
            }],
            "graphs": [{
                "alphaField": "alpha",                 // 气泡
                "balloonText": "[[value]] 单",
                "dashLengthField": "dashLength",
                "fillAlphas": 0.7,
                "legendPeriodValueText": "总共: [[value.sum]] 单",
                "legendValueText": "[[value]] 单",
                "title": "完成单数",
                "type": "column",
                "valueField": "distance",
                "valueAxis": "distanceAxis"
            }],
            "chartCursor": {                          // 移入后的 柱形
                "categoryBalloonDateFormat": "DD",
                "cursorAlpha": column,
                "cursorColor": "#000000",
                "fullWidth": true,
                "valueBalloonsEnabled": false,
                "zoomable": false
            },
            "categoryField": categoryField,
            "categoryAxis": {
                "dateFormats": [{
                    "period": "DD",
                    "format": "DD"
                }, {
                    "period": "WW",
                    "format": "MMM DD"
                }, {
                    "period": "MM",
                    "format": "MMM"
                }, {
                    "period": "YYYY",
                    "format": "YYYY"
                }],
                //"parseDates": true,                 // x轴的 轴线
                "autoGridCount": true,
                "axisColor": axisX,
                "gridAlpha": 0,
                "gridColor": "#000",
                "gridCount": 50,
                "gridPosition": "start",
                "labelRotation": 45
            },
            "exportConfig": {
                "menuBottom": "20px",
                "menuRight": "22px",
                "menuItems": [{
                    "icon": Metronic.getGlobalPluginsPath() + "amcharts/amcharts/images/export.png",
                    "format": 'png'
                }]
            }
        }
        if (dataDateFormat) {
            AmObj.dataDateFormat = dataDateFormat;
        }

        var chart = AmCharts.makeChart("chart5", AmObj);

        $('#chart5').closest('.portlet').find('.fullscreen').click(function () {
            chart.invalidateSize();
        });
    }

    initChart2();
    //initChartSample3();
}
var initChart2 = function () {
    if (!isDev) {
        chart2 = AmCharts.makeChart("chartdiv1", {
            "type": "pie",
            "theme": "light",
            "startDuration": 1,
            "addClassNames": false,
            "legend": {
                "position": "right",
                "marginRight": 100,

            }, 
            "dataProvider": [{
                "marginRight": 100,
            }],
            "dataProvider": [{
                "title": "待审核",
                "value": 68,
            }, {
                "title": "遗留问题",
                "value": 23
            }, {
                "title": "已发布",
                "value": 123
            }, {
                "title": "处理中",
                "value": 78
            }, {
                "title": "未发布",
                "value": 98
            }],
            "titleField": "title",
            "valueField": "value",
            "labelRadius": 3,
            "balloonText": "[[title]]:</b> [[percents]]%<br><span style='font-size:14px'><b>[[value]]</span>",
            "radius": "32%",
            "innerRadius": "80%",
            "labelText": "",
            "export": {
                "enabled": true
            }
        });
    } else {
        abp.ajax({
            url: "/api/services/app/order/ReportOrderCurrentStatesCountAsync",
            success: function (data) {
                if (data.unPublish || data.working || data.unBack || data.unCheck) {
                    //判断状态
                    if (!$("#fristPic").children(".portlet-body").hasClass("on")) {
                        $(this).addClass("on");
                        $(this).next().removeClass("on");
                    } else {
                        $(this).next().removeClass("on");
                    }
                    //请求成功展示数据
                var ds = [];
                ds.push({
                    title: "待派工",
                    value: data.unPublish
                });
                ds.push({
                    title: "处理中",
                    value: data.working
                });
                ds.push({
                    title: "待回访",
                    value: data.unBack
                });
                ds.push({
                    title: "待审核",
                    value: data.unCheck
                });
                    if (false) {
                    chart2.dataProvider = ds;
                        chart2.validateData();
                }
                else {
                    chart2 = AmCharts.makeChart("chartdiv1", {
                        "type": "pie",
                        "theme": "light",
                        "startDuration": 1,
                        "addClassNames": false,
                        "legend": {
                            "position": "right",
                            "marginRight": 100,
                        },
                        "dataProvider": ds,
                        "titleField": "title",
                        "valueField": "value",

                        "labelRadius": 3,
                        "balloonText": "[[title]]:</b> [[percents]]%<br><span style='font-size:14px'><b>[[value]]</span>",

                        "radius": "26%",
                        "innerRadius": "80%",
                        "labelText": "",
                        "export": {
                            "enabled": true
                        }
                    });
                }
                } else {
                    //接口返回数据为空
                    $("#fristPic").children(".portlet-body").removeClass("on").next().addClass("on");
            }
            }
        });
    }
}
var initChartSample3 = function (type) {
    if (!isDev) {
        chart3 = AmCharts.makeChart("chartdiv2", {
            "type": "pie",
            "theme": "light",
            "dataProvider": [{
                "title": "客户回访：",
                "value": 88
            }, {
                "title": "微信报修：",
                "value": 30
            }, {
                "title": "电话报修：",
                "value": 100
            }, {
                "title": "其它：",
                "value": 27
            }],
            "titleField": "title",
            "valueField": "value",
            "labelRadius": 20,

            "radius": "32%",
            "innerRadius": "40%",
            "labelText": "[[title]] <br>约[[value]]件",
            "balloonText": "[[title]]:[[percents]]%<br><span style='font-size:14px'>约<b>[[value]]</b>件 </span>",
            "export": {
                "enabled": true
            }
        });
    } else {
        var startTime = moment().startOf('day').format('YYYY-MM-DD HH:mm');
        var endTime = moment().format('YYYY-MM-DD HH:mm');
        switch (type) {
            case 2:
                startTime = moment().startOf('week').format('YYYY-MM-DD HH:mm');
                break;
            case 3:
                startTime = moment().startOf('month').format('YYYY-MM-DD HH:mm');
                break;
        }
        abp.ajax({
            url: "/api/services/app/order/ReportPersonalOrderCurrentStatesCountByTimeAsync?userid=" + abp.session.userId + "&startTime=" + startTime + "&endTime=" + endTime,
            success: function (data) {
                if (data[0] || data[1] || data[2] || data[3] || data[4]) {
                    //判断状态
                    var obj = $("#secondChart").children(".portlet-body");
                    if (!obj.hasClass("on")) {
                        obj.addClass("on");
                        obj.next().removeClass("on");
                    } else {
                        obj.next().removeClass("on");
                    }

                    //数据请求成功!
                var ds = [];
                ds.push({ title: "电话报修创建", value: data[0] });
                ds.push({ title: "微信报修创建", value: data[1] });
                ds.push({ title: "已派工", value: data[2] });
                ds.push({ title: "已回访", value: data[3] });
                ds.push({ title: "已审核", value: data[4] });
                    if (false) {
                    chart3.dataProvider = ds;
                        chart3.validateData();
                } else {
                    chart3 = AmCharts.makeChart("chartdiv2", {
                        "type": "pie",
                        "theme": "light",
                        "dataProvider": ds,
                        "titleField": "title",
                        "valueField": "value",
                        "labelRadius": 20,
                        "radius": "28%",
                        "innerRadius": "40%",
                        "labelText": "[[title]] <br>共[[value]]件",
                        "balloonText": "[[title]]:[[percents]]%<br><span style='font-size:14px'>共<b>[[value]]</b>件 </span>",
                        "export": {
                            "enabled": true
                        }
                    });
                }
                } else {
                    //接口返回数据为空
                    $("#secondChart").children(".portlet-body").removeClass("on").next().addClass("on");
            }

            }
        });
    }
};

var ChartsAmcharts = function () {
    return {
        //main function to initiate the module

        init: function () {
            //initChartSample1();           
            statisticsDay();
            initChartSample2();
            initChartSample3(3);
        }
    };
}();

//按日
function statisticsDay() {
    if (isDev) {
        $.post("/api/services/app/orderRepair/RepairStatistics?repairType=1", null, function (obj) {
            if (obj.result.spReportOrderDateOutputs.length != 0) {
                //判断状态
                if (!$("#topChart").children(".portlet-body").hasClass("on")) {
                    $(this).addClass("on");
                    $(this).next().removeClass("on");
                } else {
                    $(this).next().removeClass("on");
                }

            var result = [];
            var date = new Date();
            date = date.setMonth(date.getMonth() - 1);
            var days = Math.floor((new Date() - date) / (24 * 3600 * 1000))
            var tempDate = new Date();
            for (var j = 0; j <= days; j++) {
                var objDate = moment(tempDate).format("MM/DD");
                var isok = false;
                var items = obj.result.spReportOrderDateOutputs;
                for (var i = 0; i < items.length; i++) {
                    var itemDate = items[i]["date"];
                    var newDate = itemDate.substring(5, 10);
                    if (newDate == objDate) {
                        isok = true;
                        result[result.length] = { date: items[i]["date"].substring(5,10), distance: items[i]["count"] };
                        break;
                    }
                }
                if (!isok)
                    result[result.length] = { date: objDate };
                    tempDate.setDate(tempDate.getDate() - 1);
            }
            initChartSample1(result.reverse(), "date", "MM-DD");
            $(".repairTotal").text(obj.result.total);
            $(".repairTypeNumber").text(obj.result.repairTypeNumber);
            $(".repairTypeSpan").text("今日报修量");
            } else {
                //请求的数据量length == 0
                $("#topChart").children(".portlet-body").removeClass("on").next().addClass("on");
            }
        });
    }
    else {
        var arr = [{              // 生成柱形图                 
            "date": "2012-02-01",
            "distance": 87,                // 柱的高度        
        }, {
            "date": "2012-02-02",
            "distance": 22,
        }, {
            "date": "2012-02-03",
            "distance": 32,
        }, {
            "date": "2012-02-04",
            "distance": 12,
        }, {
            "date": "2012-02-05",
            "distance": 32,
        }, {
            "date": "2012-02-06",
            "distance": 22,
        }, {
            "date": "2012-02-07",
            "distance": 22,
        }, {
            "date": "2012-02-08",
            "distance": 12,
        }, {
            "date": "2012-02-09",
            "distance": 12,
        }, {
            "date": "2012-02-10",
            "distance": 21,
        }, {
            "date": "2012-02-11",
            "distance": 22,
        }, {
            "date": "2012-02-12",
            "distance": 22,
        }, {
            "date": "2012-02-13",
            "townName": "Salt Lake City",
            "distance": 21,
        }, {
            "date": "2012-02-14",
            "distance": 12,
        }, {
            "date": "2012-02-15",
            "distance": 35,
        }, {
            "date": "2012-02-16",
            "distance": 87,
        }, {
            "date": "2012-02-17",
            "distance": 35,
        }, {
            "date": "2012-02-18",
            "distance": 77,
        }, {
            "date": "2012-02-19",
            "distance": 100,
        }, {
            "date": "2012-02-20",
            "distance": 44,
        }, {
            "date": "2012-02-21",
            "distance": 33,
        }, {
            "date": "2012-02-22",
            "distance": 100,
        }, {
            "date": "2012-02-23",
            "distance": 5,
        }, {
            "date": "2012-02-24",
            "distance": 5,
        }, {
            "date": "2012-02-25",
            "distance": 88,
        }, {
            "date": "2012-02-26",
            "distance": 77,
        }, {
            "date": "2012-02-27",
            "distance": 3,
        }, {
            "date": "2012-02-28",
            "distance": 1,
        }, {
            "date": "2012-02-29",
            "distance": 22,
        }, {
            "date": "2012-02-30",
            "distance": 12,
        }, {
            "date": "2012-02-31",
            "distance": 1,
        }];
        initChartSample1(arr, "date");
        $(".repairTotal").text(106);
        $(".repairTypeNumber").text(13);
        $(".repairTypeSpan").text("今日报修量");
    }
}

//按周
function statisticsWeek() {
    $.post("/api/services/app/orderRepair/RepairStatistics?repairType=2", null, function (obj) {
        var result = [];
        for (var i = 0; i < obj.result.length; i++) {
            result[result.length] = { date: obj.result[i]["date"], distance: obj.result[i]["count"] };
        }
        initChartSample1(result, "DD");
    });
}

//按月
function statisticsMonth() {
    if (isDev) {
        $.post("/api/services/app/orderRepair/RepairStatistics?repairType=3", null, function (obj) {
            if (obj.result.spReportOrderDateOutputs.length != 0) {
                //判断状态
                if (!$("#topChart").children(".portlet-body").hasClass("on")) {
                    $(this).addClass("on");
                    $(this).next().removeClass("on");
                } else {
                    $(this).next().removeClass("on");
                }

            var result = [];
            var date = new Date();
            for (var j = 0; j < 12; j++) {
                var objDate = moment(date).format("YYYY/MM");
                var isOk = false;
                var items = obj.result.spReportOrderDateOutputs;
                for (var i = 0; i < items.length; i++) {
                    if (objDate == items[i]["date"]) {
                        result[result.length] = { date: items[i]["date"], distance: items[i]["count"] };
                        isOk = true;
                        break;
                    }
                }
                if (!isOk)
                    result[result.length] = { date: objDate };
                date.setMonth(date.getMonth() - 1);
            }
            initChartSample1(result.reverse(), "date", "MM");
            $(".repairTotal").text(obj.result.total);
            $(".repairTypeNumber").text(obj.result.repairTypeNumber);
            $(".repairTypeSpan").text("本月报修量");
            
            } else {
                //请求返回的数组length == 0
                $("#topChart").removeClass("on").children(".portlet-body").next().addClass("on");
            }
        });
    }
    else {
        var arr = [{              // 生成柱形图                 
            "date": "2012-01",
            "distance": 87,                // 柱的高度        
        }, {
            "date": "2012-02",
            "distance": 22,
        }, {
            "date": "2012-03",
            "distance": 32,
        }, {
            "date": "2012-04",
            "distance": 12,
        }, {
            "date": "2012-05",
            "distance": 32,
        }, {
            "date": "2012-06",
            "distance": 22,
        }, {
            "date": "2012-07",
            "distance": 22,
        }, {
            "date": "2012-08",
            "distance": 12,
        }, {
            "date": "2012-09",
            "distance": 12,
        }, {
            "date": "2012-10",
            "distance": 21,
        }, {
            "date": "2012-11",
            "distance": 22,
        }, {
            "date": "2012-12",
            "distance": 22,
        }, {
            "date": "2013-1",
            "townName": "Salt Lake City",
            "distance": 21,
        }, {
            "date": "2013-2",
            "distance": 12,
        }, {
            "date": "2013-3",
            "distance": 35,
        }, {
            "date": "2013-4",
            "distance": 87,
        }, {
            "date": "2013-5",
            "distance": 35,
        }, {
            "date": "2013-6",
            "distance": 77,
        }, {
            "date": "2013-7",
            "distance": 100,
        }, {
            "date": "2013-8",
            "distance": 44,
        }, {
            "date": "2013-9",
            "distance": 33,
        }, {
            "date": "2013-10",
            "distance": 100,
        }, {
            "date": "2013-11",
            "distance": 5,
        }, {
            "date": "2013-12",
            "distance": 5,
        }];
        initChartSample1(arr, "date");
        $(".repairTotal").text(106);
        $(".repairTypeNumber").text(33);
        $(".repairTypeSpan").text("本月报修量");
    }
}
