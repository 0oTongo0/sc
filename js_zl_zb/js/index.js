
	$(function () {
//		折线图
    $('#container').highcharts({
        chart: {
            backgroundColor: 'transparent'   //改背景颜色
       	},  
        title: {
            text: '账户交易趋势图',
            x: -20, //center
            y:10,
             style: {
             color: '#fff',//颜色
             fontSize:'0.16rem'  //字体
              }
        },
        xAxis: {
        	tickWidth:0,
            categories: [0.10,0.15,0.20,0.25,0.30,0.35,0.40],
			    labels : {
			    	 tickInterval: 500,
			        	style : {
			            color: '#fff',//颜色
			            fontSize:'0.1rem',  //字体
//			            marginTop:'0.02rem'
			        },
			       
			    }
        },
        yAxis: {
        	tickWidth:0,
            title: {
            x: 10,
            text: '成交量 ($)',
             style: {
             color: '#fff',//颜色
             fontSize:'0.1rem'  //字体
              }  
            },
			    labels : {
			    	 tickInterval: 500,
			        	style : {
			            color: '#fff',//颜色
			            fontSize:'0.1rem',  //字体
			            marginTop:'0.02rem'
			        },
			       
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
            borderWidth: 0,
                itemStyle : {
        		'fontSize' : '0.1rem',   //右侧文字
    			},
            itemStyle: {
    			color: '#fff'    //右侧字体颜色
  			}
        },
        series: [{ 
            name: '出售',
            data: [2388000.00,16940975.00,3063467.00,484201.00,224387.00,4011039.00,638736.00]
        }, {
            name: '兑换',
            data: [0.00,432630.00,1206544.00,474468.00,68245.00,54095.00,53268.00]
        }, {
            name: '提现',
            data: [0.00,0,0,0,0,0,0]
        }, {
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

