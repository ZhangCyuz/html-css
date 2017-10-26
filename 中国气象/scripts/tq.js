var chart;
$(function() {
  chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			defaultSeriesType: 'line',
			marginRight: 130,
			marginBottom: 25
		},
		title: {
			text: 'Monthly Average Temperature',
			x: -20 //center
		},
		subtitle: {
			text: 'Source: WorldClimate.com',
			x: -20
		},
		xAxis: {
			// categories: ['0:00', '01:00', '02:00', '03:00', '04:00', '05:00',
			// 	'06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
      //   '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
      //   '22:00', '23:00']
      // categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
      // , '12', '13', '14', '15', '16', '17', '18', '19','20', '21', '22', '23']
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		},
		yAxis: {
			title: {
				text: 'Temperature (°C)'
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			formatter: function() {
	        return '<b>'+ this.series.name +'</b><br/>'+
					this.x +': '+ this.y +'°C';
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
		series: [{
			name: 'Tokyo',
			data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		}, {
			name: 'New York',
			data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
		}, {
			name: 'Berlin',
			data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
		}, {
			name: 'London',
			data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		}]
	});
});

function a() {
  document.getElementById('li2').style.display = 'block';
  document.getElementById('li2').className = 'li-2 tips';
  document.getElementById('li1').style.display = 'none';
  document.getElementById('li1').className = 'li-1 tips-1';
}
function b() {
  document.getElementById('li2').style.display = 'none';
  document.getElementById('li2').className = 'li-2 tips-1';
  document.getElementById('li1').style.display = 'block';
  document.getElementById('li1').className = 'li-1 tips';
}
function a1() {
  document.getElementById('li4').style.display = 'block';
  document.getElementById('li4').className = 'li-2 tips';
  document.getElementById('li3').style.display = 'none';
  document.getElementById('li3').className = 'li-1 tips-1';
}
function b1() {
  document.getElementById('li4').style.display = 'none';
  document.getElementById('li4').className = 'li-2 tips-1';
  document.getElementById('li3').style.display = 'block';
  document.getElementById('li3').className = 'li-1 tips';
}
function a2() {
  document.getElementById('li6').style.display = 'block';
  document.getElementById('li6').className = 'li-2 tips';
  document.getElementById('li5').style.display = 'none';
  document.getElementById('li5').className = 'li-1 tips-1';
}
function b2() {
  document.getElementById('li6').style.display = 'none';
  document.getElementById('li6').className = 'li-2 tips-1';
  document.getElementById('li5').style.display = 'block';
  document.getElementById('li5').className = 'li-1 tips';
}
function a3() {
  document.getElementById('li8').style.display = 'block';
  document.getElementById('li8').className = 'li-2 tips';
  document.getElementById('li7').style.display = 'none';
  document.getElementById('li7').className = 'li-1 tips-1';
}
function b3() {
  document.getElementById('li8').style.display = 'none';
  document.getElementById('li8').className = 'li-2 tips-1';
  document.getElementById('li7').style.display = 'block';
  document.getElementById('li7').className = 'li-1 tips';
}
function a4() {
  document.getElementById('li10').style.display = 'block';
  document.getElementById('li10').className = 'li-2 tips';
  document.getElementById('li9').style.display = 'none';
  document.getElementById('li9').className = 'li-1 tips-1';
}
function b4() {
  document.getElementById('li10').style.display = 'none';
  document.getElementById('li10').className = 'li-2 tips-1';
  document.getElementById('li9').style.display = 'block';
  document.getElementById('li9').className = 'li-1 tips';
}
function a5() {
  document.getElementById('li12').style.display = 'block';
  document.getElementById('li12').className = 'li-2 tips';
  document.getElementById('li11').style.display = 'none';
  document.getElementById('li11').className = 'li-1 tips-1';
}
function b5() {
  document.getElementById('li12').style.display = 'none';
  document.getElementById('li12').className = 'li-2 tips-1';
  document.getElementById('li11').style.display = 'block';
  document.getElementById('li11').className = 'li-1 tips';
}
function tq() {
  document.getElementById('tq').style.display = 'block';
  document.getElementById('js').style.display = 'none';
  document.getElementById('fl').style.display = 'none';
  document.getElementById('sd').style.display = 'none';
  document.getElementById('tq1').className = 'cur';
  document.getElementById('js1').className = '';
  document.getElementById('fl1').className = '';
  document.getElementById('sd1').className = '';
}
function js() {
  document.getElementById('tq').style.display = 'none';
  document.getElementById('js').style.display = 'block';
  document.getElementById('fl').style.display = 'none';
  document.getElementById('sd').style.display = 'none';
  document.getElementById('tq1').className = '';
  document.getElementById('js1').className = 'cur';
  document.getElementById('fl1').className = '';
  document.getElementById('sd1').className = '';
}
function fl() {
  document.getElementById('tq').style.display = 'none';
  document.getElementById('js').style.display = 'none';
  document.getElementById('fl').style.display = 'block';
  document.getElementById('sd').style.display = 'none';
  document.getElementById('tq1').className = '';
  document.getElementById('js1').className = '';
  document.getElementById('fl1').className = 'cur';
  document.getElementById('sd1').className = '';
}
function sd() {
  document.getElementById('tq').style.display = 'none';
  document.getElementById('js').style.display = 'none';
  document.getElementById('fl').style.display = 'none';
  document.getElementById('sd').style.display = 'block';
  document.getElementById('tq1').className = '';
  document.getElementById('js1').className = '';
  document.getElementById('fl1').className = '';
  document.getElementById('sd1').className = 'cur';
}
