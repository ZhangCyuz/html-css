function i1() {
  document.getElementById('span1').style.display = 'block';
  document.getElementById('span2').style.display = 'none';
  document.getElementById('span3').style.display = 'none';
  document.getElementById('i1').className = 'cur';
  document.getElementById('i2').className = '';
  document.getElementById('i3').className = '';
}
function i2() {
  document.getElementById('span1').style.display = 'none';
  document.getElementById('span2').style.display = 'block';
  document.getElementById('span3').style.display = 'none';
  document.getElementById('i1').className = '';
  document.getElementById('i2').className = 'cur';
  document.getElementById('i3').className = '';
}
function i3() {
  document.getElementById('span1').style.display = 'none';
  document.getElementById('span2').style.display = 'none';
  document.getElementById('span3').style.display = 'block';
  document.getElementById('i1').className = '';
  document.getElementById('i2').className = '';
  document.getElementById('i3').className = 'cur';
}
