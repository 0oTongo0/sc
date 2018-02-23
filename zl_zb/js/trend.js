
	$(function () {
    $('#container').highcharts({
        chart: {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'   //改背景颜色
       	},  
        title: {
            text: '众宝市场走势图',
            x: -20, //center
             style: {
             color: '#fff',//颜色
             fontSize:'14px'  //字体
              }
        },
        xAxis: {//价格
            categories: [0.10,0.15,0.20,0.25,0.30,0.35,0.40],
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
            name: '出售',
            data: [2388000.00,16940975.00,3063467.00,484201.00,224387.00,4011039.00,638736.00]
        }, {
            name: '兑现',
            data: [0.00,432630.00,1206544.00,474468.00,68245.00,54095.00,53268.00]
        }, {
            name: '充值',
            data: [0.00,0,0,0,0,0,0]
        }, {
            name: '提现',
            data: [0.00,0,0,0,0,0,0]
        },{
            name: '购买',
            data: [0.00,0,0,0,0,0,0]
        }],
        exporting:{
                    enabled:false
                },
                credits: {
                    enabled: false
                },
                
    });
});

 