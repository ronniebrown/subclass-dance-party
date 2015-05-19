describe("wormDancer", function() {

  var wormDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wormDancer = new makeWormDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    console.log(wormDancer);
    expect(wormDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(wormDancer.$node, 'toggle');
    wormDancer.step();
    expect(wormDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(wormDancer, "step");
      expect(wormDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wormDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wormDancer.step.callCount).to.be.equal(2);
    });
  });
});