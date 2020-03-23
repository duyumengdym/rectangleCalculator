/* global $:true*/ 
$(function(){
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $widthValidate = $('#width-validation-message'),
      $heightValidate = $('#height-validation-message'),
      istrue = false;
  $width.focusout(function(){
      var result = validate($width.val());
      istrue = result.istrue;
      if(!result.istrue){
          $widthValidate.html('宽度' + result.reason);
          $width.select(); 
      }else{
        $widthValidate.html('');
      }
  });
  $height.focusout(function(){
      var result = validate($height.val());
      istrue = result.istrue;
      if(!result.istrue){
          $heightValidate.html('高度' + result.reason);
          $height.select(); 
      }else{
        $heightValidate.html('');
      }
  });
  $btnCal.click(function(){
    if(!istrue){
      return;
    }
    var w = $width.val(),       
        h = $height.val();
    var rect = rectangle();
    $perimeter.val(rect.perimeter(w, h));
    $area.val(rect.area(w, h));
  })
});