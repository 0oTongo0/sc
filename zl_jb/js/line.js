
	$(function () {
    $('#container').highcharts({
        chart: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'   //改背景颜色
       	},  
        title: {
            text: '金宝交易趋势图',
            x: -20, //center
             style: {
             color: '#fff',//颜色
             fontSize:'14px'  //字体
              }
        },
        xAxis: {//价格
            categories: [2013.1,2014.1,2014.7,2015.1,2015.7,2015.7],
			    labels : {
			        style : {
			            color: '#fff',//颜色
			        }
			    }
        },
        yAxis: {
            title: {
                text: '成交量 ($)',
             style: {
             color: '#fff',//颜色
             fontSize:'14px'  //字体
              }  
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#fff'
            }]
        },
        tooltip: {
            valueSuffix: '$'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{ //成交量
            name: '新增',
            data: [2388000.00,16940975.00,3063467.00,484201.00,224387.00,4011039.00,638736.00]
        }],
        exporting:{
                    enabled:false
                },
                credits: {
                    enabled: false
                },
                
    });
});

