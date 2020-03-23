function roundFractional(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
function rectangle() {
    return {
      'perimeter' : function(width, height) {
        return 2 * roundFractional(Number(width) + Number(height),1);
      },
      'area': function(width, height) {
        return roundFractional(Number(width)*Number(height),2);
      }
    };
}
function validate(field){
  // det DOM error message
  var $data=$(field),
      $msg=$(field+'-validation-message');
  // null
  if($data.val()===''){
    $msg.html("不能为空！");
    $data.select();
    return false;
  }
  // number
  if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val()))){
    $msg.html("必须是数值！");
    $data.select();
    return false;
  }
  // validate>0
  if($data.val()<0){
    $msg.html("必须大于0！");
    $data.select();
    return false;
  }
  return true;
}