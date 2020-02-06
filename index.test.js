const {readCow, myPromiseFunction} = require('./index');
// const assert = require("assert");
const expect = require("chai").expect;
const assert = require("chai").assert;
const should = require("chai").should();


describe("#index", () => {
  describe('#readCow', () => {
      it("should work!", (done) => {
        readCow((err, content) => {
          expect(content).to.be.equal('yo\n');
          done();
        })
      })
      it("should not have an error!", (done) => {
        readCow((err, content) => {
          expect(err).to.not.exist;
          done();
        })
      })
  })
  describe("#myPromiseFunction", () => {
    it("should work!", async() => {
      const msg = await myPromiseFunction("test")
      assert.equal(msg, "test");
    });

  });
  
})



describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});


describe("Math", () => {
  it("shuld return 3 * 3", () => {
    assert.equal(9, 3*3);
  })
})

const testFunction = (arg) => {
  return arg
}

const sum = (arg1, arg2) => {
  return arg1 + arg2;
}


describe("testFunction(4)", () => {
  it("should return 4", () => {
    expect(testFunction(4)).to.equal(4);
  })
})

describe("Test 2 Group", () => {
  it("should return  added numbers", () => {
    expect(sum(2,2)).to.equal(4);
  });

  it("should throw error", () => {
    expect(sum(2,2, "23")).to.throw(TypeError, "sum expects only numbers");
  })
  
})

describe("User", function() {
  describe("#save()", function() {
    it("should save without error", function(done) {
      var user = new User("Luna");
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});
