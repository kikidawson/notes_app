function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();
  assert.isTrue("Should be true", circle.radius === 10);
  assert.isEqual("Should equal", circle.radius, 10)
  assert.isEqual("Should equal", "kiki", "kiki")
};

testCircleRadiusDefaultsTo10();