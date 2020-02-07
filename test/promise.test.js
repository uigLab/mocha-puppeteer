const { readCow, myPromiseFunction } = require("../app/promise");
const expect = require("chai").expect;

describe("#Promise", () => {
  describe("#readCow", () => {
    it("should work!", done => {
      readCow((err, content) => {
        expect(content).to.be.equal("COW\n");
        done();
      });
    });
    it("should not have an error!", done => {
      readCow((err, content) => {
        expect(err).to.not.exist;
        done();
      });
    });
  });

  it("myPromise should work!", async () => {
    const msg = await myPromiseFunction("test");
    expect(msg).to.equal("test");
  });
});
