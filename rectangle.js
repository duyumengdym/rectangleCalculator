/* global $:true*/ 
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());
    var p = 2 * roundFractional(w + h, 1),
        a = roundFractional(w * h, 2);
    // $perimeter.val(p);
    // $area.val(a);
    var rect = rectangle();
    $perimeter.val(rect.perimeter(w, h));
    $area.val(rect.area(w, h));
  }); 
});