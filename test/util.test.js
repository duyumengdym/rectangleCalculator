var expect = chai.expect;

describe('矩形计算器面积计算功能测试套件', function(){
  it('宽度和高度是整数',function(){
    var r = rectangle();
    expect(r.area(4,5)).to.be.equal(20);
  });

  it('宽度和高度是小数', function() {
    var r = rectangle();
    expect(r.area(0.1,0.2)).to.be.equal(0.02);
  });

  it('宽度和高度是整数字符串', function() {
    var r = rectangle();
    expect(r.area('4','5')).to.be.equal(20);
  });

  it('宽度和高度都是特殊值 0', function() {
    var r = rectangle();
    expect(r.area(0,0)).to.be.equal(0);
  });

  it('宽度和高度都是非法字符串', function(){
    var r = rectangle();
    expect(isNaN(r.area('a','b'))).to.be.ok;
  });
});

describe('矩形计算器周长计算功能测试套件', function(){
  it('宽度和高度是整数', function(){
    var r = rectangle();
    expect(r.perimeter(4,5)).to.be.equal(18);
  });

  it('宽度和高度是小数', function() {
    var r = rectangle();
    expect(r.perimeter(0.1,0.2)).to.be.equal(0.6);
  });

  it('宽度和高度是整数字符串', function() {
    var r = rectangle();
    expect(r.perimeter('4', '5')).to.be.equal(18);
  });

  it('宽度和高度都是特殊值 0', function() {
    var r = rectangle();
    expect(r.perimeter(0, 0)).to.be.equal(0);
  });

  it('宽度和高度都是非法字符串', function(){
    var r = rectangle();
    expect(isNaN(r.perimeter('a', 'b'))).to.be.ok;
  });
});