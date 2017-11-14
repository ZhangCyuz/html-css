			var chart;
			$(document).ready(function() {
				chart = new Highcharts.Chart({
					chart: {
						renderTo: 'container',
						defaultSeriesType: 'line',
						marginLeft: 30,
						marginRight: 0,
						x:20,
						marginBottom: 25
					},
					title: {
						text: '',
						x: 0 //center
					},
					xAxis: {
						categories: ['0:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00', '07:00', '08:00', '09:00', '10:00', '11:00'
						          , '12:00', '13:00','14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00','22:00', '23:00'],
						showLastTickLabel: true,
						title: {
							text: null
						}
					},
					yAxis: {
						title: null,
						maxZoom: 0.1
					},
					tooltip: {
						formatter: function() {
				                return '<b>'+ this.series.name +'</b><br/>'+
								this.x +': '+ this.y +'°C';
						}
					},
					legend: {
						enabled: false
					},
					
					exporting: {
						enabled: false
					},
					credits: {
						enabled: false
					},
					series: [{
						name: null,
						color: '#fff',
						data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
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
