/* exported rectangle */
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
function validate(data){
var result={
  istrue: false,
  reason: ''
};
if(data === ''){
  result.reason = '不能为空!';
  return result;
}
if(!(/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data))) {
  result.reason = "必须是数值";
  return result;
}
if(Number(data)<0){
  result.reason = "必须大于零";
  return result;
}
result.istrue = true;
return result;
}
function isLegalKey(key, content, pos) {
if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(key)) {
  return false;
}

if(key === '.') {
  if(pos === 0 || content.indexOf('.') !== -1){
    return false;
  }
  if(pos === 1 && content.substring(0,1) === '-') {
    return false;
  }
}

if(key === 'e') {
  if(pos === 0 || content.indexOf('e') !== -1 || content.indexOf('E') !== -1) {
    return false;
  }
  if(pos === 1 && content.substring(0,1) === '-') {
    return false;
  }
}

if(key === 'E') {
  if(pos === 0 || content.indexOf('e') !== -1 || content.indexOf('E') !== -1){
    return false;
  } 
  if(pos === 1 && content.substring(0,1) === '-') {
    return false;
  }
}
return true;
}