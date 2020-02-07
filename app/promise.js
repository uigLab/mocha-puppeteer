const fs = require("fs");

// Read a text file and return a callback(err, data)
const readCow = cb => {
  fs.readFile("cow.txt", "utf8", cb);
};

// Custom promise function with setTimeout
const myPromiseFunction = (arg) => {
  return new Promise((resolve, reject) => {
    let data = arg;
    setTimeout(() => {
      data = arg;
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    }, 1000);
  });
};


module.exports = {
  myPromiseFunction,
  readCow
};
