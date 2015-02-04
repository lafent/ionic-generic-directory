describe("This is a basic test without much going on.", function() {
  it("Should expect true to be true.", function() {
    expect(true).toBe(true);
  });
  
  it("Should expect math to work.", function() {
    expect(1+1).toBe(2);
  });

  it("Should expect math to really work.", function() {
    expect(2+2).toBe(4);
  });

  it("Should expect math to really work.", function() {
    expect(2 - 3).toBe(-1);
  });
});
