function footImg(obj, index) {
  //删样式
  $('.item_cell').each(function(i){
    $(this).find('p').removeClass('imgOn'+(i+1));
    $(this).find('p').addClass('imgOff'+(i+1));
  })

  //加样式
  $(obj).find('p').removeClass('imgOff'+(index+1));
  $(obj).find('p').addClass('imgOn'+(index+1));
}
